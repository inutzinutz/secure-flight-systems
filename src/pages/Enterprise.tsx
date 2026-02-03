import { Navbar } from "@/components/layout/Navbar";
import { PresentationLayout } from "@/components/presentation/PresentationLayout";
import { PresentationSlide, SlideTitle, SlideGrid, SlideCard } from "@/components/presentation/PresentationSlide";
import { motion } from "framer-motion";
import { 
  Users, Cog, Briefcase, HeadphonesIcon, ArrowRight, CheckCircle,
  Building, Target, DollarSign, Calendar, Shield, Factory, Building2,
  AlertTriangle, Cpu, ChevronRight, Zap, Truck, Anchor, Landmark
} from "lucide-react";
import { Link } from "react-router-dom";
import { EnterpriseStrategicDiagram } from "@/components/enterprise/EnterpriseStrategicDiagram";

const objectives = [
  { icon: Building, title: "ด้านตลาด", desc: "สร้างรายได้จาก Project + MA + Service ลูกค้า 1 ราย ใช้ยาวหลายปี", color: "blue" as const },
  { icon: Target, title: "ด้านแบรนด์", desc: "ภาพจำ: \"ถ้าเป็นงานโดรนระดับองค์กร → ต้องคุย 13 STORE\"", color: "emerald" as const },
  { icon: Users, title: "ด้านองค์กร", desc: "ทีม Enterprise แยกจาก Consumer ชัดเจน มี Presales / Solution / PM / Operation", color: "violet" as const },
];

const solutionStack = [
  { layer: "4.1", title: "Hardware Layer", items: ["Drone (Multi-brand)", "VTOL / Dock / Autonomous", "Payload (EO/IR/LiDAR)"] },
  { layer: "4.2", title: "Platform Layer", items: ["UAV AI Operation Platform", "GIS / Dashboard", "On-Prem / Private Cloud"] },
  { layer: "4.3", title: "Service Layer", items: ["Survey / Inspection", "Monitoring 24/7", "Data Analysis"] },
  { layer: "4.4", title: "Support Layer", items: ["MA รายปี", "Training / SOP", "On-call Support"] },
];

const useCases = [
  { id: "industrial", icon: Factory, title: "Industrial Monitoring", desc: "ตรวจโรงงาน / โครงสร้าง", color: "blue" as const },
  { id: "infrastructure", icon: Building2, title: "Infrastructure Inspection", desc: "เขื่อน / สะพาน / ทางด่วน", color: "emerald" as const },
  { id: "security", icon: Shield, title: "Security & Surveillance", desc: "นิคม / พื้นที่ห้าม", color: "violet" as const },
  { id: "disaster", icon: AlertTriangle, title: "Disaster & Emergency", desc: "น้ำท่วม / ไฟไหม้", color: "primary" as const },
];

const teamStructure = [
  { role: "Enterprise Sales", desc: "คุย C-Level", icon: Users },
  { role: "Solution Engineer", desc: "ออกแบบระบบ", icon: Cog },
  { role: "Project Manager", desc: "บริหารโครงการ", icon: Briefcase },
  { role: "Operation / Pilot", desc: "ปฏิบัติการ", icon: Cpu },
  { role: "Support & MA", desc: "ดูแลหลังขาย", icon: HeadphonesIcon },
];

const salesProcess = [
  { step: "1", title: "เข้าใจ Pain ลูกค้า" },
  { step: "2", title: "Site Survey" },
  { step: "3", title: "Solution Design" },
  { step: "4", title: "Pilot / Demo" },
  { step: "5", title: "Proposal" },
  { step: "6", title: "MA Contract" },
];

const competitiveAdvantages = [
  "ทำได้จริงในไทย",
  "ทีมอยู่หน้างาน",
  "ไม่ทิ้งลูกค้า",
  "รองรับงานรัฐ / TOR",
  "ไม่ผูกยี่ห้อเดียว",
];

const kpis = [
  { metric: "≥ 5-10", label: "ลูกค้า Enterprise Active", unit: "ราย" },
  { metric: "≥ 1-3", label: "MA Contract", unit: "ปี" },
  { metric: "≥ 2", label: "Project Value ต่อดีล", unit: "หลักล้าน" },
  { metric: "≥ 3", label: "Case Study", unit: "เคส" },
];

