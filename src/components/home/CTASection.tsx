import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, Download, CheckCircle, ArrowRight, Phone } from "lucide-react";
import alturaImage from "@/assets/altura-deployment-grid.jpg";

const trustPoints = [
  "ทำได้จริงในไทย",
  "ทีมอยู่หน้างาน ไม่ทิ้งลูกค้า",
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      <div className="section-container relative section-padding">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              พร้อมเริ่มต้น?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              นัดคุยกับทีมผู้เชี่ยวชาญ
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              เราพร้อมรับฟังโจทย์และออกแบบ Solution ที่เหมาะกับคุณ —
              ไม่ว่าจะเป็น Workshop, Site Survey, Demo หรือขอใบเสนอราคา
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="btn-hero-primary group">
                  <Calendar size={20} />
                  นัด Workshop / Site Survey
                  <ArrowRight
                    size={16}
                    className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                  />
                </button>
              </Link>
              <Link to="/resources">
                <button className="btn-hero-secondary">
                  <Download size={20} />
                  ดาวน์โหลด Company Profile
                </button>
              </Link>
            </div>

            {/* Phone CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="tel:0614176015"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                หรือโทรหาเราโดยตรง:{" "}
                <span className="font-semibold text-foreground">061-417-6015</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
