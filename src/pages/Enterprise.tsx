import { motion } from "framer-motion";
import { 
  Users, Cog, Briefcase, HeadphonesIcon, ArrowRight, CheckCircle,
  Building, Target, DollarSign, Calendar, Shield, Factory, Building2,
  Cpu, ChevronRight, MapPin, Layers, Brain, Wrench, GraduationCap,
  FileText, Clock, TrendingUp, Award, MessageSquare, Send, Camera
} from "lucide-react";
import { PresentationLayout } from "@/components/presentation/PresentationLayout";
import { PresentationSlide } from "@/components/presentation/PresentationSlide";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import team and case study images
import enterpriseTeam1 from "@/assets/enterprise-team-1.jpg";
import enterpriseTeam2 from "@/assets/enterprise-team-2.jpg";
import enterpriseCase1 from "@/assets/enterprise-case-1.jpg";
import enterpriseCase2 from "@/assets/enterprise-case-2.jpg";

// Section B: Definition cards
const definitionCards = [
  { 
    icon: Cog, 
    title: "System Integrator", 
    desc: "ออกแบบระบบให้ครบตั้งแต่โดรน–ข้อมูล–การใช้งานจริง",
    color: "from-blue-500 to-blue-600"
  },
  { 
    icon: Target, 
    title: "Solution Owner", 
    desc: "รับผิดชอบผลลัพธ์และการส่งมอบแบบเป็นระบบ",
    color: "from-emerald-500 to-emerald-600"
  },
  { 
    icon: Users, 
    title: "Operation Partner", 
    desc: "มีทีมปฏิบัติการ/MA ระยะยาว ไม่ทิ้งลูกค้า",
    color: "from-violet-500 to-violet-600"
  },
];

// Section C: Capability Stack
const capabilityStack = [
  { 
    layer: "01", 
    title: "Hardware Foundation", 
    items: ["Drone DJI", "UAV Helicopter", "VTOL", "LiDAR & GNSS"],
    icon: Layers,
    color: "bg-blue-600"
  },
  { 
    layer: "02", 
    title: "Core Software", 
    items: ["DJI Terra", "FlightHub 2", "SuperMap GIS Stack", "Drone Simulator"],
    icon: Cpu,
    color: "bg-blue-500"
  },
  { 
    layer: "03", 
    title: "AI Platform & GIS", 
    items: ["UAV AI Operations Platform", "GIS Solutions Platform", "Real-time Analytics"],
    icon: Brain,
    color: "bg-primary"
  },
  { 
    layer: "04", 
    title: "Service & Support", 
    items: ["Demo/POC/Consulting", "Training Center", "After-sales MA"],
    icon: Wrench,
    color: "bg-amber-500"
  },
];

// Section D: Delivery Process
const deliverySteps = [
  { step: "1", title: "เข้าใจ Pain ลูกค้า", desc: "ไม่ขายของก่อน ฟังก่อน" },
  { step: "2", title: "Site Survey / Workshop", desc: "ลงพื้นที่ ดูของจริง" },
  { step: "3", title: "Solution Design + Budget", desc: "ออกแบบระบบ + งบคร่าวๆ" },
  { step: "4", title: "Pilot / Demo", desc: "ทดสอบจริง ดูผลจริง" },
  { step: "5", title: "Project Proposal", desc: "เสนอโครงการอย่างเป็นทางการ" },
  { step: "6", title: "MA + Long-term", desc: "สัญญาดูแลระยะยาว" },
];

// Section E: Team Structure
const teamStructure = [
  { role: "Enterprise Sales", desc: "คุย C-Level", icon: Users },
  { role: "Solution Engineer", desc: "ออกแบบระบบ", icon: Cog },
  { role: "Project Manager", desc: "บริหารโครงการ", icon: Briefcase },
  { role: "Operation / Pilot", desc: "ปฏิบัติการ", icon: Cpu },
  { role: "Support & MA", desc: "ดูแลหลังขาย", icon: HeadphonesIcon },
];

// Section F: Trust points
const trustPoints = [
  { icon: MapPin, text: "ทำได้จริงในไทย" },
  { icon: Users, text: "ทีมอยู่หน้างาน ไม่ทิ้งลูกค้า" },
  { icon: FileText, text: "รองรับงานรัฐ / TOR" },
  { icon: Layers, text: "ไม่ผูกยี่ห้อเดียว (Anti-Vendor Lock)" },
];

