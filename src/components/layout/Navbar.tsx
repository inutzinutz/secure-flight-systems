import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
const navLinks = [{
  label: "หน้าหลัก",
  href: "/"
}, {
  label: "Enterprise",
  href: "/enterprise"
}, {
  label: "Platform",
  href: "/platform"
}, {
  label: "Altura VTOL",
  href: "/altura"
}, {
  label: "Solutions",
  href: "/solutions"
}, {
  label: "Case Studies",
  href: "/case-studies"
}, {
  label: "ROI Calculator",
  href: "/roi-calculator"
 }, {
   label: "Drone Rental",
   href: "/drone-rental"
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // Check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);
  return <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-nav bg-background/95 border-b border-border shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">
            </span>
              <span className="text-muted-foreground">
            </span>
              <span className="text-xl font-bold text-gradient-navy">13 STORE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
                {link.label}
              </Link>)}
          </div>

          {/* CTA Buttons + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">ติดต่อเรา</Link>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">นัด Workshop</Link>
            </Button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-background/95 backdrop-blur-nav border-b border-border">
            <div className="section-container py-4 space-y-2">
              {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${location.pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
                  {link.label}
                </Link>)}
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>ติดต่อเรา</Link>
                </Button>
                <Button asChild className="w-full bg-primary text-primary-foreground">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>นัด Workshop</Link>
                </Button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}