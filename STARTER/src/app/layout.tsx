import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Checkpoint Retro",
    template: "%s | Checkpoint Retro",
  },
  description: "Истории игр, людей и технологий, которые изменили индустрию.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