// Section G: Commercial Models
const commercialModels = [
  {
    title: "Project",
    desc: "ซื้อขาดตามโครงการ",
    icon: Building,
    features: ["ออกแบบตาม TOR", "ส่งมอบครบ", "Warranty 1 ปี"],
    color: "border-blue-500/50"
  },
  {
    title: "MA Contract",
    desc: "สัญญาดูแลรายปี",
    icon: Shield,
    features: ["Support ตลอด", "อัพเกรดระบบ", "Training ทีม"],
    color: "border-emerald-500/50"
  },
  {
    title: "DaaS (เช่า)",
    desc: "Drone-as-a-Service",
    icon: Clock,
    features: ["ลด CAPEX", "ใช้ได้ทันที", "มีทีมดูแลครบ"],
    highlight: true,
    color: "border-primary"
  },
];

// Section H: KPIs
const kpis = [
  { metric: "5-10", label: "ลูกค้า Enterprise Active", unit: "ราย" },
  { metric: "1-3", label: "MA Contract ระยะยาว", unit: "ปี" },
  { metric: "3+", label: "Case Study ใช้งานจริง", unit: "เคส" },
];

// Slide Components
function HeroSlide() {
  return (
    <PresentationSlide variant="hero">
      <div className="text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          เสาที่ 1 — 13 STORE Enterprise
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
        >
          13 STORE Enterprise
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground font-medium mb-4"
        >
          Drone + AI + GIS + Operation <span className="text-primary">ครบวงจร</span>
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground mb-4"
        >
          สำหรับองค์กรกลาง–ใหญ่ และภาครัฐ
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground italic mb-8"
        >
          เราขาย "ความมั่นใจ" ไม่ใช่ขายของอย่างเดียว
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/contact">
            <button className="btn-navy">
              <MapPin size={20} />
              นัด Site Survey / Workshop
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn-hero-secondary">
              <Calendar size={20} />
              ขอ Demo / ใบเสนอราคา
            </button>
          </Link>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-blue-900/80 backdrop-blur"
        >
          <p className="text-lg md:text-xl text-white font-medium">
            "13 STORE ไม่ได้ขายโดรน แต่ดูแลภารกิจสำคัญขององค์กรคุณ 
            <br className="hidden md:block" />
            ให้ปลอดภัย มีข้อมูล และ<span className="text-primary">ตัดสินใจได้เร็วขึ้น</span>"
          </p>
        </motion.div>
      </div>
    </PresentationSlide>
  );
}

