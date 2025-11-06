import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "../../data/navData";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import DesktopNav from "./DesktopNav";

// ----------------------------------------------------------------------
// NavigationBar Component
// ----------------------------------------------------------------------

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0].id);

  const intersectingSections = useRef<Map<string, number>>(new Map());
  const HEADER_HEIGHT_PX: number = 80;

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer Logic
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingSections.current.set(entry.target.id, entry.boundingClientRect.top);
        } else {
          intersectingSections.current.delete(entry.target.id);
        }
      });

      let closestSectionId: string | null = null;
      let minTop: number = Infinity;

      intersectingSections.current.forEach((top: number, id: string) => {
        if (top < minTop) {
          minTop = top;
          closestSectionId = id;
        }
      });

      if (closestSectionId) {
        setActiveSection(closestSectionId);
      } else if (window.scrollY < 200) {
        setActiveSection(NAV_ITEMS[0].id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: `-${HEADER_HEIGHT_PX}px 0px -80% 0px`,
      threshold: 0,
    });

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const headerClasses: string = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    flex items-center justify-between
    py-4 md:py-4 px-6 lg:px-12 h-[${HEADER_HEIGHT_PX}px]
    ${isScrolled ? "bg-indigo-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"}
  `;

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <div className="min-h-auto bg-gray-900 font-sans text-white pt-[80px]">
      <header className={headerClasses} role="banner">
        {/* Logo */}
        <Logo />

        {/* ✅ Call Icon (Clickable) */}
        <a
          href="tel:+919731520326" // <-- replace with your actual phone number
          className="ml-4 text-white hover:text-green-400 transition-colors duration-300 flex items-center"
          aria-label="Call us"
        >
        </a>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex"
          role="navigation"
          aria-label="Main Navigation"
        >
          <DesktopNav
            isMobile={false}
            onLinkClick={closeMenu}
            activeSection={activeSection}
          />
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            absolute md:hidden top-full left-0 w-full
            bg-indigo-800/95 backdrop-blur-md shadow-2xl
            p-4 space-y-4 transition-all duration-300 ease-out
            z-40
            ${isMenuOpen ? 'max-h-screen opacity-100 border-t border-indigo-700/50' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <DesktopNav
            isMobile={true}
            onLinkClick={closeMenu}
            activeSection={activeSection}
          />
        </div>
      </header>
    </div>
  );
};

export default NavigationBar;
