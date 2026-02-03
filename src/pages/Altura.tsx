import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle, Eye, Brain, Shield, Anchor, Building, 
  AlertTriangle, Target, Globe, DollarSign, Flag, Calendar, Network, Zap,
  Compass, Cog, Wrench, MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { StrategicDiagram } from "@/components/altura/StrategicDiagram";
import { DeploymentDiagram } from "@/components/altura/DeploymentDiagram";

const executiveNarrative = [
  { icon: Eye, title: "ดวงตา", subtitle: "เฝ้าระวัง", desc: "ดวงตาเฝ้าระวังทุกพื้นที่" },
  { icon: Brain, title: "สมอง", subtitle: "วิเคราะห์", desc: "สมองวิเคราะห์และประมวลผล" },
  { icon: Compass, title: "แขนยาว", subtitle: "เข้าถึง", desc: "แขนยาวเข้าถึงทุกจุด" },
  { icon: Cog, title: "อัตโนมัติ", subtitle: "24/7", desc: "ระบบอัตโนมัติตลอด 24 ชม." },
];

const threatGaps = [
  "ชายแดนยาว + ภูมิประเทศซับซ้อน",
  "ภัยคุกคามรูปแบบใหม่: โดรน, ลักลอบ, ข้ามแดน, IUU, ภัยพิบัติ",
  "คนไม่พอ / งบไม่พอ",
  "ตอบสนองไม่ทัน",
];

const solutionComponents = [
  { title: "VTOL UAV ระยะไกล", desc: "50–150 กม.", icon: MapPin },
  { title: "Dock Station อัตโนมัติ", desc: "Takeoff / Landing / Charging", icon: Building },
  { title: "เซ็นเซอร์บูรณาการ", desc: "EO/IR, Thermal, LiDAR, AIS, Radar", icon: Eye },
  { title: "C2 + GIS + AI Hub", desc: "Private / On-Prem Analytics", icon: Brain },
];

const keyCapabilities = [
  "บินอัตโนมัติ 24/7",
  "แจ้งเตือนแบบ Real-time",
  "ปฏิบัติการพื้นที่อันตราย",
  "ลดกำลังพล 60–80%",
];

const useCases = [
  {
    id: "border",
    icon: Shield,
    title: "ความมั่นคงชายแดน",
    items: ["ลาดตระเวนแนวชายแดน", "ตรวจจับการลักลอบ/ข้ามแดน", "ทำงานร่วมเรดาร์ภาคพื้น"],
  },
  {
    id: "maritime",
    icon: Anchor,
    title: "ความมั่นคงทางทะเล",
    items: ["คุ้มครองน่านน้ำ/ทรัพยากร", "ปราบ IUU/ลักลอบขนของ", "สนับสนุนกองทัพเรือ/ตำรวจน้ำ"],
  },
  {
    id: "infrastructure",
    icon: Building,
    title: "โครงสร้างพื้นฐานสำคัญ",
    items: ["โรงไฟฟ้า / เขื่อน / ท่อก๊าซ", "สนามบิน / ท่าเรือ", "ตรวจจับการบุกรุกก่อนเกิดเหตุ"],
  },
  {
    id: "disaster",
    icon: AlertTriangle,
    title: "ภัยพิบัติและความปลอดภัยสาธารณะ",
    items: ["น้ำท่วม / ไฟป่า / แผ่นดินไหว", "ค้นหา-กู้ภัยไม่เสี่ยงชีวิต", "สนับสนุนเหตุฉุกเฉิน"],
  },
];

const strategicValues = [
  { icon: Flag, title: "ลดพึ่งพาต่างชาติ 100%", desc: "ไม่พึ่งพาเทคโนโลยีต่างประเทศ" },
  { icon: Shield, title: "Sovereign Capability", desc: "ควบคุมระดับชาติได้เต็มที่" },
  { icon: Zap, title: "ตัดสินใจเร็วขึ้น", desc: "ข้อมูล Real-time Intelligence" },
  { icon: Globe, title: "Regional Security Hub", desc: "ยกระดับไทยเป็นศูนย์กลางภูมิภาค" },
];

const costEffectiveness = [
  { metric: "10–15x", desc: "OPEX ต่ำกว่าเฮลิคอปเตอร์" },
  { metric: "80%", desc: "ลดกำลังพลได้" },
  { metric: "หลายหน่วยงาน", desc: "ใช้โครงสร้างพื้นฐานร่วมกัน" },
];

const localContent = [
  "ประกอบ / ซ่อม / MA ในประเทศ",
  "Data อยู่ในไทย (Data Sovereignty)",
  "ถ่ายโอนองค์ความรู้",
  "สร้างงานวิศวกร / นักบิน / Analyst ไทย",
];

const roadmapPhases = [
  {
    phase: "A",
    title: "Pilot Project",
    duration: "6 เดือน",
    items: ["1–2 จังหวัด / 1 ภารกิจ", "พิสูจน์ขีดความสามารถ"],
  },
  {
    phase: "B",
    title: "ขยายภูมิภาค",
    duration: "12–24 เดือน",
    items: ["เชื่อมหลายหน่วยงาน", "ตั้งศูนย์ควบคุมภูมิภาค"],
  },
  {
    phase: "C",
    title: "โครงข่ายระดับชาติ",
    duration: "3–5 ปี",
    items: ["โครงข่ายทั่วประเทศ", "บูรณาการทุกมิติความมั่นคง"],
  },
];

