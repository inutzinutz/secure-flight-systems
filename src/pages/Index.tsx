import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, Clock, Users, Eye, TrendingUp,
  MessageSquare, PenTool, PlayCircle, FileText, Repeat,
  Building2, Siren, HardHat, TrafficCone, Landmark, MapPin,
  ArrowRight, Calendar, Download, CheckCircle, Cpu, Radar
} from "lucide-react";
import { PresentationLayout } from "@/components/presentation/PresentationLayout";
import { PresentationSlide } from "@/components/presentation/PresentationSlide";
import heroImage from "@/assets/hero-drone-city.jpg";
import architectureImage from "@/assets/integrated-architecture.jpg";
import alturaImage from "@/assets/altura-deployment-grid.jpg";

// Pain Points Data
const painPoints = [
  { icon: AlertTriangle, title: "เหตุเกิดตลอด 24 ชั่วโมง", description: "อุบัติเหตุ ไฟไหม้ น้ำท่วม ลักลอบข้ามแดน เกิดได้ทุกเวลา" },
  { icon: Users, title: "กำลังคนไม่พอ", description: "พื้นที่กว้าง ต้องตรวจถี่ แต่ทีมมีจำกัด" },
  { icon: Clock, title: "ตอบสนองช้า", description: "กว่าจะรู้เหตุ กว่าจะถึงที่ เสียเวลาทอง" },
  { icon: Eye, title: "ขาดภาพรวม", description: "ข้อมูลกระจัดกระจาย ไม่เห็นสถานการณ์จริง" },
];

// Pillars Data
const pillars = [
  {
    id: "enterprise",
    icon: Users,
    title: "13 STORE Enterprise",
    subtitle: "System Integrator + Solution Owner + Operation Partner",
    description: "ทีมผู้เชี่ยวชาญ + กระบวนการขายแบบ Enterprise + บริการหลังการขายครบวงจร",
    features: ["ทีมวิศวกร + นักบิน Certified", "กระบวนการ 6 ขั้นตอน", "MA/Support ตลอดอายุใช้งาน"],
    href: "/enterprise",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "platform",
    icon: Cpu,
    title: "LM Platform",
    subtitle: "Command & Intelligence Platform",
    description: "แพลตฟอร์มศูนย์บัญชาการ + AI + GIS สำหรับภาครัฐ/องค์กรใหญ่",
    features: ["On-Prem / Private Cloud", "Data Sovereignty (อยู่ไทย)", "Anti-Vendor Lock"],
    href: "/platform",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    id: "altura",
    icon: Radar,
    title: "Altura VTOL Dock",
    subtitle: "National Aerial Security Infrastructure",
    description: "โครงสร้างพื้นฐานความมั่นคงทางอากาศ 24/7 ลดกำลังพล เพิ่มพื้นที่ครอบคลุม",
    features: ["Autonomous 24/7", "Reduce Manpower 80%", "Grid Deployment Model"],
    href: "/altura",
    gradient: "from-amber-500 to-amber-600",
  },
];

// Delivery Steps Data
const deliverySteps = [
  { number: "01", icon: MessageSquare, title: "Pain Discovery", description: "รับฟังปัญหา ทำความเข้าใจบริบท" },
  { number: "02", icon: Users, title: "Workshop", description: "ประชุมเชิงปฏิบัติการกับทีม" },
  { number: "03", icon: PenTool, title: "Design + Budget", description: "ออกแบบระบบ + ประมาณการงบ" },
  { number: "04", icon: PlayCircle, title: "Pilot / Demo", description: "ทดสอบภาคสนามจริง" },
  { number: "05", icon: FileText, title: "Proposal", description: "จัดทำข้อเสนอโครงการ TOR-ready" },
  { number: "06", icon: Repeat, title: "MA / Long-term", description: "ดูแลระยะยาว + ขยายระบบ" },
];

// Use Cases Data
const useCases = [
  { icon: Siren, title: "Emergency Response", description: "ดับเพลิง / กู้ภัย / USAR" },
  { icon: Building2, title: "Smart City", description: "เฝ้าระวังเมือง / Traffic / Events" },
  { icon: HardHat, title: "Construction", description: "Survey / Progress / Inspection" },
  { icon: TrafficCone, title: "Highway Police", description: "ตรวจจราจร / อุบัติเหตุ / ค้นหา" },
  { icon: Landmark, title: "Local Government", description: "สำรวจ / แผนที่ / ป้องกันภัย" },
  { icon: MapPin, title: "Border & Maritime", description: "ชายแดน / ทะเล / Security" },
];

// Trust Points
const trustPoints = [
  "ทำได้จริงในไทย",
  "ทีมอยู่หน้างาน",
  "รองรับงานรัฐ TOR",
  "ไม่ผูกยี่ห้อเดียว",
];

// Slide 1: Hero
function HeroSlide() {
  return (
    <PresentationSlide variant="hero" centered={false}>
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="Enterprise Drone Solutions" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      <div className="min-h-screen flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Enterprise Drone Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            <span className="text-gradient-brand">DJI | 13 STORE</span>
            <br />
            <span className="text-foreground/90">Enterprise Team + Command Platform + </span>
            <br />
            <span className="text-foreground/90">National VTOL Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            จากภารกิจภาคสนาม สู่ข้อมูลเชิงตัดสินใจ
            <br />
            <span className="text-foreground/80">From Flight to Insight</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm mb-10 max-w-2xl"
          >
            <p className="text-foreground/90 italic">
              "13 STORE ไม่ได้ขายโดรน แต่ดูแลภารกิจสำคัญขององค์กรให้ปลอดภัย มีข้อมูล และตัดสินใจได้เร็วขึ้น"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <button className="btn-hero-primary">
                <Calendar size={20} />
                นัด Workshop / Site Survey
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-hero-secondary">
                <FileText size={20} />
                ขอ Demo / ใบเสนอราคา
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {point}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </PresentationSlide>
  );
}

