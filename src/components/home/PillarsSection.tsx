import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Users, Cpu, Radar, ArrowRight } from "lucide-react";
import { FlyingDrone } from "@/components/icons/DroneIcon";

const pillars = [
  {
    id: "enterprise",
    icon: Users,
    badge: "People + Process",
    title: "13 STORE Enterprise",
    subtitle: "System Integrator + Solution Owner + Operation Partner",
    description:
      "ทีมผู้เชี่ยวชาญ + กระบวนการขายแบบ Enterprise + บริการหลังการขายครบวงจร รวมถึง Project Delivery, License, MA Contract และ DaaS",
    features: [
      "ทีมวิศวกร + นักบิน Certified",
      "กระบวนการ 6 ขั้นตอน",
      "MA/Support ตลอดอายุใช้งาน",
    ],
    href: "/enterprise",
    gradient: "pillar-card-enterprise",
    accentColor: "text-blue-300",
  },
  {
    id: "platform",
    icon: Cpu,
    badge: "C2 + AI + GIS",
    title: "UAV AI Platform",
    subtitle: "Command & Intelligence Platform",
    description:
      "แพลตฟอร์มศูนย์บัญชาการ + AI + GIS สำหรับภาครัฐ/องค์กรใหญ่ รองรับ On-Prem / Private Cloud ข้อมูลอยู่ในไทย ไม่ผูกยี่ห้อเดียว",
    features: [
      "On-Prem / Private Cloud",
      "Data Sovereignty (อยู่ไทย)",
      "Anti-Vendor Lock",
    ],
    href: "/platform",
    gradient: "pillar-card-platform",
    accentColor: "text-cyan-300",
  },
  {
    id: "altura",
    icon: Radar,
    badge: "Autonomous 24/7",
    title: "Altura VTOL Dock",
    subtitle: "National Aerial Security Infrastructure",
    description:
      "โครงสร้างพื้นฐานความมั่นคงทางอากาศ 24/7 ลดกำลังพล เพิ่มพื้นที่ครอบคลุม สำหรับชายแดน ทะเล โครงสร้างพื้นฐาน และภัยพิบัติ",
    features: [
      "Autonomous 24/7",
      "Reduce Manpower 80%",
      "Grid Deployment Model",
    ],
    href: "/altura",
    gradient: "pillar-card-altura",
    accentColor: "text-amber-300",
  },
];

export function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Flying Drones */}
      <FlyingDrone
        className="w-10 h-10"
        pathX={[0, 150, 300, 200, 50, 0]}
        pathY={[50, 80, 40, 100, 60, 50]}
        rotation={[0, 6, -8, 10, -4, 0]}
        duration={16}
        color="text-primary/30"
      />
      <FlyingDrone
        className="w-8 h-8"
        pathX={[350, 200, 50, 150, 300, 350]}
        pathY={[100, 60, 90, 130, 70, 100]}
        rotation={[0, -8, 6, -10, 5, 0]}
        duration={14}
        delay={4}
        color="text-blue-500/30"
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            3 Pillars
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            สามเสาหลัก = ระบบเดียวกัน
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            แต่ละเสาเสริมกัน — ทำให้ภารกิจสำเร็จได้จริง
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link to={pillar.href} className="block h-full group">
                <div
                  className={`pillar-card h-full ${pillar.gradient} relative overflow-hidden`}
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5 rounded-2xl" />

                  {/* Badge */}
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/10 mb-4 ${pillar.accentColor}`}>
                    {pillar.badge}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className={`font-medium text-sm mb-4 ${pillar.accentColor}`}>
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {pillar.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto">
                    <span>ดูรายละเอียด</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          ใช้งานได้ทั้งแบบแยกส่วน หรือเชื่อมครบ 3 เสาพร้อมกันเป็นระบบเดียว
        </motion.p>
      </div>
    </section>
  );
}
