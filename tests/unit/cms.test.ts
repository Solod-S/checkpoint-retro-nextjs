import { describe, expect, it } from "vitest";
import { PRESET_USERS, UserRole } from "@/lib/auth/types";
import {
  getAdminPost,
  getAdminPostsList,
  savePost,
  softDeletePost,
} from "@/lib/cms/store";
import {
  Locale,
  PostKind,
  PostStatus,
  type PostInput,
} from "@/lib/cms/types";

describe("CMS Post Management", () => {
  const adminActor = PRESET_USERS[UserRole.ADMIN];

  it("creates a new post with multilingual translations", async () => {
    const input: PostInput = {
      kind: PostKind.ARTICLE,
      status: PostStatus.PUBLISHED,
      platformKeys: ["nintendo"],
      categoryKeys: ["dev-history"],
      translations: [
        {
          locale: Locale.RU,
          slug: "istoriya-sozdaniya-super-metroid",
          title: "История создания Super Metroid",
          excerpt: "Как создавался шедевр 16-битной эпохи.",
          content: { type: "doc", content: [] },
        },
        {
          locale: Locale.UK,
          slug: "istoriya-stvorennya-super-metroid",
          title: "Історія створення Super Metroid",
          excerpt: "Як створювався шедевр 16-бітної епохи.",
          content: { type: "doc", content: [] },
        },
        {
          locale: Locale.EN,
          slug: "the-making-of-super-metroid",
          title: "The Making of Super Metroid",
          excerpt: "How a 16-bit masterpiece was born.",
          content: { type: "doc", content: [] },
        },
      ],
    };

    const newId = await savePost(input, adminActor);
    expect(newId).toBeDefined();

    const stored = await getAdminPost(newId);
    expect(stored).not.toBeNull();
    expect(stored?.translations.length).toBe(3);
    expect(stored?.translations.find((t) => t.locale === Locale.RU)?.title).toBe(
      "История создания Super Metroid"
    );
  });

  it("detects slug changes on published post and records audit", async () => {
    const initialInput: PostInput = {
      kind: PostKind.STORY,
      status: PostStatus.PUBLISHED,
      translations: [
        {
          locale: Locale.RU,
          slug: "old-retro-slug",
          title: "Старый заголовок",
          content: "",
        },
      ],
    };

    const postId = await savePost(initialInput, adminActor);

    // Update with new slug
    const updatedInput: PostInput = {
      ...initialInput,
      translations: [
        {
          locale: Locale.RU,
          slug: "new-retro-slug",
          title: "Обновленный заголовок",
          content: "",
        },
      ],
    };

    await savePost(updatedInput, adminActor, postId);

    const updated = await getAdminPost(postId);
    expect(updated?.translations[0]?.slug).toBe("new-retro-slug");
  });

  it("soft-deletes post instead of physical removal", async () => {
    const input: PostInput = {
      kind: PostKind.NEWS,
      status: PostStatus.DRAFT,
      translations: [
        {
          locale: Locale.RU,
          slug: "draft-to-delete",
          title: "Удаляемый черновик",
          content: "",
        },
      ],
    };

    const postId = await savePost(input, adminActor);
    await softDeletePost(postId, adminActor);

    // Active listing should exclude soft-deleted posts
    const activePosts = await getAdminPostsList();
    const foundInActive = activePosts.find((p) => p.id === postId);
    expect(foundInActive).toBeUndefined();

    // The post still exists in store with deletedAt set
    const stored = await getAdminPost(postId);
    expect(stored?.deletedAt).not.toBeNull();
  });
});