// Slide 2: Pain Points
function PainSlide() {
  return (
    <PresentationSlide variant="default">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4"
        >
          ทำไมต้องตอนนี้?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          เมืองและพื้นที่ซับซ้อนขึ้นทุกวัน
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          ต้องตรวจตราถี่ขึ้น ตอบสนองเร็วขึ้น แต่กำลังคนมีเท่าเดิม
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {painPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
              <point.icon className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
            <p className="text-sm text-muted-foreground">{point.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-foreground font-medium">ต้องมีระบบ 24/7 ที่ทำงานแทนคนได้</span>
        </div>
      </motion.div>
    </PresentationSlide>
  );
}

// Slide 3: Architecture
function ArchitectureSlide() {
  return (
    <PresentationSlide variant="accent">
      <div className="text-center mb-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Integrated Architecture
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          หนึ่งระบบ สามเสาหลัก
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          ไม่ใช่แค่ขายโดรน แต่เป็นระบบครบวงจรที่ทำให้ภารกิจสำเร็จ
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative rounded-2xl overflow-hidden border border-border/50 max-w-4xl mx-auto"
      >
        <img
          src={architectureImage}
          alt="Integrated System Architecture"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="px-4 py-2 rounded-lg bg-secondary/80 text-foreground font-medium">
              Enterprise Delivery
            </div>
            <div className="px-4 py-2 rounded-lg bg-secondary/80 text-foreground font-medium">
              LM Platform (C2 + AI + GIS)
            </div>
            <div className="px-4 py-2 rounded-lg bg-secondary/80 text-foreground font-medium">
              Altura/Drone/Dock
            </div>
          </div>
        </div>
      </motion.div>
    </PresentationSlide>
  );
}

// Slide 4: 3 Pillars
function PillarsSlide() {
  return (
    <PresentationSlide variant="default">
      <div className="text-center mb-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          3 Pillars
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          สามเสาหลัก = ระบบเดียวกัน
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          แต่ละเสาเสริมกัน ทำให้ภารกิจสำเร็จได้จริง
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -5 }}
          >
            <Link to={pillar.href} className="block h-full">
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{pillar.title}</h3>
                <p className="text-primary font-medium text-sm mb-3">{pillar.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4">{pillar.description}</p>
                <ul className="space-y-2 mb-4">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>ดูรายละเอียด</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PresentationSlide>
  );
}

// Slide 5: Delivery Process
function ProcessSlide() {
  return (
    <PresentationSlide variant="accent">
      <div className="text-center mb-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          How We Deliver
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          6-Step Delivery Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          กระบวนการส่งมอบแบบ Enterprise ที่พิสูจน์แล้วกับลูกค้าองค์กรและภาครัฐ
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {deliverySteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 rounded-2xl bg-card border border-border"
          >
            <motion.div
              className="w-12 h-12 mx-auto rounded-full bg-card border-2 border-primary flex items-center justify-center mb-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              <step.icon className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-xs text-primary font-mono mb-1 block">{step.number}</span>
            <h4 className="font-semibold text-foreground text-sm mb-1">{step.title}</h4>
            <p className="text-xs text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </PresentationSlide>
  );
}

// Slide 6: Use Cases
function UseCasesSlide() {
  return (
    <PresentationSlide variant="default">
      <div className="text-center mb-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Use Cases
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          เลือกตามหน่วยงาน / อุตสาหกรรม
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Solutions สำหรับทุกภารกิจ ปรับแต่งได้ตามความต้องการจริง
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Link to="/solutions" className="block">
              <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{useCase.title}</h3>
                <p className="text-xs text-muted-foreground">{useCase.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-center"
      >
        <Link to="/solutions" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
          ดู Use Cases ทั้งหมด
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </PresentationSlide>
  );
}

// Slide 7: CTA
function CTASlide() {
  return (
    <PresentationSlide variant="dark" centered={false}>
      <div className="absolute inset-0 -z-10">
        <img src={alturaImage} alt="Altura VTOL Deployment Grid" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="min-h-screen flex items-center">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            พร้อมเริ่มต้น?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            นัดคุยกับทีมผู้เชี่ยวชาญ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            เราพร้อมรับฟังโจทย์และออกแบบ Solution ที่เหมาะกับคุณ
            ไม่ว่าจะเป็น Workshop, Site Survey, Demo หรือขอใบเสนอราคา
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-3 mb-8"
          >
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-foreground">{point}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <button className="btn-hero-primary">
                <Calendar size={20} />
                นัด Workshop / Site Survey
              </button>
            </Link>
            <Link to="/resources">
              <button className="btn-hero-secondary">
                <Download size={20} />
                ดาวน์โหลด Company Profile
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PresentationSlide>
  );
}

const Index = () => {
  const sections = [
    { id: "hero", content: <HeroSlide /> },
    { id: "pain", content: <PainSlide /> },
    { id: "architecture", content: <ArchitectureSlide /> },
    { id: "pillars", content: <PillarsSlide /> },
    { id: "process", content: <ProcessSlide /> },
    { id: "use-cases", content: <UseCasesSlide /> },
    { id: "cta", content: <CTASlide /> },
  ];

  return <PresentationLayout sections={sections} />;
};

export default Index;
