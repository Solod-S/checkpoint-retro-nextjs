"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hasPermission } from "@/lib/auth/types";
import { requireSession } from "@/lib/auth/session";
import { savePost, softDeletePost } from "./store";
import {
  Locale,
  PostKind,
  PostStatus,
  type PostInput,
  type PostTranslationInput,
} from "./types";

export async function savePostAction(formData: FormData): Promise<void> {
  const user = await requireSession();

  if (!hasPermission(user.role, "content:write")) {
    redirect("/admin/forbidden");
  }

  const existingId = formData.get("postId") as string | null;
  const kind = (formData.get("kind") as PostKind) || PostKind.ARTICLE;
  const status = (formData.get("status") as PostStatus) || PostStatus.DRAFT;

  if (
    status === PostStatus.PUBLISHED &&
    !hasPermission(user.role, "content:publish")
  ) {
    redirect("/admin/forbidden");
  }

  const platform = formData.get("platform") as string | null;
  const category = formData.get("category") as string | null;
  const era = formData.get("era") as string | null;

  const translations: PostTranslationInput[] = [];

  // 1. RU Translation
  const titleRu = formData.get("title_ru") as string;
  const slugRu = formData.get("slug_ru") as string;
  if (titleRu && slugRu) {
    translations.push({
      locale: Locale.RU,
      title: titleRu,
      slug: slugRu,
      excerpt: (formData.get("excerpt_ru") as string) || undefined,
      content: (formData.get("content_ru") as string) || "",
      seoTitle: (formData.get("seoTitle_ru") as string) || undefined,
      seoDescription:
        (formData.get("seoDescription_ru") as string) || undefined,
    });
  }

  // 2. UK Translation
  const titleUk = formData.get("title_uk") as string;
  const slugUk = formData.get("slug_uk") as string;
  if (titleUk && slugUk) {
    translations.push({
      locale: Locale.UK,
      title: titleUk,
      slug: slugUk,
      excerpt: (formData.get("excerpt_uk") as string) || undefined,
      content: (formData.get("content_uk") as string) || "",
      seoTitle: (formData.get("seoTitle_uk") as string) || undefined,
      seoDescription:
        (formData.get("seoDescription_uk") as string) || undefined,
    });
  }

  // 3. EN Translation
  const titleEn = formData.get("title_en") as string;
  const slugEn = formData.get("slug_en") as string;
  if (titleEn && slugEn) {
    translations.push({
      locale: Locale.EN,
      title: titleEn,
      slug: slugEn,
      excerpt: (formData.get("excerpt_en") as string) || undefined,
      content: (formData.get("content_en") as string) || "",
      seoTitle: (formData.get("seoTitle_en") as string) || undefined,
      seoDescription:
        (formData.get("seoDescription_en") as string) || undefined,
    });
  }

  if (translations.length === 0) {
    throw new Error("Материал должен содержать как минимум один перевод.");
  }

  const postInput: PostInput = {
    kind,
    status,
    authorId: user.id,
    platformKeys: platform ? [platform] : [],
    categoryKeys: category ? [category] : [],
    eraKeys: era ? [era] : [],
    translations,
  };

  await savePost(postInput, user, existingId || undefined);

  revalidatePath("/admin/posts");
  revalidatePath("/ru");
  revalidatePath("/uk");
  revalidatePath("/en");

  redirect("/admin/posts");
}

export async function deletePostAction(formData: FormData): Promise<void> {
  const user = await requireSession();

  if (!hasPermission(user.role, "content:delete")) {
    redirect("/admin/forbidden");
  }

  const postId = formData.get("postId") as string;
  if (!postId) return;

  await softDeletePost(postId, user);

  revalidatePath("/admin/posts");
  revalidatePath("/ru");
  revalidatePath("/uk");
  revalidatePath("/en");

  redirect("/admin/posts");
}
