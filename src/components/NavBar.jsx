import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <i className="ti ti-device-laptop text-white text-sm" aria-hidden="true" />
            </div>
            <span className="text-white text-sm font-medium tracking-wide">
              yamo<span className="text-blue-400">vector</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-blue-400 hover:text-white text-sm transition-colors no-underline"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className="bg-black text-white/60 hover:text-white border border-white/15 hover:border-white/35 text-xs px-3.5 py-1.5 rounded-lg transition-all no-underline"
            >
              Contact
            </Link>
            <Link
              to="/products"
              className="bg-blue-700 hover:bg-blue-600 text-white text-xs font-medium px-4 py-1.5 rounded-lg transition-colors no-underline"
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
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
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="text-white/60 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition-colors no-underline"
              >
                {label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-center border border-white/15 text-white/70 text-sm py-2 rounded-lg hover:border-white/30 transition-all no-underline"
              >
                Contact
              </Link>
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="text-center bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium py-2 rounded-lg transition-colors no-underline"
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