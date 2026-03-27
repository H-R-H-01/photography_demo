"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "ABOUT", href: isHome ? "#about" : "/#about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const navBackground = (scrolled || !isHome)
    ? "bg-[#FAF9F6]/95 backdrop-blur-md py-4 shadow-sm"
    : "bg-transparent py-6";

  const textColor = (!scrolled && isHome) ? "text-[#FAF9F6]" : "text-[#1A1A1A]";

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className={`text-2xl font-serif tracking-widest ${textColor} transition-colors`}>
            PhoNyx
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.15em] hover:opacity-60 transition-colors ${textColor}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${textColor} transition-colors`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#FAF9F6] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 p-2 text-[#1A1A1A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif tracking-widest text-[#1A1A1A] hover:opacity-60 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
