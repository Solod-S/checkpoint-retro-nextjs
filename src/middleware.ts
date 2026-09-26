import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

// Static redirect rules (e.g. from migrations, historical URLs, or fast cache)
const STATIC_REDIRECTS: Record<string, { to: string; status: number }> = {
  "/feed": { to: `/${defaultLocale}/feed.xml`, status: 301 },
  "/rss": { to: `/${defaultLocale}/feed.xml`, status: 301 },
  "/rss.xml": { to: `/${defaultLocale}/feed.xml`, status: 301 },
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 1. Static redirect check
  if (STATIC_REDIRECTS[pathname]) {
    const target = STATIC_REDIRECTS[pathname];
    return NextResponse.redirect(
      new URL(`${target.to}${search}`, request.url),
      target.status
    );
  }

  // 2. Root path redirect -> /{defaultLocale}
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}`, request.url),
      308
    );
  }

  // 3. Known public sections without locale prefix
  // e.g. /news -> /ru/news, /articles -> /ru/articles
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];

  if (firstSegment && !isLocale(firstSegment)) {
    // If not admin, api, or special Next routes, redirect to defaultLocale
    if (
      firstSegment === "news" ||
      firstSegment === "articles" ||
      firstSegment === "about" ||
      firstSegment === "search" ||
      firstSegment === "feed.xml"
    ) {
      return NextResponse.redirect(
        new URL(`/${defaultLocale}${pathname}${search}`, request.url),
        308
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml
     * - public files with extensions
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf)$).*)",
  ],
};
