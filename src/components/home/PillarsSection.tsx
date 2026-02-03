import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Users, Cpu, Radar, ArrowRight, Shield, Cloud, Database, Zap } from "lucide-react";

const pillars = [
  {
    id: "enterprise",
    icon: Users,
    title: "13 STORE Enterprise",
    subtitle: "System Integrator + Solution Owner + Operation Partner",
    description: "ทีมผู้เชี่ยวชาญ + กระบวนการขายแบบ Enterprise + บริการหลังการขายครบวงจร รวมถึง Project Delivery, License, MA Contract และ DaaS",
    features: [
      "ทีมวิศวกร + นักบิน Certified",
      "กระบวนการ 6 ขั้นตอน",
      "MA/Support ตลอดอายุใช้งาน",
    ],
    href: "/enterprise",
    gradient: "pillar-card-enterprise",
  },
  {
    id: "platform",
    icon: Cpu,
    title: "LM Platform",
    subtitle: "Command & Intelligence Platform",
    description: "แพลตฟอร์มศูนย์บัญชาการ + AI + GIS สำหรับภาครัฐ/องค์กรใหญ่ รองรับ On-Prem / Private Cloud ข้อมูลอยู่ในไทย ไม่ผูกยี่ห้อเดียว",
    features: [
      "On-Prem / Private Cloud",
      "Data Sovereignty (อยู่ไทย)",
      "Anti-Vendor Lock",
    ],
    href: "/platform",
    gradient: "pillar-card-platform",
  },
  {
    id: "altura",
    icon: Radar,
    title: "Altura VTOL Dock",
    subtitle: "National Aerial Security Infrastructure",
    description: "โครงสร้างพื้นฐานความมั่นคงทางอากาศ 24/7 ลดกำลังพล เพิ่มพื้นที่ครอบคลุม สำหรับชายแดน ทะเล โครงสร้างพื้นฐาน และภัยพิบัติ",
    features: [
      "Autonomous 24/7",
      "Reduce Manpower 80%",
      "Grid Deployment Model",
    ],
    href: "/altura",
    gradient: "pillar-card-altura",
  },
];

export function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            3 Pillars
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            สามเสาหลัก = ระบบเดียวกัน
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            แต่ละเสาเสริมกัน ทำให้ภารกิจสำเร็จได้จริง
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link to={pillar.href} className="block h-full">
                <div className={`pillar-card h-full ${pillar.gradient}`}>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-background/10 flex items-center justify-center mb-6">
                    <pillar.icon className="w-7 h-7 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span>ดูรายละเอียด</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
