"use client";

import { useState } from "react";
import Link from "next/link";
import { savePostAction } from "@/lib/cms/actions";
import { Locale, PostKind, PostStatus } from "@/lib/cms/types";
import { TipTapEditor } from "./TipTapEditor";

interface StoredTranslation {
  locale: Locale;
  slug: string;
  title: string;
  excerpt: string;
  content: Record<string, unknown> | string;
  seoTitle?: string;
  seoDescription?: string;
}

interface PostEditorFormProps {
  initialPost?: {
    id: string;
    kind: PostKind;
    status: PostStatus;
    platforms: string[];
    categories: string[];
    eras: string[];
    featuredImageUrl?: string;
    translations: StoredTranslation[];
  };
}

export function PostEditorForm({ initialPost }: PostEditorFormProps) {
  const [activeTab, setActiveTab] = useState<"ru" | "uk" | "en">("ru");

  const ruTr = initialPost?.translations.find((t) => t.locale === Locale.RU);
  const ukTr = initialPost?.translations.find((t) => t.locale === Locale.UK);
  const enTr = initialPost?.translations.find((t) => t.locale === Locale.EN);

  return (
    <form action={savePostAction} className="admin-post-form">
      {initialPost?.id ? (
        <input type="hidden" name="postId" value={initialPost.id} />
      ) : null}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "2rem" }}>
        {/* Main Column: Multilingual Content Tabs */}
        <div>
          {/* Language Tabs */}
          <div className="admin-form-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "ru"}
              onClick={() => setActiveTab("ru")}
              className={`admin-form-tab ${
                activeTab === "ru" ? "admin-form-tab--active" : ""
              }`}
            >
              Русский (RU) {ruTr ? "✓" : ""}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "uk"}
              onClick={() => setActiveTab("uk")}
              className={`admin-form-tab ${
                activeTab === "uk" ? "admin-form-tab--active" : ""
              }`}
            >
              Українська (UK) {ukTr ? "✓" : ""}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "en"}
              onClick={() => setActiveTab("en")}
              className={`admin-form-tab ${
                activeTab === "en" ? "admin-form-tab--active" : ""
              }`}
            >
              English (EN) {enTr ? "✓" : ""}
            </button>
          </div>

          {/* RU Content Panel */}
          <div style={{ display: activeTab === "ru" ? "block" : "none" }}>
            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="title_ru" className="admin-form-label">
                Заголовок (RU) *
              </label>
              <input
                id="title_ru"
                name="title_ru"
                type="text"
                defaultValue={ruTr?.title ?? ""}
                placeholder="Заголовок публикации"
                className="admin-form-input"
                style={{ fontSize: "1.1rem", fontWeight: "bold" }}
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="slug_ru" className="admin-form-label">
                Slug URL (RU) *
              </label>
              <input
                id="slug_ru"
                name="slug_ru"
                type="text"
                defaultValue={ruTr?.slug ?? ""}
                placeholder="pochemu-dreamcast-operedila-svoyo-vremya"
                className="admin-form-input"
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="excerpt_ru" className="admin-form-label">
                Краткое описание / Dek (RU)
              </label>
              <textarea
                id="excerpt_ru"
                name="excerpt_ru"
                defaultValue={ruTr?.excerpt ?? ""}
                rows={3}
                placeholder="Вводный лид для карточек и шапки статьи"
                className="admin-form-input"
                style={{ resize: "vertical" }}
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="admin-form-label">Основной текст TipTap (RU)</label>
              <TipTapEditor
                name="content_ru"
                initialContent={ruTr?.content ?? ""}
              />
            </div>

            {/* SEO Block */}
            <div
              style={{
                border: "1px solid var(--border-color)",
                padding: "1rem",
                background: "rgba(255, 255, 255, 0.02)",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "0.75rem", color: "var(--accent-action)" }}>
                Поисковая оптимизация (SEO RU)
              </h3>
              <div className="admin-form-group" style={{ marginBottom: "0.75rem" }}>
                <label htmlFor="seoTitle_ru" className="admin-form-label">SEO Title</label>
                <input
                  id="seoTitle_ru"
                  name="seoTitle_ru"
                  type="text"
                  defaultValue={ruTr?.seoTitle ?? ""}
                  className="admin-form-input"
                />
              </div>
              <div className="admin-form-group">
                <label htmlFor="seoDescription_ru" className="admin-form-label">SEO Description</label>
                <textarea
                  id="seoDescription_ru"
                  name="seoDescription_ru"
                  defaultValue={ruTr?.seoDescription ?? ""}
                  rows={2}
                  className="admin-form-input"
                />
              </div>
            </div>
          </div>

          {/* UK Content Panel */}
          <div style={{ display: activeTab === "uk" ? "block" : "none" }}>
            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="title_uk" className="admin-form-label">
                Заголовок (UK)
              </label>
              <input
                id="title_uk"
                name="title_uk"
                type="text"
                defaultValue={ukTr?.title ?? ""}
                placeholder="Заголовок публікації"
                className="admin-form-input"
                style={{ fontSize: "1.1rem", fontWeight: "bold" }}
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="slug_uk" className="admin-form-label">
                Slug URL (UK)
              </label>
              <input
                id="slug_uk"
                name="slug_uk"
                type="text"
                defaultValue={ukTr?.slug ?? ""}
                placeholder="chomu-dreamcast-vperedyla-sviy-chas"
                className="admin-form-input"
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="excerpt_uk" className="admin-form-label">
                Короткий опис / Dek (UK)
              </label>
              <textarea
                id="excerpt_uk"
                name="excerpt_uk"
                defaultValue={ukTr?.excerpt ?? ""}
                rows={3}
                placeholder="Ввідний лід для карток і шапки"
                className="admin-form-input"
                style={{ resize: "vertical" }}
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="admin-form-label">Основний текст TipTap (UK)</label>
              <TipTapEditor
                name="content_uk"
                initialContent={ukTr?.content ?? ""}
              />
            </div>

            {/* SEO Block UK */}
            <div
              style={{
                border: "1px solid var(--border-color)",
                padding: "1rem",
                background: "rgba(255, 255, 255, 0.02)",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "0.75rem", color: "var(--accent-action)" }}>
                Пошукова оптимізація (SEO UK)
              </h3>
              <div className="admin-form-group" style={{ marginBottom: "0.75rem" }}>
                <label htmlFor="seoTitle_uk" className="admin-form-label">SEO Title</label>
                <input
                  id="seoTitle_uk"
                  name="seoTitle_uk"
                  type="text"
                  defaultValue={ukTr?.seoTitle ?? ""}
                  className="admin-form-input"
                />
              </div>
              <div className="admin-form-group">
                <label htmlFor="seoDescription_uk" className="admin-form-label">SEO Description</label>
                <textarea
                  id="seoDescription_uk"
                  name="seoDescription_uk"
                  defaultValue={ukTr?.seoDescription ?? ""}
                  rows={2}
                  className="admin-form-input"
                />
              </div>
            </div>
          </div>

          {/* EN Content Panel */}
          <div style={{ display: activeTab === "en" ? "block" : "none" }}>
            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="title_en" className="admin-form-label">
                Title (EN)
              </label>
              <input
                id="title_en"
                name="title_en"
                type="text"
                defaultValue={enTr?.title ?? ""}
                placeholder="Article title in English"
                className="admin-form-input"
                style={{ fontSize: "1.1rem", fontWeight: "bold" }}
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="slug_en" className="admin-form-label">
                Slug URL (EN)
              </label>
              <input
                id="slug_en"
                name="slug_en"
                type="text"
                defaultValue={enTr?.slug ?? ""}
                placeholder="why-dreamcast-was-ahead-of-its-time"
                className="admin-form-input"
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="excerpt_en" className="admin-form-label">
                Excerpt / Dek (EN)
              </label>
              <textarea
                id="excerpt_en"
                name="excerpt_en"
                defaultValue={enTr?.excerpt ?? ""}
                rows={3}
                placeholder="Summary dek for cards and header"
                className="admin-form-input"
                style={{ resize: "vertical" }}
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="admin-form-label">Article Body TipTap (EN)</label>
              <TipTapEditor
                name="content_en"
                initialContent={enTr?.content ?? ""}
              />
            </div>

            {/* SEO Block EN */}
            <div
              style={{
                border: "1px solid var(--border-color)",
                padding: "1rem",
                background: "rgba(255, 255, 255, 0.02)",
                marginBottom: "1rem",
              }}
            >
              <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", marginBottom: "0.75rem", color: "var(--accent-action)" }}>
                Search Engine Optimization (SEO EN)
              </h3>
              <div className="admin-form-group" style={{ marginBottom: "0.75rem" }}>
                <label htmlFor="seoTitle_en" className="admin-form-label">SEO Title</label>
                <input
                  id="seoTitle_en"
                  name="seoTitle_en"
                  type="text"
                  defaultValue={enTr?.seoTitle ?? ""}
                  className="admin-form-input"
                />
              </div>
              <div className="admin-form-group">
                <label htmlFor="seoDescription_en" className="admin-form-label">SEO Description</label>
                <textarea
                  id="seoDescription_en"
                  name="seoDescription_en"
                  defaultValue={enTr?.seoDescription ?? ""}
                  rows={2}
                  className="admin-form-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Editorial Settings */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Publishing Controls Box */}
          <div
            style={{
              background: "var(--background-surface)",
              border: "1px solid var(--border-color)",
              padding: "1.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "0.9rem",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                marginBottom: "1rem",
                color: "var(--text-primary)",
              }}
            >
              Публикация
            </h3>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="status" className="admin-form-label">
                Статус
              </label>
              <select
                id="status"
                name="status"
                defaultValue={initialPost?.status ?? PostStatus.DRAFT}
                className="admin-form-select"
              >
                <option value={PostStatus.DRAFT}>Черновик (DRAFT)</option>
                <option value={PostStatus.PUBLISHED}>
                  Опубликовано (PUBLISHED)
                </option>
                <option value={PostStatus.SCHEDULED}>
                  Запланировано (SCHEDULED)
                </option>
                <option value={PostStatus.ARCHIVED}>
                  В архиве (ARCHIVED)
                </option>
              </select>
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="kind" className="admin-form-label">
                Тип материала
              </label>
              <select
                id="kind"
                name="kind"
                defaultValue={initialPost?.kind ?? PostKind.ARTICLE}
                className="admin-form-select"
              >
                <option value={PostKind.ARTICLE}>Статья (ARTICLE)</option>
                <option value={PostKind.NEWS}>Новость (NEWS)</option>
                <option value={PostKind.STORY}>Заглавная история (STORY)</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <button
                type="submit"
                className="admin-btn admin-btn--primary"
                style={{ width: "100%" }}
              >
                {initialPost ? "Сохранить изменения" : "Создать публикацию"}
              </button>

              <Link
                href="/admin/posts"
                className="admin-btn admin-btn--secondary"
                style={{ width: "100%", textAlign: "center" }}
              >
                Отмена
              </Link>
            </div>

            {initialPost?.translations[0] ? (
              <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px dashed var(--border-color)" }}>
                <Link
                  href={`/ru/${
                    initialPost.kind === PostKind.NEWS ? "news" : "articles"
                  }/${initialPost.translations[0].slug}`}
                  target="_blank"
                  className="admin-header__link"
                  style={{ fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}
                >
                  <span>👁 Просмотреть на сайте</span>
                  <span>↗</span>
                </Link>
              </div>
            ) : null}
          </div>

          {/* Taxonomies Box */}
          <div
            style={{
              background: "var(--background-surface)",
              border: "1px solid var(--border-color)",
              padding: "1.25rem",
            }}
          >
            <h3
              style={{
                fontSize: "0.9rem",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                marginBottom: "1rem",
                color: "var(--text-primary)",
              }}
            >
              Таксономии
            </h3>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="platform" className="admin-form-label">
                Платформа
              </label>
              <select
                id="platform"
                name="platform"
                defaultValue={initialPost?.platforms[0] ?? "sega"}
                className="admin-form-select"
              >
                <option value="sega">SEGA</option>
                <option value="dreamcast">Dreamcast</option>
                <option value="nintendo">Nintendo</option>
                <option value="playstation">PlayStation</option>
                <option value="pc">PC</option>
                <option value="arcade">Аркады</option>
              </select>
            </div>

            <div className="admin-form-group" style={{ marginBottom: "1rem" }}>
              <label htmlFor="category" className="admin-form-label">
                Рубрика
              </label>
              <select
                id="category"
                name="category"
                defaultValue={initialPost?.categories[0] ?? "dev-history"}
                className="admin-form-select"
              >
                <option value="dev-history">Истории создания</option>
                <option value="consoles">Консоли</option>
                <option value="people">Люди</option>
                <option value="collections">Подборки</option>
                <option value="culture">Культура</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label htmlFor="era" className="admin-form-label">
                Эпоха
              </label>
              <select
                id="era"
                name="era"
                defaultValue={initialPost?.eras[0] ?? "1990s"}
                className="admin-form-select"
              >
                <option value="1970s">1970-е: Рождение индустрии</option>
                <option value="1980s">1980-е: Домашние компьютеры</option>
                <option value="1990s">1990-е: 16 БИТ и 3D-революция</option>
                <option value="2000s">2000-е: Онлайн и новые миры</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
