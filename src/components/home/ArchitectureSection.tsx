import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import architectureImage from "@/assets/integrated-architecture.jpg";

export function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Integrated Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            หนึ่งระบบ สามเสาหลัก
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ไม่ใช่แค่ขายโดรน แต่เป็นระบบครบวงจรที่ทำให้ภารกิจสำเร็จ
            ตั้งแต่ทีม กระบวนการ แพลตฟอร์ม ไปจนถึงโครงสร้างพื้นฐาน
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-border/50 glow-amber"
        >
          <img
            src={architectureImage}
            alt="Integrated System Architecture - Enterprise + UAV AI Platform + Altura VTOL"
            className="w-full h-auto"
          />
          {/* Overlay labels */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 rounded-lg bg-secondary/80 text-foreground font-medium">
                Enterprise Delivery (People + Process)
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary/80 text-foreground font-medium">
                UAV AI Platform (C2 + AI + GIS)
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary/80 text-foreground font-medium">
                Altura/Drone/Dock (Autonomous 24/7)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
