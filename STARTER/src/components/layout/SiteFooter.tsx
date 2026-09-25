import Image from "next/image";

const socials = [
  ["X / Twitter", "/social/x.svg"],
  ["Facebook", "/social/facebook.svg"],
  ["Threads", "/social/threads.svg"],
  ["Instagram", "/social/instagram.svg"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <small className="muted">CHECKPOINT RETRO © 2026</small>

        <div className="social-links">
          {socials.map(([label, src]) => (
            <a key={label} href="#" aria-label={label} title={label}>
              <Image src={src} alt="" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