function DefinitionSlide() {
  return (
    <PresentationSlide variant="default">
      <div className="text-center mb-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Enterprise คืออะไร
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Definition & Positioning
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {definitionCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-8 rounded-2xl bg-card border border-border text-center"
          >
            <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6`}>
              <card.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{card.title}</h3>
            <p className="text-muted-foreground text-lg">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </PresentationSlide>
  );
}

function CapabilitySlide() {
  return (
    <PresentationSlide variant="accent">
      <div className="text-center mb-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Capability Stack
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          สแต็กความสามารถ 4 ชั้น
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          ทำให้คุณเห็นว่าเราครบ — End to End Enterprise Solutions
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {capabilityStack.map((layer, i) => (
          <motion.div
            key={layer.layer}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ x: 10 }}
            className="flex items-stretch gap-4"
          >
            <div className={`${layer.color} text-white px-6 py-5 rounded-l-2xl flex items-center justify-center min-w-[180px]`}>
              <layer.icon className="w-7 h-7 mr-3" />
              <div>
                <span className="text-xs opacity-70">Layer {layer.layer}</span>
                <p className="font-bold">{layer.title.split(' ')[0]}</p>
              </div>
            </div>
            <div className="flex-1 p-5 rounded-r-2xl bg-card border border-border flex items-center">
              <div>
                <p className="font-medium text-foreground text-lg mb-2">{layer.title}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item, j) => (
                    <span key={j} className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PresentationSlide>
  );
}

function DeliverySlide() {
  return (
    <PresentationSlide variant="default">
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
          กระบวนการส่งมอบ 6 ขั้นตอน
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          นี่คือหัวใจของ Enterprise — ไม่ใช่แค่ขายของ
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {deliverySteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-5 rounded-2xl bg-card border border-border text-center"
            >
              <motion.div 
                className="w-14 h-14 mx-auto rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                {step.step}
              </motion.div>
              <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
              {i < deliverySteps.length - 1 && (
                <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link to="/contact">
            <button className="btn-navy">
              <Calendar size={20} />
              ขอนัด Workshop (Step 2)
            </button>
          </Link>
        </motion.div>
      </div>
    </PresentationSlide>
  );
}

function TeamSlide() {
  return (
    <PresentationSlide variant="accent">
      <div className="text-center mb-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Team Structure
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          ทีม Enterprise ที่ "ต้องมี"
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          ขายแบบ Enterprise ใช้คนหลายบทบาท ไม่ใช่เซลส์คนเดียว
        </motion.p>
      </div>

      {/* Team Photos Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <img 
            src={enterpriseTeam1} 
            alt="ทีม Enterprise หน้างาน" 
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-bold">ทีมปฏิบัติการหน้างาน</p>
            <p className="text-white/80 text-sm">พร้อมให้บริการทั่วประเทศ</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <img 
            src={enterpriseTeam2} 
            alt="ทีม Support และ Training" 
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-bold">ทีม Training & Support</p>
            <p className="text-white/80 text-sm">ดูแลหลังขายตลอดสัญญา</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {teamStructure.map((member, i) => (
          <motion.div
            key={member.role}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="p-5 rounded-2xl bg-card border border-border text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
            >
              <member.icon className="w-10 h-10 mx-auto text-primary mb-3" />
            </motion.div>
            <p className="font-bold text-foreground text-sm">{member.role}</p>
            <p className="text-xs text-muted-foreground">{member.desc}</p>
          </motion.div>
        ))}
      </div>
    </PresentationSlide>
  );
}

function TrustSlide() {
  return (
    <PresentationSlide variant="default">
      <div className="text-center mb-12">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Why Trust Us
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          สิ่งที่ทำให้ลูกค้าไว้ใจ
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {trustPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 text-center"
          >
            <point.icon className="w-12 h-12 mx-auto text-primary mb-4" />
            <p className="font-bold text-foreground text-lg">{point.text}</p>
          </motion.div>
        ))}
      </div>
    </PresentationSlide>
  );
}

function CommercialSlide() {
  return (
    <PresentationSlide variant="accent">
      <div className="text-center mb-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Commercial Models
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          รูปแบบการซื้อ/สัญญา
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
        {commercialModels.map((model, i) => (
          <motion.div
            key={model.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-2xl bg-card border-2 ${model.color} ${model.highlight ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}
          >
            {model.highlight && (
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                แนะนำ
              </span>
            )}
            <model.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">{model.title}</h3>
            <p className="text-muted-foreground mb-4">{model.desc}</p>
            <ul className="space-y-2">
              {model.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* DaaS Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto p-6 rounded-2xl card-navy"
      >
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          DaaS = Drone + Platform + คน + รายงาน + SLA
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-primary font-medium mb-2">ส่วนประกอบราคาเช่า</p>
            <ul className="space-y-1 text-sm text-white/80">
              <li>• ค่าอุปกรณ์ (Drone + Payload)</li>
              <li>• ค่าแพลตฟอร์ม (License/Cloud/On-Prem)</li>
              <li>• ค่าทีมปฏิบัติการ</li>
              <li>• ค่า MA/Support</li>
              <li>• SLA/Risk Premium</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-primary font-medium mb-2">Upsell Path</p>
            <div className="flex flex-wrap gap-2 text-sm text-white/80">
              <span className="px-3 py-1 rounded-full bg-white/10">เช่า</span>
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="px-3 py-1 rounded-full bg-white/10">ต่อ MA</span>
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="px-3 py-1 rounded-full bg-white/10">ซื้อบางส่วน</span>
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="px-3 py-1 rounded-full bg-primary/30">+ AI Module</span>
            </div>
          </div>
        </div>
      </motion.div>
    </PresentationSlide>
  );
}

function CaseStudySlide() {
  return (
    <PresentationSlide variant="default">
      <div className="text-center mb-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Case Studies & KPIs
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          ผลงานจริง ใช้งานจริง
        </motion.h2>
      </div>

      {/* KPIs */}
      <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-5 rounded-2xl bg-card border border-border text-center"
          >
            <motion.p 
              className="text-3xl font-bold text-primary mb-1"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              ≥ {kpi.metric}
            </motion.p>
            <p className="text-foreground font-medium text-sm">{kpi.label}</p>
            <p className="text-xs text-primary">{kpi.unit}</p>
          </motion.div>
        ))}
      </div>

      {/* Case Studies */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl overflow-hidden bg-card border border-border"
        >
          <div className="relative h-44 overflow-hidden">
            <img 
              src={enterpriseCase1} 
              alt="Case Study - ภาครัฐ" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">ภาครัฐ</span>
              <h3 className="text-lg font-bold text-white mt-1">โครงการเฝ้าระวังพื้นที่ชายแดน</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xl font-bold text-primary">95%</p>
                <p className="text-xs text-muted-foreground">Accuracy</p>
              </div>
              <div>
                <p className="text-xl font-bold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground">Operation</p>
              </div>
              <div>
                <p className="text-xl font-bold text-primary">-50%</p>
                <p className="text-xs text-muted-foreground">OPEX</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl overflow-hidden bg-card border border-border"
        >
          <div className="relative h-44 overflow-hidden">
            <img 
              src={enterpriseCase2} 
              alt="Case Study - นิคมอุตสาหกรรม" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-xs font-bold">อุตสาหกรรม</span>
              <h3 className="text-lg font-bold text-white mt-1">โครงการ Inspection โรงไฟฟ้า</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xl font-bold text-primary">80%</p>
                <p className="text-xs text-muted-foreground">เวลาลดลง</p>
              </div>
              <div>
                <p className="text-xl font-bold text-primary">0</p>
                <p className="text-xs text-muted-foreground">อุบัติเหตุ</p>
              </div>
              <div>
                <p className="text-xl font-bold text-primary">DaaS</p>
                <p className="text-xs text-muted-foreground">Model</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PresentationSlide>
  );
}

function ContactSlide() {
  const [formData, setFormData] = useState({
    organization: "",
    province: "",
    missionType: "",
    urgency: "",
    budget: "",
    pain: ""
  });

  return (
    <PresentationSlide variant="accent" centered={false}>
      <div className="py-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Award className="w-14 h-14 mx-auto text-primary mb-4" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-3"
          >
            เริ่มจาก Workshop 1 ครั้ง
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            ได้ภาพระบบ + งบ + แผนดำเนินงาน
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto p-6 rounded-2xl bg-card border border-border"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="organization">องค์กร/หน่วยงาน</Label>
              <Input 
                id="organization" 
                placeholder="ชื่อองค์กร"
                value={formData.organization}
                onChange={(e) => setFormData({...formData, organization: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="province">จังหวัด/พื้นที่หน้างาน</Label>
              <Input 
                id="province" 
                placeholder="จังหวัด"
                value={formData.province}
                onChange={(e) => setFormData({...formData, province: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label>ประเภทภารกิจ</Label>
              <Select onValueChange={(value) => setFormData({...formData, missionType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกประเภท" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="survey">Mapping & Survey</SelectItem>
                  <SelectItem value="security">Security & Surveillance</SelectItem>
                  <SelectItem value="inspection">Infrastructure Inspection</SelectItem>
                  <SelectItem value="disaster">Disaster & Emergency</SelectItem>
                  <SelectItem value="other">อื่นๆ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>ความเร่งด่วน</Label>
              <Select onValueChange={(value) => setFormData({...formData, urgency: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกความเร่งด่วน" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">ด่วนมาก (1-2 สัปดาห์)</SelectItem>
                  <SelectItem value="normal">ปกติ (1-3 เดือน)</SelectItem>
                  <SelectItem value="planning">วางแผนล่วงหน้า (3+ เดือน)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>งบประมาณคร่าวๆ</Label>
              <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกช่วงงบ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under1m">ต่ำกว่า 1 ล้านบาท</SelectItem>
                  <SelectItem value="1-5m">1-5 ล้านบาท</SelectItem>
                  <SelectItem value="5-10m">5-10 ล้านบาท</SelectItem>
                  <SelectItem value="over10m">มากกว่า 10 ล้านบาท</SelectItem>
                  <SelectItem value="unknown">ยังไม่กำหนด</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="pain">Pain / ปัญหาที่ต้องการแก้</Label>
              <Textarea 
                id="pain" 
                placeholder="อธิบายปัญหาหรือความต้องการของคุณ..."
                value={formData.pain}
                onChange={(e) => setFormData({...formData, pain: e.target.value})}
                rows={2}
              />
            </div>
          </div>

          <motion.div 
            className="mt-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <button className="btn-navy w-full md:w-auto">
              <Send size={20} />
              ส่งข้อมูลเพื่อนัด Workshop
            </button>
          </motion.div>
        </motion.div>
      </div>
    </PresentationSlide>
  );
}

const Enterprise = () => {
  const sections = [
    { id: "hero", content: <HeroSlide /> },
    { id: "definition", content: <DefinitionSlide /> },
    { id: "capability", content: <CapabilitySlide /> },
    { id: "delivery", content: <DeliverySlide /> },
    { id: "team", content: <TeamSlide /> },
    { id: "trust", content: <TrustSlide /> },
    { id: "commercial", content: <CommercialSlide /> },
    { id: "case-study", content: <CaseStudySlide /> },
    { id: "contact", content: <ContactSlide /> },
  ];

  return <PresentationLayout sections={sections} />;
};

export default Enterprise;
