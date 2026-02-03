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
import { AIFunctionsDiagram } from "@/components/platform/AIFunctionsDiagram";
import { UseCasesDiagram } from "@/components/platform/UseCasesDiagram";

const keyFeatures = [
  { icon: Cloud, title: "On-Prem / Private Cloud", desc: "ติดตั้งในศูนย์ข้อมูลของคุณเอง" },
  { icon: Database, title: "Data Sovereignty", desc: "ข้อมูลอยู่ในประเทศไทย 100%" },
  { icon: Shield, title: "Security First", desc: "ระดับความปลอดภัยสำหรับงานรัฐ" },
  { icon: GitBranch, title: "Anti-Vendor Lock", desc: "ไม่ผูกขาดกับเจ้าใดเจ้าหนึ่ง" },
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

    // Slide 6: Key Message
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
              <span className="text-sm font-medium text-primary">Key Message</span>
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
