import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  hasPermission,
  type Permission,
  type SessionUser,
  type UserRole,
} from "./types";

const COOKIE_NAME = "checkpoint_retro_session";
const SESSION_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

function getSecret(): string {
  return (
    process.env.AUTH_SECRET ||
    "checkpoint-retro-fallback-development-auth-secret-do-not-use-in-prod"
  );
}

interface TokenPayload extends SessionUser {
  iat: number;
  exp: number;
}

export function createSessionToken(user: SessionUser): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: TokenPayload = {
    ...user,
    iat: now,
    exp: now + SESSION_TTL_SECONDS,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(payloadB64)
    .digest("base64url");

  return `${payloadB64}.${signature}`;
}

export function verifySessionToken(token: string): SessionUser | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;

    const [payloadB64, signature] = parts;
    const expectedSignature = crypto
      .createHmac("sha256", getSecret())
      .update(payloadB64)
      .digest("base64url");

    // Constant-time comparison
    const sigA = Buffer.from(signature);
    const sigB = Buffer.from(expectedSignature);
    if (sigA.length !== sigB.length || !crypto.timingSafeEqual(sigA, sigB)) {
      return null;
    }

    const payloadJson = Buffer.from(payloadB64, "base64url").toString("utf8");
    const payload = JSON.parse(payloadJson) as TokenPayload;

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return null;
    }

    if (!payload.id || !payload.email || !payload.role) {
      return null;
    }

    return {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      role: payload.role,
    };
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  if (!sessionCookie?.value) return null;

  return verifySessionToken(sessionCookie.value);
}

export async function setSessionCookie(user: SessionUser): Promise<void> {
  const token = createSessionToken(user);
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function requireSession(): Promise<SessionUser> {
  const user = await getSession();
  if (!user) {
    redirect("/admin/login");
  }
  return user;
}

export async function requireRole(
  allowedRoles: UserRole[]
): Promise<SessionUser> {
  const user = await requireSession();
  if (!allowedRoles.includes(user.role)) {
    redirect("/admin/forbidden");
  }
  return user;
}

export async function requirePermission(
  permission: Permission
): Promise<SessionUser> {
  const user = await requireSession();
  if (!hasPermission(user.role, permission)) {
    redirect("/admin/forbidden");
  }
  return user;
}
