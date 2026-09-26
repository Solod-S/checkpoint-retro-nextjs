import { describe, expect, it } from "vitest";
import nextConfig from "@/../next.config";

describe("Security & Hardening Configuration", () => {
  it("disables poweredByHeader in Next.js config", () => {
    expect(nextConfig.poweredByHeader).toBe(false);
  });

  it("enables reactStrictMode for high-quality React runtime checks", () => {
    expect(nextConfig.reactStrictMode).toBe(true);
  });

  it("defines strict HTTP security headers including CSP and HSTS", async () => {
    expect(nextConfig.headers).toBeDefined();
    if (!nextConfig.headers) return;

    const headersList = await nextConfig.headers();
    expect(headersList.length).toBeGreaterThan(0);

    const rootRouteHeaders = headersList.find((h) => h.source === "/(.*)");
    expect(rootRouteHeaders).toBeDefined();

    const headersMap = new Map(
      rootRouteHeaders?.headers.map((h) => [h.key, h.value])
    );

    // HSTS
    expect(headersMap.get("Strict-Transport-Security")).toContain(
      "max-age=63072000"
    );

    // Clickjacking protection
    expect(headersMap.get("X-Frame-Options")).toBe("SAMEORIGIN");

    // MIME sniffing prevention
    expect(headersMap.get("X-Content-Type-Options")).toBe("nosniff");

    // Referrer policy
    expect(headersMap.get("Referrer-Policy")).toBe(
      "strict-origin-when-cross-origin"
    );

    // Permissions policy restricts sensitive hardware APIs
    expect(headersMap.get("Permissions-Policy")).toContain("camera=()");
    expect(headersMap.get("Permissions-Policy")).toContain("microphone=()");

    // Content Security Policy
    const csp = headersMap.get("Content-Security-Policy");
    expect(csp).toBeDefined();
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("frame-ancestors 'self'");
  });
});
