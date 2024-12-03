"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [activeLink, setActiveLink] = useState("#hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Observer pour détecter la section active
  useEffect(() => {
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

  // Gestion du défilement pour l'effet glass
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle du menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      const navMenu = document.getElementById("navmenu");
      const ul = document.getElementsByTagName("ul")[0];
      
      if (navMenu && ul) {
        navMenu.style.height = newState ? "100vh" : "";
        ul.style.backgroundColor = "green";
      }
      return newState;
    });
    document.body.classList.toggle("mobile-nav-active", !isMobileMenuOpen);
  };

  // Fermeture du menu mobile
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("mobile-nav-active");
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${isScrolled ? "scrolled" : ""
        }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link href="/" className="logo d-flex align-items-center">
          <h1 className="sitename">GRECOM</h1>
        </Link>

        {/* Menu de navigation */}
        <nav
          id="navmenu"
          className={`navmenu ${isMobileMenuOpen ? "open" : ""}`}
        >
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

        {/* Bouton de bascule visible uniquement sur mobile */}
        <i
          className={`mobile-nav-toggle bi ${isMobileMenuOpen ? "bi-x-lg" : "bi-list"
            }`}
          onClick={toggleMobileMenu}
        ></i>
      </div>
    </header>
  );
}
