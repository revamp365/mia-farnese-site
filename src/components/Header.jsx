import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const navLinks = [
  { label: "Home", id: "home" },
  { label: "Bio", id: "about" },
  { label: "Music", id: "music" },
  { label: "Media", id: "gallery" },
  { label: "Booking", id: "contact" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="refined-header">
      <a
        href="#home"
        className="brand"
        aria-label="Mia Farnese home"
        onClick={() => setOpen(false)}
      >
        MF<span>.</span>
      </a>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">
        Book Mia <ArrowUpRight size={16} />
      </a>
      <button
        ref={toggle}
        className="mobile-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              href={`#${link.id}`}
              key={link.id}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
