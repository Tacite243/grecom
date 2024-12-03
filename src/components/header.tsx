"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [activeLink, setActiveLink] = useState("#hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Observer pour détecter les sections visibles
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Écouteur pour ajouter ou supprimer la classe `scrolled`
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.classList.toggle("mobile-nav-active", !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("mobile-nav-active");
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <h1 className="sitename">GRECOM</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            {[
              { href: "#hero", label: "Acceuil" },
              { href: "#about", label: "A propos" },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Produits" },
              { href: "#recent-posts", label: "Actualité" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={activeLink === link.href ? "active" : ""}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Toggle button */}
        <i
          className={`mobile-nav-toggle bi ${
            isMobileMenuOpen ? "bi-x-lg" : "bi-list"
          }`}
          onClick={toggleMobileMenu}
        ></i>
      </div>
    </header>
  );
}