import { prisma } from "@/lib/db/prisma";

export interface AuditLogEntry {
  id: string;
  actorId?: string;
  actorName?: string;
  action: string;
  entity: string;
  entityId?: string;
  details?: Record<string, unknown>;
  createdAt: Date;
}

// In-memory buffer for development and test environments when DB is offline
const fallbackAuditLogs: AuditLogEntry[] = [
  {
    id: "audit-demo-1",
    actorName: "Алексей Морозов (Главред)",
    action: "HOMEPAGE_PLACEMENT_UPDATED",
    entity: "HomepagePlacement",
    entityId: "hero",
    details: { slot: "hero", title: "Почему Dreamcast опередила своё время" },
    createdAt: new Date("2026-03-25T08:30:00Z"),
  },
  {
    id: "audit-demo-2",
    actorName: "Мария Ветрова (Редактор)",
    action: "POST_PUBLISHED",
    entity: "Post",
    entityId: "pochemu-dreamcast-operedila-svoyo-vremya",
    details: { locale: "RU", kind: "STORY" },
    createdAt: new Date("2026-03-25T08:15:00Z"),
  },
  {
    id: "audit-demo-3",
    actorName: "Алексей Морозов (Главред)",
    action: "SYSTEM_INITIALIZED",
    entity: "Database",
    entityId: "init",
    details: { version: "0.1.0", seedApplied: true },
    createdAt: new Date("2026-03-25T07:45:00Z"),
  },
];

export async function logAuditEvent(params: {
  actorId?: string;
  actorName?: string;
  action: string;
  entity: string;
  entityId?: string;
  details?: Record<string, unknown>;
}): Promise<void> {
  const entry: AuditLogEntry = {
    id: `audit-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    actorId: params.actorId,
    actorName: params.actorName,
    action: params.action,
    entity: params.entity,
    entityId: params.entityId,
    details: params.details,
    createdAt: new Date(),
  };

  try {
    await prisma.auditEvent.create({
      data: {
        actorId: params.actorId,
        action: params.action,
        entity: params.entity,
        entityId: params.entityId,
        details: (params.details ?? {}) as object,
      },
    });
  } catch {
    // Database offline; store in local in-memory audit buffer
    fallbackAuditLogs.unshift(entry);
    if (fallbackAuditLogs.length > 50) {
      fallbackAuditLogs.pop();
    }
  }
}

export async function getRecentAuditEvents(
  limit = 10
): Promise<AuditLogEntry[]> {
  try {
    const events = await prisma.auditEvent.findMany({
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        actor: {
          select: { name: true, email: true },
        },
      },
    });

    if (events.length > 0) {
      return events.map((ev) => ({
        id: ev.id,
        actorId: ev.actorId ?? undefined,
        actorName: ev.actor?.name ?? ev.actor?.email ?? "Система",
        action: ev.action,
        entity: ev.entity,
        entityId: ev.entityId ?? undefined,
        details: ev.details as Record<string, unknown> | undefined,
        createdAt: ev.createdAt,
      }));
    }
  } catch {
    // Database offline
  }

  return fallbackAuditLogs.slice(0, limit);
}
