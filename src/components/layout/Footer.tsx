import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, MessageCircle } from "lucide-react";

const currentYear = new Date().getFullYear();

const footerLinks = {
  solutions: [
    { label: "13 STORE Enterprise", href: "/enterprise" },
    { label: "UAV AI Platform", href: "/platform" },
    { label: "Altura VTOL Dock", href: "/altura" },
    { label: "Use Cases", href: "/solutions" },
    { label: "Drone Rental", href: "/drone-rental" },
  ],
  resources: [
    { label: "Company Profile", href: "/resources" },
    { label: "Architecture Diagrams", href: "/resources" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "ROI Calculator", href: "/roi-calculator" },
    { label: "นัด Workshop", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gradient-brand">13 STORE</span>
              <span className="text-xs text-primary font-semibold px-2 py-0.5 rounded-full bg-primary/10">
                Enterprise
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enterprise Drone Solutions ครบวงจร: System Integrator + Solution Owner + Operation Partner สำหรับภาครัฐและองค์กรใหญ่ในประเทศไทย
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/DJI13Store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://line.me/R/ti/p/@357kaaxa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-[#00B900] hover:bg-[#00B900]/10 transition-colors"
                aria-label="Line"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.youtube.com/@DJI13Storethailand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:bg-blue-600/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">ติดต่อเรา</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>กรุงเทพมหานคร, ประเทศไทย</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a
                  href="tel:0614176015"
                  className="hover:text-primary transition-colors"
                >
                  061-417-6015
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@dji13store.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@dji13store.com
                </a>
              </li>
            </ul>

            {/* Line CTA */}
            <div className="mt-6">
              <a
                href="https://line.me/R/ti/p/@357kaaxa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00B900]/10 text-[#00B900] hover:bg-[#00B900]/20 transition-colors text-sm font-medium"
              >
                <MessageCircle size={16} />
                Line: @dji13enterprise
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {currentYear} 13 STORE Enterprise. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-xl">
              <strong>Disclaimer:</strong> DJI และโลโก้ DJI เป็นเครื่องหมายการค้าของ SZ DJI Technology Co., Ltd.
              13 STORE เป็นตัวแทนจำหน่ายผลิตภัณฑ์ DJI Enterprise อย่างเป็นทางการในประเทศไทย
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
