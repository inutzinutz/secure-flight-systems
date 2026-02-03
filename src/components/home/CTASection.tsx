import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, FileText, Download, ArrowRight, CheckCircle } from "lucide-react";
import alturaImage from "@/assets/altura-deployment-grid.jpg";

const trustPoints = [
  "ทำได้จริงในไทย",
  "ทีมอยู่หน้างาน",
  "รองรับงานรัฐ TOR",
  "ไม่ผูกยี่ห้อเดียว",
];

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={alturaImage}
          alt="Altura VTOL Deployment Grid"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="section-container relative section-padding">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              พร้อมเริ่มต้น?
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              นัดคุยกับทีมผู้เชี่ยวชาญ
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              เราพร้อมรับฟังโจทย์และออกแบบ Solution ที่เหมาะกับคุณ
              ไม่ว่าจะเป็น Workshop, Site Survey, Demo หรือขอใบเสนอราคา
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="btn-hero-primary">
                  <Calendar size={20} />
                  นัด Workshop / Site Survey
                </button>
              </Link>
              <Link to="/resources">
                <button className="btn-hero-secondary">
                  <Download size={20} />
                  ดาวน์โหลด Company Profile
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
