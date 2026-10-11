import { useEffect, useState } from "react";

export default function SiteHeader({ navLinks }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <>
      <header className="site-header">
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        >
          <span className={`menu-toggle-line ${mobileOpen ? "open" : ""}`} aria-hidden="true" />
          <span>{mobileOpen ? "Tutup" : "Menu"}</span>
        </button>
      </header>

      <button
        type="button"
        className={`mobile-backdrop ${mobileOpen ? "open" : ""}`}
        aria-label="Tutup menu"
        onClick={() => setMobileOpen(false)}
      />

      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`} id="mobile-menu">
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              <span>{link.label}</span>
              <span aria-hidden="true">+</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
