"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

interface ArticleShareProps {
  className?: string;
  labels?: {
    save?: string;
    saved?: string;
    share?: string;
    copied?: string;
    discuss?: string;
  };
}

export function ArticleShare({ className = "", labels }: ArticleShareProps) {
  const pathname = usePathname();
  const isEn = pathname?.startsWith("/en");
  const isUk = pathname?.startsWith("/uk");

  const saveText = labels?.save ?? (isEn ? "Save story" : isUk ? "Зберегти статтю" : "Сохранить статью");
  const savedText = labels?.saved ?? (isEn ? "Bookmarked" : isUk ? "У закладках" : "В закладках");
  const shareText = labels?.share ?? (isEn ? "Share" : isUk ? "Поділитися" : "Поделиться");
  const copiedText = labels?.copied ?? (isEn ? "Link copied!" : isUk ? "Посилання скопійовано!" : "Ссылка скопирована!");
  const discussText = labels?.discuss ?? (isEn ? "Discuss in comments" : isUk ? "Обговорити в коментарях" : "Обсудить в комментариях");

  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`article-share-actions ${className}`.trim()}>
      <button
        type="button"
        onClick={() => setSaved(!saved)}
        className={`article-share-btn ${saved ? "article-share-btn--active" : ""}`.trim()}
      >
        <span aria-hidden="true">{saved ? "★" : "☆"}</span>
        <span>{saved ? savedText : saveText}</span>
      </button>

      <button
        type="button"
        onClick={handleCopy}
        className="article-share-btn"
      >
        <span aria-hidden="true">🔗</span>
        <span>{copied ? copiedText : shareText}</span>
      </button>

      <a href="#comments" className="article-share-btn">
        <span aria-hidden="true">💬</span>
        <span>{discussText}</span>
      </a>
    </div>
  );
}
