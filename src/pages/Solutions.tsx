import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Siren, 
  HardHat, 
  TrafficCone, 
  Landmark,
  MapPin,
  Anchor,
  Mountain,
  ArrowRight,
  Shield,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const solutionGroups = [
  {
    id: "security",
    title: "ความมั่นคง",
    subtitle: "Security & Defense",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/50",
    solutions: [
      {
        icon: Siren,
        title: "Emergency Response",
        subtitle: "ดับเพลิง / กู้ภัย",
        description: "ค้นหาผู้ประสบภัย วางแผนเส้นทาง ประสานงานหน่วย",
        capabilities: ["Thermal", "Real-time Video", "Night Ops"],
      },
      {
        icon: MapPin,
        title: "Border Security",
        subtitle: "ชายแดน / ความมั่นคง",
        description: "เฝ้าระวังชายแดน ตรวจจับการลักลอบ",
        capabilities: ["Long Endurance", "Day/Night", "Autonomous"],
      },
      {
        icon: Shield,
        title: "Critical Infrastructure",
        subtitle: "โครงสร้างสำคัญ",
        description: "ปกป้องสถานที่สำคัญ เขื่อน โรงไฟฟ้า",
        capabilities: ["24/7 Monitor", "AI Alert", "Perimeter"],
      },
    ]
  },
  {
    id: "urban",
    title: "เมืองอัจฉริยะ",
    subtitle: "Smart City & Traffic",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/50",
    solutions: [
      {
        icon: Building2,
        title: "Smart City",
        subtitle: "เฝ้าระวังเมือง",
        description: "ระบบ 24/7 สำหรับเมืองอัจฉริยะ",
        capabilities: ["24/7 Monitoring", "AI Analytics", "Crowd Detection"],
      },
      {
        icon: TrafficCone,
        title: "Highway Police",
        subtitle: "ตรวจจราจร / อุบัติเหตุ",
        description: "ตรวจสอบสภาพจราจร ประเมินอุบัติเหตุ",
        capabilities: ["Quick Deploy", "Wide Coverage", "Incident Report"],
      },
      {
        icon: Landmark,
        title: "Local Government",
        subtitle: "ท้องถิ่น / สำรวจ",
        description: "สำรวจที่ดิน ทำแผนที่ เตรียมพร้อมรับภัยพิบัติ",
        capabilities: ["Land Survey", "Asset Inspection", "Disaster Prep"],
      },
    ]
  },
  {
    id: "industry",
    title: "อุตสาหกรรม",
    subtitle: "Industrial & Infrastructure",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/50",
    solutions: [
      {
        icon: HardHat,
        title: "Construction",
        subtitle: "ก่อสร้าง / Survey",
        description: "สำรวจพื้นที่ ติดตามความคืบหน้า 3D Mapping",
        capabilities: ["Aerial Survey", "3D Mapping", "Progress Report"],
      },
      {
        icon: Mountain,
        title: "Infrastructure",
        subtitle: "ไฟฟ้า / น้ำ / โทรคมนาคม",
        description: "ตรวจสอบสายส่งไฟฟ้า ท่อส่ง เสาโทรคมนาคม",
        capabilities: ["Power Line", "Pipeline", "Predictive MA"],
      },
      {
        icon: Anchor,
        title: "Maritime",
        subtitle: "ทะเล / ท่าเรือ",
        description: "ลาดตระเวนทางทะเล ตรวจสอบท่าเรือ",
        capabilities: ["Offshore Ops", "Ship Tracking", "SAR Support"],
      },
    ]
  }
];

const Solutions = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Solutions Library
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                โซลูชันตามกลุ่มเป้าหมาย
              </h1>
              <p className="text-xl text-muted-foreground">
                เลือกดูโซลูชันที่เหมาะกับภารกิจของคุณ — ปรับแต่งได้ตามความต้องการจริง
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solution Groups */}
        <section className="section-padding">
          <div className="section-container">
            {solutionGroups.map((group, groupIndex) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
                className="mb-12"
                onMouseEnter={() => setActiveGroup(group.id)}
                onMouseLeave={() => setActiveGroup(null)}
              >
                {/* Group Header */}
                <motion.div 
                  className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r ${group.color} mb-6`}
                  animate={isAnimating && activeGroup === group.id ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-lg font-bold text-white">{group.title}</span>
                  <span className="text-sm text-white/80">— {group.subtitle}</span>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.solutions.map((solution, i) => (
                    <motion.div
                      key={solution.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIndex * 0.1 + i * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`p-6 rounded-2xl bg-card border-2 transition-all duration-300 ${
                        activeGroup === group.id 
                          ? `${group.borderColor} shadow-lg` 
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center flex-shrink-0`}
                          animate={isAnimating ? { rotate: [0, 5, -5, 0] } : {}}
                          transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                        >
                          <solution.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-foreground">{solution.title}</h3>
                          <p className="text-sm text-primary">{solution.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.capabilities.map((cap) => (
                          <motion.span
                            key={cap}
                            className={`px-3 py-1 rounded-full ${group.bgColor} text-xs font-medium text-foreground`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {cap}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ทุกโซลูชันได้อะไร?
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "เพิ่มพื้นที่ครอบคลุม", value: "5-20x", color: "text-primary" },
                { label: "ลดเวลาตอบสนอง", value: "30-70%", color: "text-emerald-500" },
                { label: "หลักฐานภาพ/วิดีโอ", value: "100%", color: "text-blue-500" },
                { label: "ประหยัดกำลังคน", value: "50%+", color: "text-violet-500" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-background border border-border text-center"
                >
                  <motion.p 
                    className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                    animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="section-container relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ไม่เห็น Use Case ของคุณ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                เราออกแบบโซลูชันเฉพาะทางได้ — นัดคุยกับทีมผู้เชี่ยวชาญ
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="btn-navy">
                    นัดคุยกับทีม
                    <ArrowRight size={20} />
                  </button>
                </Link>
                <Link to="/platform">
                  <button className="btn-hero-secondary">
                    ดู Platform
                    <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Toggle animation */}
        <div className="flex justify-center py-4 bg-background">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {isAnimating ? "⏸ หยุด Animation" : "▶ เล่น Animation"}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
