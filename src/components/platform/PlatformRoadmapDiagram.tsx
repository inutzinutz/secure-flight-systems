import { motion } from "framer-motion";
import { 
  CheckCircle, ArrowRight, Target, Zap, Building, Globe,
  Monitor, Brain, Cog, Users
} from "lucide-react";
import { useState } from "react";

const roadmapPhases = [
  {
    phase: 1,
    title: "Operational Readiness",
    subtitle: "ทำให้ \"ใช้งานจริง + ขายได้ทันที\"",
    color: "from-blue-500 to-blue-600",
    icon: Target,
    focus: [
      "ปรับ UI Dashboard ให้ผู้บริหารเข้าใจใน 5 นาที",
      "Multi-Drone Control เสถียร",
      "Live + Playback + Timeline",
      "Role-based Access"
    ],
    output: "Demo พร้อมขาย / TOR Mapping / System Architecture",
    kpi: "Demo ผ่านหน่วยงานรัฐอย่างน้อย 3 หน่วย / ใช้งานจริงอย่างน้อย 1 พื้นที่"
  },
  {
    phase: 2,
    title: "AI Assisted Decision Platform",
    subtitle: "จากภาพ → วิเคราะห์ → ตัดสินใจ",
    color: "from-purple-500 to-purple-600",
    icon: Brain,
    focus: [
      "AI Module: Detection (คน/รถ/เรือ/ความผิดปกติ)",
      "Alert Rule Engine",
      "Event Highlight อัตโนมัติ",
      "ลดภาระคนดูจอ"
    ],
    output: "ชายแดน/ขายฝั่ง / ไฟป่า/น้ำท่วม / โรงงาน/นิคม",
    kpi: "ลดเวลาตัดสินใจหน้างาน ≥30% / ผู้บังคับบัญชาดู Dashboard ได้โดยไม่ต้องอธิบาย"
  },
  {
    phase: 3,
    title: "Dock + Autonomous Operation",
    subtitle: "คนไม่ต้องอยู่ แต่ระบบต้องทำงาน",
    color: "from-emerald-500 to-emerald-600",
    icon: Cog,
    focus: [
      "เชื่อม VTOL Dock / Drone Dock",
      "Mission Schedule",
      "Auto Takeoff/Landing",
      "Auto Report"
    ],
    output: "\"พื้นที่มีมิคน 0 คน แต่มีโดรนเฝ้า 24/7\"",
    kpi: "ปฏิบัติการอัตโนมัติได้จริง ≥1 พื้นที่ / ลด OPEX คนอย่างน้อย 50%"
  },
  {
    phase: 4,
    title: "National / Enterprise Scale",
    subtitle: "จากโปรตดี้ → โครงสร้างพื้นฐาน",
    color: "from-amber-500 to-amber-600",
    icon: Globe,
    focus: [
      "Multi-Agency Dashboard",
      "GIS Layer ระดับจังหวัด/ประเทศ",
      "Data Sharing แบบควบคุมสิทธิ์",
      "รองรับ TOR ระดับ \"โครงการชาติ\""
    ],
    output: "\"LM = ระบบปฏิบัติการโดรนของประเทศ\"",
    kpi: "มีโครงการระดับจังหวัด/ภูมิภาค / MA รายปีเริ่มสะสม"
  }
];

const strategicObjectives = [
  {
    level: "2.1 ระดับนโยบาย",
    icon: Target,
    items: [
      "วาง LM เป็น Core Platform ที่รัฐ \"เลือกใช้ซื้อ\"",
      "รองรับ TOR ภาครัฐ / กองทัพ / รัฐวิสาหกิจ",
      "On-Prem / Private Cloud / Data อยู่ไทย 100%"
    ]
  },
  {
    level: "2.2 ระดับธุรกิจ",
    icon: Building,
    items: [
      "ขายเป็น Platform + MA รายปี",
      "ผูกกับ Dock / VTOL / Multi-Drone",
      "หนึ่งแพลตฟอร์ม = หลายหน่วยงานใช้ร่วมกัน"
    ]
  },
  {
    level: "2.3 ระดับเทคนิค",
    icon: Cog,
    items: [
      "เสถียร / ปลอดภัย / Scale ได้",
      "ไม่ผูกโดยวีที่เดียว (Anti-Vendor Lock)"
    ]
  }
];

export function PlatformRoadmapDiagram() {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className="relative py-8">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Roadmap แพลตฟอร์ม 12 เดือน
        </h3>
        <p className="text-muted-foreground">
          (ชัดเป็นเฟส)
        </p>
      </motion.div>

      {/* Strategic Objectives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-4 mb-12"
      >
        {strategicObjectives.map((obj, i) => (
          <motion.div
            key={obj.level}
            initial={{ opacity: 0, x: i === 0 ? -20 : i === 2 ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <obj.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-foreground text-sm">{obj.level}</h4>
            </div>
            <ul className="space-y-2">
              {obj.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Roadmap Phases */}
      <div className="space-y-6">
        {roadmapPhases.map((phase, i) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onMouseEnter={() => setActivePhase(phase.phase)}
            onMouseLeave={() => setActivePhase(null)}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
              activePhase === phase.phase 
                ? "border-primary bg-primary/5 shadow-lg" 
                : "border-border bg-card hover:border-primary/50"
            }`}
          >
            {/* Phase connector line */}
            {i < roadmapPhases.length - 1 && (
              <motion.div
                className="absolute left-8 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-primary to-primary/20"
                animate={isAnimating ? { scaleY: [1, 1.2, 1], opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            )}

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Phase Header */}
              <div className="flex items-start gap-4 lg:w-1/4">
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}
                  animate={activePhase === phase.phase ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <phase.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <span className="text-xs font-bold text-primary">Phase {phase.phase}</span>
                  <h4 className="font-bold text-foreground">{phase.title}</h4>
                  <p className="text-xs text-muted-foreground">{phase.subtitle}</p>
                </div>
              </div>

              {/* Focus Items */}
              <div className="lg:w-1/3">
                <p className="text-xs font-bold text-primary mb-2">Focus</p>
                <ul className="space-y-1">
                  {phase.focus.map((item, j) => (
                    <motion.li 
                      key={j}
                      initial={{ opacity: 0 }}
                      animate={activePhase === phase.phase ? { opacity: 1, x: [0, 5, 0] } : { opacity: 1 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-start gap-2 text-xs text-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Output */}
              <div className="lg:w-1/4">
                <p className="text-xs font-bold text-primary mb-2">Output</p>
                <p className="text-xs text-muted-foreground">{phase.output}</p>
              </div>

              {/* KPI */}
              <motion.div 
                className="lg:w-1/4 p-3 rounded-xl bg-primary/10"
                animate={activePhase === phase.phase ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <p className="text-xs font-bold text-primary mb-1">KPI</p>
                <p className="text-xs text-foreground">{phase.kpi}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Arrow indicator between phases */}
      <motion.div 
        className="flex justify-center items-center gap-2 my-8"
        animate={isAnimating ? { y: [0, 5, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-muted-foreground">ก้าวไปทีละเฟส</span>
        <ArrowRight className="w-5 h-5 text-primary" />
        <span className="text-sm text-muted-foreground">สู่ระบบปฏิบัติการโดรนระดับชาติ</span>
      </motion.div>

      {/* Toggle animation button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {isAnimating ? "⏸ หยุด Animation" : "▶ เล่น Animation"}
        </button>
      </div>
    </div>
  );
}
