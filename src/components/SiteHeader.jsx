import { useEffect, useState } from "react";
import Icon from "./Icons";

export default function SiteHeader({ site, navLinks }) {
  const [open, setOpen] = useState(false);
  const menuLinks = [...navLinks, { href: "#contact", label: "Kontak" }];

  useEffect(() => {
    if (!open) return undefined;
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="nav" aria-label="Navigasi utama">
      <div className="nav-in">
        <a className="brand" href="#top">
          <span className="brand-dot" aria-hidden="true" />
          {site.brand}
          <span className="tld">{site.tld}</span>
        </a>
        {navLinks.map((link) => (
          <a key={link.href} className="nl" href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="ncta" href="#contact">
          Hubungi
        </a>
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open ? (
        <div className="mnav" id="mobile-menu">
          {menuLinks.map((link, i) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label} <span>{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