const Enterprise = () => {
  const sections = [
    // Slide 1: Hero
    {
      id: "hero",
      content: (
        <PresentationSlide variant="hero">
          <SlideTitle
            badge="เสาที่ 1 — 13 STORE Enterprise"
            title="Enterprise Business Plan"
            subtitle="System Integrator + Solution Owner + Operation Partner"
            description="ทีม + กระบวนการ + บริการที่ทำเงิน (Project/MA/DaaS)"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-primary font-medium mt-4"
          >
            "เงินจริง งานจริง ลูกค้าองค์กรจริง" — ไม่ลอย ไม่กว้างเกิน
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Link to="/contact">
              <button className="btn-navy">
                <Calendar size={20} />
                นัดคุยกับทีม Enterprise
              </button>
            </Link>
          </motion.div>
        </PresentationSlide>
      )
    },

    // Slide 2: Definition
    {
      id: "definition",
      content: (
        <PresentationSlide>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">นิยามธุรกิจ Enterprise ของ 13 STORE</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-destructive font-bold">✕</span>
                  </div>
                  <span className="text-xl font-bold text-destructive">ไม่ใช่</span>
                </div>
                <p className="text-foreground">ร้านขายโดรน, ตัวแทนจำหน่ายอุปกรณ์</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-2xl bg-primary/10 border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl font-bold text-primary">แต่คือ</span>
                </div>
                <p className="text-foreground font-medium">
                  System Integrator + Solution Owner + Operation Partner
                </p>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center"
            >
              <p className="text-lg">
                <span className="font-bold">13 STORE Enterprise =</span> ผู้ให้บริการโซลูชัน Drone + AI + GIS + Operation แบบครบวงจร สำหรับองค์กรขนาดกลาง-ใหญ่ และภาครัฐ
              </p>
            </motion.div>
          </div>
        </PresentationSlide>
      )
    },

    // Slide 3: Objectives
    {
      id: "objectives",
      content: (
        <PresentationSlide>
          <div className="text-center mb-10">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">เป้าหมายเชิงกลยุทธ์</h2>
            </div>
          </div>
          <SlideGrid cols={3}>
            {objectives.map((obj, i) => (
              <SlideCard
                key={obj.title}
                icon={obj.icon}
                title={obj.title}
                description={obj.desc}
                index={i}
                color={obj.color}
              />
            ))}
          </SlideGrid>
        </PresentationSlide>
      )
    },

    // Slide 4: Solution Stack
    {
      id: "solution-stack",
      content: (
        <PresentationSlide>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Enterprise Solution Stack</h2>
            </div>
            <div className="space-y-4">
              {solutionStack.map((layer, i) => (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ x: 10 }}
                  className="flex items-stretch gap-4"
                >
                  <div className={`${i === 0 ? 'bg-blue-700' : i === 1 ? 'bg-blue-600' : i === 2 ? 'bg-blue-500' : 'bg-blue-400'} text-white px-6 py-4 rounded-l-xl flex items-center justify-center min-w-[140px]`}>
                    <span className="font-bold text-sm">{layer.layer}</span>
                    <span className="ml-2 text-xs opacity-80">{layer.title.split(' ')[0]}</span>
                  </div>
                  <div className="flex-1 p-4 rounded-r-xl bg-card border border-border">
                    <p className="font-medium text-foreground mb-2">{layer.title}</p>
                    <div className="flex flex-wrap gap-3">
                      {layer.items.map((item, j) => (
                        <span key={j} className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </PresentationSlide>
      )
    },

    // Slide 5: Use Cases
    {
      id: "use-cases",
      content: (
        <PresentationSlide>
          <div className="text-center mb-10">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Enterprise Use Case หลัก</h2>
            </div>
            <p className="text-muted-foreground">ต้องขายให้เป็นแพ็ก</p>
          </div>
          <SlideGrid cols={4}>
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <motion.div 
                  className={`w-14 h-14 mx-auto rounded-xl bg-${uc.color}/10 flex items-center justify-center mb-4`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  <uc.icon className={`w-7 h-7 text-${uc.color}`} />
                </motion.div>
                <h3 className="font-bold text-foreground mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </motion.div>
            ))}
          </SlideGrid>
        </PresentationSlide>
      )
    },

    // Slide 6: Team Structure
    {
      id: "team",
      content: (
        <PresentationSlide>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">5</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">โครงสร้างทีม Enterprise</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {teamStructure.map((member, i) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-5 rounded-xl bg-card border border-border text-center"
                >
                  <member.icon className="w-8 h-8 mx-auto text-primary mb-3" />
                  <p className="font-medium text-foreground text-sm">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </PresentationSlide>
      )
    },

    // Slide 7: Sales Process
    {
      id: "sales-process",
      content: (
        <PresentationSlide>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">6</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Enterprise Sales Process</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {salesProcess.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-card border border-border text-center min-w-[120px]"
                  >
                    <div className="w-8 h-8 mx-auto rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mb-2">
                      {step.step}
                    </div>
                    <p className="font-medium text-foreground text-sm">{step.title}</p>
                  </motion.div>
                  {i < salesProcess.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-primary mx-2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </PresentationSlide>
      )
    },

    // Slide 8: Advantages & KPIs
    {
      id: "advantages-kpis",
      content: (
        <PresentationSlide>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Competitive Advantages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">7</span>
                <h3 className="text-xl font-bold text-foreground">จุดแข็งที่ต้องพูดทุกครั้ง</h3>
              </div>
              <div className="space-y-3">
                {competitiveAdvantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{adv}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">8</span>
                <h3 className="text-xl font-bold text-foreground">KPI ระดับ Enterprise (ปีถัดไป)</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {kpis.map((kpi, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border text-center"
                  >
                    <motion.p 
                      className="text-3xl font-bold text-primary"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {kpi.metric}
                    </motion.p>
                    <p className="text-sm text-muted-foreground">{kpi.label}</p>
                    <p className="text-xs text-primary font-medium">{kpi.unit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </PresentationSlide>
      )
    },

    // Slide 10: Key Message
    {
      id: "key-message",
      content: (
        <PresentationSlide variant="accent">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 mb-8"
            >
              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">11</span>
              <span className="text-sm font-medium text-primary">Key Message สำหรับผู้บริหารลูกค้า</span>
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight"
            >
              <span className="text-5xl text-primary">"</span>
              <br />
              13 STORE ไม่ได้ขายโดรน
              <br />
              <span className="text-primary">แต่ดูแลภารกิจสำคัญขององค์กรคุณให้ปลอดภัย</span>
              <br />
              มีข้อมูล และตัดสินใจได้เร็วขึ้น
              <br />
              <span className="text-5xl text-primary">"</span>
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact">
                <button className="btn-navy">
                  <Calendar size={20} />
                  นัดคุยกับทีม Enterprise
                </button>
              </Link>
              <Link to="/platform">
                <button className="btn-hero-secondary">
                  ดู Platform
                  <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>
          </div>
        </PresentationSlide>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <PresentationLayout sections={sections} />
      </main>
    </div>
  );
};

export default Enterprise;
