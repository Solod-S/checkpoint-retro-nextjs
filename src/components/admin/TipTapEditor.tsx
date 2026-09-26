"use client";

import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface TipTapEditorProps {
  initialContent?: Record<string, unknown> | string;
  name?: string;
  onChange?: (content: string) => void;
}

export function TipTapEditor({
  initialContent = "",
  name = "content",
  onChange,
}: TipTapEditorProps) {
  const [serializedValue, setSerializedValue] = useState<string>(() =>
    typeof initialContent === "string"
      ? initialContent
      : JSON.stringify(initialContent)
  );

  const editor = useEditor({
    extensions: [StarterKit],
    content:
      typeof initialContent === "string"
        ? initialContent || "<p>Введите текст материала...</p>"
        : initialContent,
    immediatelyRender: false,
    onUpdate: ({ editor: ed }) => {
      const json = JSON.stringify(ed.getJSON());
      setSerializedValue(json);
      onChange?.(json);
    },
  });

  if (!editor) {
    return (
      <div className="tiptap-placeholder muted" style={{ padding: "1rem" }}>
        Загрузка редактора TipTap...
      </div>
    );
  }

  return (
    <div className="tiptap-editor-wrap">
      {/* Editorial Toolbar */}
      <div className="tiptap-toolbar" role="toolbar" aria-label="Форматирование текста">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`tiptap-btn ${editor.isActive("bold") ? "tiptap-btn--active" : ""}`}
          title="Полужирный (Ctrl+B)"
        >
          <strong>B</strong>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`tiptap-btn ${editor.isActive("italic") ? "tiptap-btn--active" : ""}`}
          title="Курсив (Ctrl+I)"
        >
          <em>I</em>
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`tiptap-btn ${
            editor.isActive("heading", { level: 2 }) ? "tiptap-btn--active" : ""
          }`}
          title="Заголовок H2"
        >
          H2
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`tiptap-btn ${
            editor.isActive("heading", { level: 3 }) ? "tiptap-btn--active" : ""
          }`}
          title="Подзаголовок H3"
        >
          H3
        </button>

        <span className="tiptap-toolbar-divider" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`tiptap-btn ${
            editor.isActive("bulletList") ? "tiptap-btn--active" : ""
          }`}
          title="Маркированный список"
        >
          • Список
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`tiptap-btn ${
            editor.isActive("orderedList") ? "tiptap-btn--active" : ""
          }`}
          title="Нумерованный список"
        >
          1. Список
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`tiptap-btn ${
            editor.isActive("blockquote") ? "tiptap-btn--active" : ""
          }`}
          title="Цитата"
        >
          ❝ Цитата
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`tiptap-btn ${
            editor.isActive("codeBlock") ? "tiptap-btn--active" : ""
          }`}
          title="Блок кода"
        >
          {"< / >"}
        </button>

        <span className="tiptap-toolbar-divider" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="tiptap-btn"
          title="Отменить"
        >
          ↩
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="tiptap-btn"
          title="Повторить"
        >
          ↪
        </button>
      </div>

      {/* Editable Area */}
      <div className="tiptap-content-box">
        <EditorContent editor={editor} />
      </div>

      {/* Hidden input to pass serialized content to Server Action */}
      <input type="hidden" name={name} value={serializedValue} />
    </div>
  );
}
