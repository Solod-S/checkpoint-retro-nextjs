"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/db/prisma";
import { clearSessionCookie, getSession, setSessionCookie } from "./session";
import { PRESET_USERS, UserRole, type SessionUser } from "./types";

const loginSchema = z.object({
  email: z.string().email(),
  role: z.nativeEnum(UserRole).optional(),
});

export async function loginAction(
  _prevState: unknown,
  formData: FormData
): Promise<{ error?: string }> {
  const email = formData.get("email");
  const roleInput = formData.get("role");

  const parsed = loginSchema.safeParse({
    email,
    role: roleInput ? (roleInput as UserRole) : undefined,
  });

  if (!parsed.success) {
    return { error: "Некорректный email или роль" };
  }

  const { email: cleanEmail, role } = parsed.data;

  // 1. Try finding user in database
  let targetUser: SessionUser | null = null;
  try {
    const dbUser = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });
    if (dbUser) {
      targetUser = {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
        role: dbUser.role,
      };
    }
  } catch {
    // Database offline or during initial configuration
  }

  // 2. If not found in DB or DB offline, check presets
  if (!targetUser) {
    const matchedPreset = Object.values(PRESET_USERS).find(
      (u) => u.email.toLowerCase() === cleanEmail.toLowerCase()
    );

    if (matchedPreset) {
      targetUser = matchedPreset;
    } else if (role) {
      targetUser = {
        id: `usr-${Date.now()}`,
        email: cleanEmail,
        name: cleanEmail.split("@")[0] ?? "Пользователь",
        role,
      };
    } else {
      // Default to AUTHOR for new emails without explicit role
      targetUser = {
        id: `usr-${Date.now()}`,
        email: cleanEmail,
        name: cleanEmail.split("@")[0] ?? "Пользователь",
        role: UserRole.AUTHOR,
      };
    }
  }

  await setSessionCookie(targetUser);
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await clearSessionCookie();
  redirect("/admin/login");
}

export async function switchRoleAction(newRole: UserRole): Promise<void> {
  const current = await getSession();
  const base = current ?? PRESET_USERS[newRole];

  await setSessionCookie({
    ...base,
    role: newRole,
    name: `${base.name.split(" (")[0]} (${newRole})`,
  });

  redirect("/admin");
}
