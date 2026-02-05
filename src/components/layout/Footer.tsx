import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">DJI</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-xl font-bold text-gradient-brand">13 STORE</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enterprise Drone Solutions: System Integrator + Solution Owner + Operation Partner
              สำหรับภารกิจสำคัญขององค์กรภาครัฐและเอกชน
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/enterprise" className="text-muted-foreground hover:text-primary text-sm transition-colors">13 STORE Enterprise</Link></li>
              <li><Link to="/platform" className="text-muted-foreground hover:text-primary text-sm transition-colors">LM Platform</Link></li>
              <li><Link to="/altura" className="text-muted-foreground hover:text-primary text-sm transition-colors">Altura VTOL Dock</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-primary text-sm transition-colors">Use Cases</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary text-sm transition-colors">Company Profile</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary text-sm transition-colors">Architecture Diagrams</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">นัด Workshop</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">ขอใบเสนอราคา</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">ติดต่อเรา</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>กรุงเทพมหานคร, ประเทศไทย</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>02-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>contact@uavsystem.cloud</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} 13 STORE. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-2xl">
              <strong>Disclaimer:</strong> DJI และโลโก้ DJI เป็นเครื่องหมายการค้าของ SZ DJI Technology Co., Ltd. 
              13 STORE เป็นตัวแทนจำหน่ายผลิตภัณฑ์ DJI Enterprise ในประเทศไทย
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
