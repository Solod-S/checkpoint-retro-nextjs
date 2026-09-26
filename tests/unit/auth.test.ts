import { describe, expect, it } from "vitest";
import {
  createSessionToken,
  verifySessionToken,
} from "@/lib/auth/session";
import {
  canAccessAdminSection,
  hasPermission,
  UserRole,
  type SessionUser,
} from "@/lib/auth/types";

describe("Auth Session Tokens", () => {
  const sampleUser: SessionUser = {
    id: "usr-test-1",
    email: "editor@checkpoint-retro.local",
    name: "Тестовый Редактор",
    role: UserRole.EDITOR,
  };

  it("creates a signed token and verifies it correctly", () => {
    const token = createSessionToken(sampleUser);
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
    expect(token.includes(".")).toBe(true);

    const verified = verifySessionToken(token);
    expect(verified).not.toBeNull();
    expect(verified?.id).toBe(sampleUser.id);
    expect(verified?.email).toBe(sampleUser.email);
    expect(verified?.role).toBe(UserRole.EDITOR);
  });

  it("rejects token with invalid signature", () => {
    const validToken = createSessionToken(sampleUser);
    const [payload] = validToken.split(".");
    const forgedToken = `${payload}.invalidsignature123`;

    const verified = verifySessionToken(forgedToken);
    expect(verified).toBeNull();
  });

  it("rejects token with tampered payload", () => {
    const validToken = createSessionToken(sampleUser);
    const [, signature] = validToken.split(".");
    const tamperedPayload = Buffer.from(
      JSON.stringify({ ...sampleUser, role: UserRole.ADMIN, iat: 100, exp: 9999999999 })
    ).toString("base64url");

    const forgedToken = `${tamperedPayload}.${signature}`;
    const verified = verifySessionToken(forgedToken);
    expect(verified).toBeNull();
  });

  it("rejects garbage token", () => {
    expect(verifySessionToken("not-a-token")).toBeNull();
    expect(verifySessionToken("")).toBeNull();
  });
});

describe("Permission Matrix by Role", () => {
  it("ADMIN has full permissions including system settings, users, and audit", () => {
    expect(hasPermission(UserRole.ADMIN, "content:read")).toBe(true);
    expect(hasPermission(UserRole.ADMIN, "content:write")).toBe(true);
    expect(hasPermission(UserRole.ADMIN, "content:publish")).toBe(true);
    expect(hasPermission(UserRole.ADMIN, "homepage:manage")).toBe(true);
    expect(hasPermission(UserRole.ADMIN, "taxonomy:manage")).toBe(true);
    expect(hasPermission(UserRole.ADMIN, "redirects:manage")).toBe(true);
    expect(hasPermission(UserRole.ADMIN, "audit:read")).toBe(true);
    expect(hasPermission(UserRole.ADMIN, "settings:manage")).toBe(true);
    expect(hasPermission(UserRole.ADMIN, "users:manage")).toBe(true);
  });

  it("EDITOR can manage content, homepage, taxonomy, redirects, but cannot access audit or settings", () => {
    expect(hasPermission(UserRole.EDITOR, "content:read")).toBe(true);
    expect(hasPermission(UserRole.EDITOR, "content:write")).toBe(true);
    expect(hasPermission(UserRole.EDITOR, "content:publish")).toBe(true);
    expect(hasPermission(UserRole.EDITOR, "homepage:manage")).toBe(true);
    expect(hasPermission(UserRole.EDITOR, "taxonomy:manage")).toBe(true);
    expect(hasPermission(UserRole.EDITOR, "redirects:manage")).toBe(true);
    expect(hasPermission(UserRole.EDITOR, "audit:read")).toBe(false);
    expect(hasPermission(UserRole.EDITOR, "settings:manage")).toBe(false);
    expect(hasPermission(UserRole.EDITOR, "users:manage")).toBe(false);
  });

  it("AUTHOR can read/write and upload media, but cannot publish or manage homepage", () => {
    expect(hasPermission(UserRole.AUTHOR, "content:read")).toBe(true);
    expect(hasPermission(UserRole.AUTHOR, "content:write")).toBe(true);
    expect(hasPermission(UserRole.AUTHOR, "media:upload")).toBe(true);
    expect(hasPermission(UserRole.AUTHOR, "content:publish")).toBe(false);
    expect(hasPermission(UserRole.AUTHOR, "homepage:manage")).toBe(false);
    expect(hasPermission(UserRole.AUTHOR, "redirects:manage")).toBe(false);
    expect(hasPermission(UserRole.AUTHOR, "audit:read")).toBe(false);
  });

  it("TRANSLATOR can only read/write content translations without media upload or publishing", () => {
    expect(hasPermission(UserRole.TRANSLATOR, "content:read")).toBe(true);
    expect(hasPermission(UserRole.TRANSLATOR, "content:write")).toBe(true);
    expect(hasPermission(UserRole.TRANSLATOR, "media:upload")).toBe(false);
    expect(hasPermission(UserRole.TRANSLATOR, "content:publish")).toBe(false);
    expect(hasPermission(UserRole.TRANSLATOR, "homepage:manage")).toBe(false);
    expect(hasPermission(UserRole.TRANSLATOR, "audit:read")).toBe(false);
  });
});

describe("Admin Section Access Control", () => {
  it("ADMIN can access all sections", () => {
    expect(canAccessAdminSection(UserRole.ADMIN, "dashboard")).toBe(true);
    expect(canAccessAdminSection(UserRole.ADMIN, "posts")).toBe(true);
    expect(canAccessAdminSection(UserRole.ADMIN, "homepage")).toBe(true);
    expect(canAccessAdminSection(UserRole.ADMIN, "audit")).toBe(true);
    expect(canAccessAdminSection(UserRole.ADMIN, "settings")).toBe(true);
  });

  it("EDITOR can access editorial sections, but not audit or settings", () => {
    expect(canAccessAdminSection(UserRole.EDITOR, "dashboard")).toBe(true);
    expect(canAccessAdminSection(UserRole.EDITOR, "posts")).toBe(true);
    expect(canAccessAdminSection(UserRole.EDITOR, "homepage")).toBe(true);
    expect(canAccessAdminSection(UserRole.EDITOR, "taxonomies")).toBe(true);
    expect(canAccessAdminSection(UserRole.EDITOR, "redirects")).toBe(true);
    expect(canAccessAdminSection(UserRole.EDITOR, "audit")).toBe(false);
    expect(canAccessAdminSection(UserRole.EDITOR, "settings")).toBe(false);
  });

  it("AUTHOR cannot access homepage, redirects, audit, or settings", () => {
    expect(canAccessAdminSection(UserRole.AUTHOR, "dashboard")).toBe(true);
    expect(canAccessAdminSection(UserRole.AUTHOR, "posts")).toBe(true);
    expect(canAccessAdminSection(UserRole.AUTHOR, "homepage")).toBe(false);
    expect(canAccessAdminSection(UserRole.AUTHOR, "redirects")).toBe(false);
    expect(canAccessAdminSection(UserRole.AUTHOR, "audit")).toBe(false);
  });
});
