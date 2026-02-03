import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  Cloud, Database, Shield, GitBranch, ArrowRight, CheckCircle, 
  Target, DollarSign, Users, Megaphone, AlertTriangle, Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import { PlatformStrategicDiagram } from "@/components/platform/PlatformStrategicDiagram";
import { PlatformRoadmapDiagram } from "@/components/platform/PlatformRoadmapDiagram";
import { AIFunctionsDiagram } from "@/components/platform/AIFunctionsDiagram";
import { UseCasesDiagram } from "@/components/platform/UseCasesDiagram";

const keyFeatures = [
  { icon: Cloud, title: "On-Prem / Private Cloud", desc: "ติดตั้งในศูนย์ข้อมูลของคุณเอง" },
  { icon: Database, title: "Data Sovereignty", desc: "ข้อมูลอยู่ในประเทศไทย 100%" },
  { icon: Shield, title: "Security First", desc: "ระดับความปลอดภัยสำหรับงานรัฐ" },
  { icon: GitBranch, title: "Anti-Vendor Lock", desc: "ไม่ผูกขาดกับเจ้าใดเจ้าหนึ่ง" },
];

const targetCustomers = {
  tier1: {
    title: "Tier 1: ต้องได้",
    desc: "กองทัพ / ตำรวจ / ปก. / ความมั่นคง / หน่วยชายแดน / ชายฝั่ง",
    icon: Shield
  },
  tier2: {
    title: "Tier 2: เงินดี ใช้ซ้ำ",
    desc: "นิคมอุตสาหกรรม / พลังงาน / โครงสร้างพื้นฐาน / ท่าเรือ / สนามบิน",
    icon: Users
  }
};

const revenueModels = [
  "Platform License (On-Prem)",
  "MA / Support รายปี",
  "AI Module Add-on",
  "Dock + UAV + Integration",
  "Training + SOP"
];

const keyMessages = [
  "อย่าอธิบายเชิงเทคนิคกับผู้บริหาร",
  "ต้องผูก ภัยคุกคามจริงของไทย",
  "ต้องพูดคำว่า: ความมั่นคง / อธิปไตยข้อมูล / ใช้ได้"
];

const Platform = () => {
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
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                แผนงานแพลตฟอร์มโดรน LM — ปีถัดไป (เชิงยุทธศาสตร์ + ใช้งานจริง + ขายได้)
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                LM Platform
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                Command & Intelligence Platform
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                ระบบปฏิบัติการโดรนอัจฉริยะของรัฐและองค์กรขนาดใหญ่
              </p>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                ไม่ใช่แอปดูภาพโดรน, ซอฟต์แวร์เสริมกล้อง
                <br />
                <span className="text-foreground font-medium">แต่คือ "Command & Intelligence Platform" สำหรับความมั่นคง / สาธารณภัย / โครงสร้างพื้นฐาน / อุตสาหกรรม</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="btn-navy">
                    <Calendar size={20} />
                    ขอ Demo Platform
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn-hero-secondary">
                    <Target size={20} />
                    ปรึกษาโครงการ
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                1) Positioning ระดับประเทศ
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">นิยามให้ชัดก่อน</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-background border border-border/50 text-center hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Diagram - Core System Engine */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <PlatformStrategicDiagram />
          </div>
        </section>

        {/* AI Functions Diagram */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <AIFunctionsDiagram />
          </div>
        </section>

        {/* Use Cases Diagram */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <UseCasesDiagram />
          </div>
        </section>

        {/* Roadmap Diagram */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                2) เป้าหมายเชิงกลยุทธ์ ปีหน้า + 3) Roadmap
              </span>
            </motion.div>
            <PlatformRoadmapDiagram />
          </div>
        </section>

        {/* Target Customers & Revenue Model */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Target Customers */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">4) กลุ่มลูกค้าเป้าหมาย</span>
                    <h3 className="text-xl font-bold text-foreground">(โฟกัส ไม่กระจาย)</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-primary/5 border border-primary/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <targetCustomers.tier1.icon className="w-5 h-5 text-primary" />
                      <span className="font-bold text-foreground">{targetCustomers.tier1.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{targetCustomers.tier1.desc}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <targetCustomers.tier2.icon className="w-5 h-5 text-primary" />
                      <span className="font-bold text-foreground">{targetCustomers.tier2.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{targetCustomers.tier2.desc}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Revenue Model */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl card-navy"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">5) โมเดลรายได้</span>
                    <h3 className="text-xl font-bold text-white">(สำคัญมาก)</h3>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {revenueModels.map((model, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-white">{model}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div 
                  className="p-4 rounded-xl bg-primary/20 border border-primary/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-center font-bold text-primary">
                    ต้องมี recurring income
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Messages */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Things NOT to do */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-destructive/5 border-2 border-destructive/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <span className="text-xs text-destructive font-medium">6) สิ่งที่ "ห้ามพลาด"</span>
                    <h3 className="text-xl font-bold text-foreground">ถ้าจะดันจริง</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {keyMessages.map((msg, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                      {msg}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Key Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-primary/5 border-2 border-primary/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">7) ประโยค Key Message</span>
                    <h3 className="text-xl font-bold text-foreground">(ใช้ได้ทั้งปี)</h3>
                  </div>
                </div>
                <motion.div 
                  className="p-6 rounded-xl bg-background border border-border"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-lg font-bold text-foreground text-center leading-relaxed">
                    "LM ไม่ได้ขายโดรน แต่ขายระบบตัดสินใจ
                    <br />
                    <span className="text-primary">ที่ทำให้รัฐไทยตอบสนองภัยได้เร็วกว่าเดิม"</span>
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                พร้อมยกระดับระบบปฏิบัติการโดรนของคุณ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                นัดพูดคุยกับทีมเราเพื่อวางแผน Pilot Project ที่เหมาะกับองค์กรของคุณ
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="btn-navy">
                    <Calendar size={20} />
                    ขอ Demo Platform
                  </button>
                </Link>
                <Link to="/altura">
                  <button className="btn-hero-secondary">
                    ดู Altura VTOL Dock
                    <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
