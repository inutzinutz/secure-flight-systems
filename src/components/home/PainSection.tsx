import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, Users, Eye, TrendingUp } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "เหตุเกิดตลอด 24 ชั่วโมง",
    description: "อุบัติเหตุ ไฟไหม้ น้ำท่วม ลักลอบข้ามแดน เกิดได้ทุกเวลา",
  },
  {
    icon: Users,
    title: "กำลังคนไม่พอ",
    description: "พื้นที่กว้าง ต้องตรวจถี่ แต่ทีมมีจำกัด",
  },
  {
    icon: Clock,
    title: "ตอบสนองช้า",
    description: "กว่าจะรู้เหตุ กว่าจะถึงที่ เสียเวลาทอง",
  },
  {
    icon: Eye,
    title: "ขาดภาพรวม",
    description: "ข้อมูลกระจัดกระจาย ไม่เห็นสถานการณ์จริง",
  },
];

export function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            ทำไมต้องตอนนี้?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            เมืองและพื้นที่ซับซ้อนขึ้นทุกวัน
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ต้องตรวจตราถี่ขึ้น ตอบสนองเร็วขึ้น แต่กำลังคนมีเท่าเดิม
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-destructive/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              ต้องมีระบบ 24/7 ที่ทำงานแทนคนได้
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
