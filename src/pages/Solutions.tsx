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
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    icon: Siren,
    title: "Emergency Response",
    subtitle: "ดับเพลิง / กู้ภัย / USAR",
    description: "Real-time situational awareness สำหรับทีมกู้ภัย ช่วยค้นหาผู้ประสบภัย วางแผนเส้นทาง และประสานงานหน่วยต่างๆ",
    capabilities: ["Thermal Imaging", "Real-time Video", "Night Operations", "Multi-team Coordination"],
  },
  {
    icon: Building2,
    title: "Smart City",
    subtitle: "เฝ้าระวังเมือง / Traffic / Events",
    description: "ระบบ 24/7 สำหรับการเฝ้าระวังเมือง ตรวจจราจร งานอีเวนต์ และความปลอดภัยสาธารณะ",
    capabilities: ["24/7 Monitoring", "AI Analytics", "Traffic Flow", "Crowd Detection"],
  },
  {
    icon: HardHat,
    title: "Construction",
    subtitle: "Survey / Progress / Inspection",
    description: "สำรวจพื้นที่ ติดตามความคืบหน้า ตรวจสอบคุณภาพ และสร้างโมเดล 3 มิติ",
    capabilities: ["Aerial Survey", "3D Mapping", "Progress Report", "Safety Inspection"],
  },
  {
    icon: TrafficCone,
    title: "Highway Police",
    subtitle: "ตรวจจราจร / อุบัติเหตุ / ค้นหา",
    description: "ตรวจสอบสภาพจราจร ประเมินอุบัติเหตุ ค้นหารถหาย และติดตามสถานการณ์",
    capabilities: ["Quick Deploy", "Wide Coverage", "License Plate", "Incident Report"],
  },
  {
    icon: Landmark,
    title: "Local Government",
    subtitle: "สำรวจ / แผนที่ / ป้องกันภัย",
    description: "สำรวจที่ดิน ทำแผนที่ ตรวจสอบโครงสร้าง และเตรียมพร้อมรับภัยพิบัติ",
    capabilities: ["Land Survey", "Asset Inspection", "Disaster Prep", "Budget Friendly"],
  },
  {
    icon: MapPin,
    title: "Border Security",
    subtitle: "ชายแดน / ความมั่นคง",
    description: "เฝ้าระวังชายแดน ตรวจจับการลักลอบ และประสานงานหน่วยความมั่นคง",
    capabilities: ["Long Endurance", "Day/Night", "Autonomous Grid", "Alert System"],
  },
  {
    icon: Anchor,
    title: "Maritime",
    subtitle: "ทะเล / ท่าเรือ / ประมง",
    description: "ลาดตระเวนทางทะเล ตรวจสอบท่าเรือ เฝ้าระวังเรือประมง และค้นหากู้ภัย",
    capabilities: ["Offshore Ops", "Ship Tracking", "Oil Spill", "SAR Support"],
  },
  {
    icon: Mountain,
    title: "Infrastructure",
    subtitle: "ไฟฟ้า / น้ำ / โทรคมนาคม",
    description: "ตรวจสอบสายส่งไฟฟ้า ท่อส่ง เสาโทรคมนาคม และโครงสร้างพื้นฐานสำคัญ",
    capabilities: ["Power Line", "Pipeline", "Tower Inspection", "Predictive MA"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Solutions Library
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Use Cases & Solutions
              </h1>
              <p className="text-xl text-muted-foreground">
                Solutions สำหรับทุกหน่วยงานและทุกภารกิจ ปรับแต่งได้ตามความต้องการจริง
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, i) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-foreground">{solution.title}</h3>
                      <p className="text-sm text-primary">{solution.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1 rounded-full bg-secondary text-xs text-secondary-foreground"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">ไม่เห็น Use Case ของคุณ?</h2>
            <p className="text-muted-foreground mb-8">เราออกแบบ Solution เฉพาะทางได้ ติดต่อทีมผู้เชี่ยวชาญของเรา</p>
            <Link to="/contact">
              <button className="btn-hero-primary">
                นัดคุยกับทีม
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
