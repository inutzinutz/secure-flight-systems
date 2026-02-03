import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PresentationLayout } from "@/components/presentation/PresentationLayout";
import { PresentationSlide, SlideTitle, SlideGrid, SlideCard } from "@/components/presentation/PresentationSlide";
import { motion } from "framer-motion";
import { 
  Cloud, Database, Shield, GitBranch, ArrowRight, CheckCircle, 
  Target, DollarSign, Users, Megaphone, AlertTriangle, Calendar,
  Brain, Building, Eye, Monitor, Smartphone, Radio, Radar, MapPin, Cog
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

const Platform = () => {
  const sections = [
    // Slide 1: Hero
    {
      id: "hero",
      content: (
        <PresentationSlide variant="hero">
          <SlideTitle
            badge="แผนงานแพลตฟอร์มโดรน LM — เชิงยุทธศาสตร์ + ใช้งานจริง + ขายได้"
            title="LM Platform"
            subtitle="Command & Intelligence Platform"
            description="ระบบปฏิบัติการโดรนอัจฉริยะของรัฐและองค์กรขนาดใหญ่"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground mt-6 max-w-3xl mx-auto"
          >
            ไม่ใช่แอปดูภาพโดรน, ซอฟต์แวร์เสริมกล้อง — 
            <span className="text-foreground font-medium"> แต่คือ "Command & Intelligence Platform" สำหรับความมั่นคง / สาธารณภัย / โครงสร้างพื้นฐาน</span>
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
                ขอ Demo Platform
              </button>
            </Link>
          </motion.div>
        </PresentationSlide>
      )
    },

    // Slide 2: Positioning
    {
      id: "positioning",
      content: (
        <PresentationSlide>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              1) Positioning ระดับประเทศ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">นิยามให้ชัดก่อน</h2>
          </div>
          <SlideGrid cols={4}>
            {keyFeatures.map((item, i) => (
              <SlideCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                index={i}
              />
            ))}
          </SlideGrid>
        </PresentationSlide>
      )
    },

    // Slide 3: Core System Engine
    {
      id: "core-engine",
      content: (
        <PresentationSlide centered={false}>
          <PlatformStrategicDiagram />
        </PresentationSlide>
      )
    },

    // Slide 4: AI Functions
    {
      id: "ai-functions",
      content: (
        <PresentationSlide centered={false}>
          <AIFunctionsDiagram />
        </PresentationSlide>
      )
    },

    // Slide 5: Use Cases
    {
      id: "use-cases",
      content: (
        <PresentationSlide centered={false}>
          <UseCasesDiagram />
        </PresentationSlide>
      )
    },

    // Slide 6: Roadmap
    {
      id: "roadmap",
      content: (
        <PresentationSlide centered={false}>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              2) เป้าหมายเชิงกลยุทธ์ + 3) Roadmap
            </span>
          </div>
          <PlatformRoadmapDiagram />
        </PresentationSlide>
      )
    },

    // Slide 7: Target Customers & Revenue
    {
      id: "business",
      content: (
        <PresentationSlide>
          <div className="grid lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {/* Target Customers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-bold text-foreground">{targetCustomers.tier1.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{targetCustomers.tier1.desc}</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-bold text-foreground">{targetCustomers.tier2.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{targetCustomers.tier2.desc}</p>
                </div>
              </div>
            </motion.div>

            {/* Revenue Model */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-white">{model}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-primary/20 border border-primary/30">
                <p className="text-center font-bold text-primary">
                  ต้องมี recurring income
                </p>
              </div>
            </motion.div>
          </div>
        </PresentationSlide>
      )
    },

    // Slide 8: Key Message
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
              <Megaphone className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">7) ประโยค Key Message</span>
            </motion.div>
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              "LM ไม่ได้ขายโดรน
              <br />
              <span className="text-primary">แต่ขายระบบตัดสินใจ</span>
              <br />
              ที่ทำให้รัฐไทยตอบสนองภัยได้เร็วกว่าเดิม"
            </motion.blockquote>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <Link to="/contact">
                <button className="btn-navy">
                  <Calendar size={20} />
                  นัดพูดคุยกับทีม
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

export default Platform;
