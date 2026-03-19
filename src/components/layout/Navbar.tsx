import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { 
    label: "About", 
    href: "/about",
    subLinks: [
      { label: "About Us", href: "/about" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Board of Trustees", href: "/trustees" },
      { label: "Milestones", href: "/milestones" },
    ]
  },
  { 
    label: "Projects", 
    href: "/projects/academy",
    subLinks: [
      { label: "KECT Academy", href: "/projects/academy" },
      { label: "ICSE/ISC Coaching", href: "/projects/coaching" },
      { label: "Skill Development", href: "/projects/skill-development" },
      { label: "Healthy Bites", href: "/projects/healthy-bites" },
      { label: "Other Projects", href: "/projects/other" },
    ]
  },
  { 
    label: "News", 
    href: "/news/events",
    subLinks: [
      { label: "Events", href: "/news/events" },
      { label: "Pandemic Relief", href: "/news/pandemic" },
      { label: "Publications", href: "/news/publications" },
      { label: "Annual Reports", href: "/news/annual-reports" },
    ]
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <div className="sticky top-4 mt-4 mb-8 md:top-6 md:mt-6 md:mb-10 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg rounded-[2.5rem] relative">
        <div className="flex justify-between items-center px-4 md:px-6 h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="/kect-logo.png" alt="KECT Logo" className="h-[60px] md:h-[60px] w-auto object-contain transition-transform hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center" ref={dropdownRef}>
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {link.subLinks ? (
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className={cn(
                      "flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                      (location.pathname.startsWith(`/${link.label.toLowerCase()}`) || 
                       link.subLinks.some(sub => location.pathname === sub.href))
                        ? "text-brand bg-secondary/30"
                        : "text-gray-700 hover:text-brand hover:bg-gray-50",
                      activeDropdown === link.label && "text-brand bg-secondary/30"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform duration-200", activeDropdown === link.label && "rotate-180")} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
                      location.pathname === link.href
                        ? "text-brand bg-secondary/30"
                        : "text-gray-700 hover:text-brand hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.subLinks && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-4 w-60 bg-white rounded-3xl shadow-xl border border-gray-100 p-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.label}
                        to={subLink.href}
                        className={cn(
                          "block px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary/20 hover:text-brand rounded-full mb-1 last:mb-0",
                          location.pathname === subLink.href ? "text-brand bg-secondary/10" : "text-gray-600"
                        )}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Donate Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/get-involved"
              className="text-sm font-semibold px-4 py-2 rounded-full text-gray-700 hover:text-brand hover:bg-gray-50 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-between px-1 py-1 pl-5 rounded-full text-sm font-semibold transition-all group border bg-brand text-white border-brand hover:bg-brand/90 hover:shadow-md"
            >
              <span className="mr-3">Donate</span>
              <span className="p-1.5 rounded-full transition-transform group-hover:rotate-45 bg-white text-brand">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-full text-gray-600 hover:text-brand hover:bg-secondary/30 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            className="lg:hidden absolute left-4 right-4 sm:left-6 sm:right-6 mt-4 bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="pt-4 pb-6 space-y-1 px-4 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="py-1">
                  {link.subLinks ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex items-center justify-between w-full py-3 px-5 text-base font-bold text-gray-900 hover:bg-secondary/20 rounded-2xl transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", activeDropdown === link.label && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 pr-2 py-2 space-y-1 overflow-hidden"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.label}
                                to={subLink.href}
                                className={cn(
                                  "block py-2.5 px-5 text-sm font-medium rounded-full transition-colors",
                                  location.pathname === subLink.href
                                    ? "text-brand bg-secondary/20"
                                    : "text-gray-600 hover:text-brand hover:bg-gray-50"
                                )}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "block py-3 px-5 text-base font-bold rounded-2xl transition-colors",
                        location.pathname === link.href
                          ? "text-brand bg-secondary/20"
                          : "text-gray-900 hover:bg-secondary/20"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 px-4 pb-4 space-y-4">
                <Link
                  to="/get-involved"
                  className="block w-full text-center py-3 text-base font-bold text-brand bg-secondary/30 rounded-full hover:bg-secondary/50 transition-colors"
                >
                  Get Involved
                </Link>
                <Link
                  to="/donate"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold transition-all group bg-brand text-white hover:bg-brand/90 shadow-md"
                >
                  <span className="mr-2">Donate Now</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