const Altura = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                แผนการนำเสนอเชิงยุทธศาสตร์ระดับชาติ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Altura VTOL Dock
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                โครงสร้างพื้นฐานความมั่นคงทางอากาศอัตโนมัติระดับชาติ
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                สำหรับกองทัพ / ตำรวจ / กระทรวง / สำนักงบประมาณ / สมช. / ผู้กำหนดนโยบาย
                <br />
                <span className="text-foreground font-medium">ปกป้องอธิปไตย ชีวิต และทรัพยากรของประเทศไทย</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="btn-navy">
                    <Calendar size={20} />
                    นัดรับฟังบรรยายสรุป
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn-hero-secondary">
                    <Target size={20} />
                    นัด Site Survey
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive Narrative - 4 Pillars */}
        <section className="py-16 bg-card border-y border-border">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                ภาพรวมแนวคิด (Executive Narrative)
              </h2>
              <p className="text-muted-foreground">
                Altura VTOL Dock ทำหน้าที่เป็นโครงสร้างพื้นฐานความมั่นคงทางอากาศของไทย
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {executiveNarrative.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                  <p className="text-sm text-primary font-medium">{item.subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Strategic Diagram */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <StrategicDiagram />
          </div>
        </section>

        {/* Phase 1: Threat → Gap → Opportunity */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
                  เฟส 1: โจทย์ → ช่องว่าง → โอกาส
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  บริบทความมั่นคงของไทยวันนี้
                </h2>
                <div className="space-y-4 mb-8">
                  {threatGaps.map((gap, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                    >
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{gap}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <p className="text-lg font-semibold text-destructive mb-2">🔴 ปัญหาหลัก (Gap):</p>
                  <p className="text-foreground">
                    "มนุษย์เฝ้าไม่ได้ 24/7 แต่ภัยมาได้ตลอดเวลา"
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl card-navy"
              >
                <h3 className="text-2xl font-bold mb-6">โอกาส (Opportunity)</h3>
                <p className="text-white/80 mb-6">
                  ระบบอัตโนมัติสำหรับการตรวจตราต่อเนื่อง — ความมั่นคงทางอากาศ 24/7 โดยไม่เสี่ยงกำลังพล
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>ไม่มีจุดบอด</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>ลดเวลาตอบสนองเหลือนาที</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>ขยายพื้นที่ครอบคลุมทั่วประเทศ</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Phase 2: Solution Architecture */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                เฟส 2: สถาปัตยกรรมโซลูชัน
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                โครงสร้างพื้นฐานความมั่นคงทางอากาศอัตโนมัติ
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Altura VTOL Dock = ระบบเฝ้าระวังและตอบสนองอัตโนมัติครบวงจร
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {solutionComponents.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-secondary border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">ขีดความสามารถหลัก</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyCapabilities.map((cap, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-background"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Phase 3: National Security Use Cases */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                เฟส 3: Use Cases ความมั่นคง
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                การประยุกต์ใช้ด้านความมั่นคงแห่งชาติ
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="use-case-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{useCase.title}</h3>
                      <ul className="space-y-2">
                        {useCase.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 4: National Deployment Model - Animated Diagram */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                เฟส 4: โมเดลการติดตั้ง
              </span>
            </motion.div>
            <DeploymentDiagram />
          </div>
        </section>

        {/* Phase 5: Strategic Value */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                เฟส 5: คุณค่าเชิงยุทธศาสตร์
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🇹🇭 คุณค่าต่อประเทศไทย
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* National Results */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl card-navy"
              >
                <h3 className="text-xl font-bold mb-6">ผลลัพธ์เชิงชาติ</h3>
                <div className="grid grid-cols-2 gap-4">
                  {strategicValues.map((value, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-xl bg-white/10"
                    >
                      <value.icon className="w-6 h-6 text-primary mb-2" />
                      <h4 className="font-semibold text-white text-sm">{value.title}</h4>
                      <p className="text-xs text-white/70">{value.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Cost Effectiveness */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-background border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  ความคุ้มค่า
                </h3>
                <div className="space-y-4">
                  {costEffectiveness.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary"
                    >
                      <span className="text-3xl font-bold text-primary">{item.metric}</span>
                      <span className="text-foreground">{item.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Phase 6: Local Content & Security Policy */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                เฟส 6: Local Content
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Altura × Thailand
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {localContent.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Phase 7: Implementation Roadmap */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                เฟส 7: Roadmap
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                แผนการดำเนินงาน
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {roadmapPhases.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span 
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {phase.phase}
                    </motion.span>
                    <div>
                      <h3 className="font-bold text-foreground">{phase.title}</h3>
                      <p className="text-sm text-primary font-medium">{phase.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Message & CTA */}
        <section className="section-padding bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div 
                className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-lg mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                  "Altura VTOL Dock ไม่ได้มาแทนคน
                  <br />
                  <span className="text-primary">แต่ทำให้คนไทยปลอดภัยขึ้น โดยไม่ต้องเอาชีวิตไปเสี่ยง"</span>
                </p>
              </motion.div>
              <p className="text-lg text-muted-foreground mb-8">
                พร้อมเปลี่ยนแปลงโครงสร้างพื้นฐานความมั่นคงของประเทศไทย?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="btn-navy">
                    <Calendar size={20} />
                    นัดรับฟังบรรยายสรุป
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn-hero-secondary">
                    <Target size={20} />
                    นัดหารือ Pilot Project
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

export default Altura;