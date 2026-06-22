import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Laptop2 } from 'lucide-react';
import './NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="navbar__brand flex items-center gap-2.5 no-underline">
            <div className="navbar__logo flex items-center justify-center">
              <Laptop2 size={16} />
            </div>
            <span className="navbar__brand-text text-sm font-medium tracking-wide">
              yamo<span className="navbar__brand-accent">vector</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="navbar__link text-sm transition-colors no-underline"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className="navbar__button navbar__button--secondary text-xs px-3.5 py-1.5 rounded-lg transition-all no-underline"
            >
              Contact
            </Link>
            <Link
              to="/products"
              className="navbar__button navbar__button--primary text-xs font-medium px-4 py-1.5 rounded-lg transition-colors no-underline"
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="navbar__toggle md:hidden p-2 rounded-lg text-black/70 hover:text-black hover:bg-black/5 transition-colors"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile-menu md:hidden">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="navbar__mobile-link text-sm py-2 px-3 rounded-lg transition-colors no-underline"
              >
                {label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t transition-colors">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="navbar__button navbar__button--secondary text-center text-sm py-2 rounded-lg no-underline"
              >
                Contact
              </Link>
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="navbar__button navbar__button--primary text-center text-sm font-medium py-2 rounded-lg no-underline"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}