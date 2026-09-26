import { UserRole } from "@prisma/client";

export { UserRole };

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export const PRESET_USERS: Record<UserRole, SessionUser> = {
  ADMIN: {
    id: "usr-admin-1",
    email: "admin@checkpoint-retro.local",
    name: "Алексей Морозов (Главред)",
    role: UserRole.ADMIN,
  },
  EDITOR: {
    id: "usr-editor-1",
    email: "editor@checkpoint-retro.local",
    name: "Мария Ветрова (Редактор)",
    role: UserRole.EDITOR,
  },
  AUTHOR: {
    id: "usr-author-1",
    email: "author@checkpoint-retro.local",
    name: "Дмитрий Кузнецов (Автор)",
    role: UserRole.AUTHOR,
  },
  TRANSLATOR: {
    id: "usr-translator-1",
    email: "translator@checkpoint-retro.local",
    name: "Sarah Jenkins (Переводчик)",
    role: UserRole.TRANSLATOR,
  },
};

export type Permission =
  | "content:read"
  | "content:write"
  | "content:publish"
  | "content:delete"
  | "homepage:manage"
  | "taxonomy:manage"
  | "media:upload"
  | "media:manage"
  | "redirects:manage"
  | "users:manage"
  | "settings:manage"
  | "audit:read";

const PERMISSION_MATRIX: Record<UserRole, readonly Permission[]> = {
  ADMIN: [
    "content:read",
    "content:write",
    "content:publish",
    "content:delete",
    "homepage:manage",
    "taxonomy:manage",
    "media:upload",
    "media:manage",
    "redirects:manage",
    "users:manage",
    "settings:manage",
    "audit:read",
  ],
  EDITOR: [
    "content:read",
    "content:write",
    "content:publish",
    "homepage:manage",
    "taxonomy:manage",
    "media:upload",
    "media:manage",
    "redirects:manage",
  ],
  AUTHOR: ["content:read", "content:write", "media:upload"],
  TRANSLATOR: ["content:read", "content:write"],
};

export function hasPermission(
  role: UserRole,
  permission: Permission
): boolean {
  const allowed = PERMISSION_MATRIX[role];
  return allowed ? allowed.includes(permission) : false;
}

export function canAccessAdminSection(
  role: UserRole,
  section: string
): boolean {
  if (role === UserRole.ADMIN) return true;

  switch (section) {
    case "dashboard":
    case "posts":
      return true;
    case "homepage":
    case "taxonomies":
    case "media":
    case "redirects":
      return role === UserRole.EDITOR;
    case "audit":
    case "users":
    case "settings":
      return false;
    default:
      return true;
  }
}
