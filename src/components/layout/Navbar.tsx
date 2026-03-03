import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
};

const navLinks: NavLink[] = [
  { label: "หน้าหลัก", href: "/" },
  {
    label: "Solutions",
    children: [
      { label: "Enterprise", href: "/enterprise", desc: "ทีม + กระบวนการ + After-sales" },
      { label: "UAV AI Platform", href: "/platform", desc: "C2 + AI + GIS สำหรับองค์กร" },
      { label: "Altura VTOL", href: "/altura", desc: "โครงสร้างพื้นฐานอากาศ 24/7" },
      { label: "Use Cases", href: "/solutions", desc: "Solutions ตามหน่วยงาน" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "ROI Calculator", href: "/roi-calculator" },
  { label: "Drone Rental", href: "/drone-rental" },
  { label: "Resources", href: "/resources" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for visual effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileOpenDropdown(null);
  }, [location.pathname]);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const isActivePath = (href?: string, children?: { href: string }[]) => {
    if (href) return location.pathname === href;
    if (children) return children.some((c) => location.pathname === c.href);
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 border-b border-border shadow-md backdrop-blur-nav"
          : "bg-background/90 border-b border-transparent backdrop-blur-nav"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-gradient-navy transition-opacity group-hover:opacity-80">
              13 STORE
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              Enterprise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActivePath(undefined, link.children)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-card border border-border shadow-xl overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`flex flex-col px-4 py-3 hover:bg-accent transition-colors ${
                              location.pathname === child.href
                                ? "bg-primary/5 border-l-2 border-primary"
                                : ""
                            }`}
                          >
                            <span
                              className={`text-sm font-medium ${
                                location.pathname === child.href
                                  ? "text-primary"
                                  : "text-foreground"
                              }`}
                            >
                              {child.label}
                            </span>
                            {child.desc && (
                              <span className="text-xs text-muted-foreground mt-0.5">
                                {child.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href!}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">ติดต่อเรา</Link>
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              asChild
            >
              <Link to="/contact">นัด Workshop</Link>
            </Button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/98 backdrop-blur-nav border-b border-border"
          >
            <div className="section-container py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(
                          mobileOpenDropdown === link.label ? null : link.label
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileOpenDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileOpenDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                location.pathname === child.href
                                  ? "text-primary bg-primary/10"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                              }`}
                            >
                              {child.label}
                              {child.desc && (
                                <span className="block text-xs text-muted-foreground font-normal mt-0.5">
                                  {child.desc}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href!}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 flex flex-col gap-2 border-t border-border mt-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">ติดต่อเรา</Link>
                </Button>
                <Button asChild className="w-full bg-primary text-primary-foreground">
                  <Link to="/contact">นัด Workshop</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
