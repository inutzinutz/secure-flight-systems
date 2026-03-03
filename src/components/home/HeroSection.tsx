import { motion } from "framer-motion";
import { ArrowRight, Calendar, FileText, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-drone-city.jpg";
import { FlyingDrone } from "@/components/icons/DroneIcon";

const trustItems = [
  { label: "ทำได้จริงในไทย", color: "bg-green-500" },
  { label: "ทีมอยู่หน้างาน", color: "bg-green-500" },
  { label: "รองรับ TOR งานรัฐ", color: "bg-green-500" },
  { label: "ไม่ผูกยี่ห้อเดียว", color: "bg-green-500" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Drones */}
      <FlyingDrone
        className="w-14 h-14"
        pathX={[100, 300, 500, 400, 200, 100]}
        pathY={[100, 150, 80, 180, 120, 100]}
        rotation={[0, 8, -6, 12, -4, 0]}
        duration={20}
        color="text-primary/40"
      />
      <FlyingDrone
        className="w-12 h-12"
        pathX={[500, 300, 100, 250, 450, 500]}
        pathY={[200, 120, 180, 250, 160, 200]}
        rotation={[0, -10, 8, -8, 6, 0]}
        duration={18}
        delay={5}
        color="text-primary/30"
      />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Enterprise Drone Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Content */}
      <div className="relative section-container pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              Enterprise Drone Solutions — Thailand
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            <span className="text-gradient-brand">13 STORE</span>
            <br />
            <span className="text-foreground/90">
              Enterprise Team + Command Platform
            </span>
            <br />
            <span className="text-foreground/80">
              + National VTOL Infrastructure
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            จากภารกิจภาคสนาม สู่ข้อมูลเชิงตัดสินใจ —{" "}
            <span className="text-foreground/80 font-medium">
              From Flight to Insight
            </span>
          </motion.p>

          {/* Key Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-5 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm mb-10 max-w-2xl"
          >
            <p className="text-foreground/90 italic text-base leading-relaxed">
              "13 STORE ไม่ได้ขายโดรน — แต่ดูแลภารกิจสำคัญขององค์กรให้{" "}
              <span className="text-primary font-semibold not-italic">
                ปลอดภัย มีข้อมูล และตัดสินใจได้เร็วขึ้น
              </span>"
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
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
            <Link to="/contact">
              <button className="btn-hero-secondary">
                <FileText size={20} />
                ขอ Demo / ใบเสนอราคา
              </button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
