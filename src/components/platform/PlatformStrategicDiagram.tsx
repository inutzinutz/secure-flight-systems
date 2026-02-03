import { motion } from "framer-motion";
import { 
  Brain, Cog, Building, Eye, ArrowRight, CheckCircle, 
  Radar, MapPin, Smartphone, Monitor, Radio, AlertTriangle,
  Shield, Users, Globe, Zap, Target, Clock
} from "lucide-react";
import { useState } from "react";

const coreEngineComponents = [
  { 
    id: "ai",
    icon: Brain, 
    title: "AI Algorithm", 
    subtitle: "สมอง",
    desc: "ตรวจจับ วิเคราะห์ แจ้งเตือนอัตโนมัติ",
    color: "from-purple-500 to-purple-600"
  },
  { 
    id: "dock",
    icon: Building, 
    title: "Drone Automatic Dock", 
    subtitle: "ฐานบินอัตโนมัติ",
    desc: "Takeoff / Landing / Charging 24/7",
    color: "from-blue-500 to-blue-600"
  },
  { 
    id: "platform",
    icon: Monitor, 
    title: "Platform กลาง", 
    subtitle: "ศูนย์ข้อมูล",
    desc: "C2 + GIS + Command Center",
    color: "from-emerald-500 to-emerald-600"
  },
];

const shiftComparison = {
  oldWay: {
    title: "OLD WAY (แบบเดิม)",
    color: "bg-red-500/20 border-red-500/50",
    textColor: "text-red-500",
    items: ["ตรวจไม่ทั่ว", "ใช้คนเยอะ", "ตอบสนองช้า"]
  },
  newWay: {
    title: "NEW WAY (แบบใหม่)",
    color: "bg-emerald-500/20 border-emerald-500/50",
    textColor: "text-emerald-500",
    items: ["ตรวจ 24 ชม.", "อัตโนมัติ", "มีหลักฐาน", "ปิดงานเป็นระบบ"]
  }
};

const workflowSteps = [
  { step: 1, title: "วางแผนบิน", subtitle: "Plan/Map", icon: MapPin },
  { step: 2, title: "ถ่ายทอดข้อมูล", subtitle: "Real-time Data", icon: Radio },
  { step: 3, title: "AI ตรวจจับเหตุ", subtitle: "AI Detect Alert", icon: Eye },
  { step: 4, title: "แจ้งเหตุ & ปิดงาน", subtitle: "Alert & Log Trace", icon: CheckCircle },
];

const fourTerminals = [
  { id: 1, title: "Business Platform", subtitle: "ฐานข้อมูล", icon: Monitor },
  { id: 2, title: "Command & Dispatch", subtitle: "ศูนย์สั่งการ", icon: Radio },
  { id: 3, title: "Mobile App", subtitle: "เจ้าหน้าที่", icon: Smartphone },
  { id: 4, title: "Pilot Interface", subtitle: "กรณีพิเศษ", icon: Radar },
];

export function PlatformStrategicDiagram() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
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
          Core System Engine
        </h3>
        <p className="text-muted-foreground">
          หัวใจระบบ: รองรับการทำงานแบบ (ไร้คนเฝ้า) และ (ตรวจที่)
        </p>
      </motion.div>

      {/* The Shift: Old Way vs New Way */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 mb-12"
      >
        {/* Old Way */}
        <motion.div 
          className={`p-6 rounded-2xl border-2 ${shiftComparison.oldWay.color}`}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className={`font-bold ${shiftComparison.oldWay.textColor} mb-4`}>
            {shiftComparison.oldWay.title}
          </h4>
          <ul className="space-y-2">
            {shiftComparison.oldWay.items.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Shift Arrow */}
        <motion.div 
          className="flex items-center justify-center"
          animate={isAnimating ? { x: [0, 10, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10">
            <span className="font-bold text-primary text-lg">Shift</span>
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>
        </motion.div>

        {/* New Way */}
        <motion.div 
          className={`p-6 rounded-2xl border-2 ${shiftComparison.newWay.color}`}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className={`font-bold ${shiftComparison.newWay.textColor} mb-4`}>
            {shiftComparison.newWay.title}
          </h4>
          <ul className="space-y-2">
            {shiftComparison.newWay.items.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Core System Engine - Central Hub */}
      <div className="relative max-w-4xl mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-48 h-48 md:w-56 md:h-56"
        >
          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={isAnimating ? { scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-blue-500/40"
            animate={isAnimating ? { scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] } : {}}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border-2 border-purple-500/50"
            animate={isAnimating ? { scale: [1, 1.1, 1], opacity: [0.7, 0.4, 0.7] } : {}}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          
          {/* Center content */}
          <div className="absolute inset-12 md:inset-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center text-center shadow-lg border-2 border-primary/30">
            <Cog className="w-8 h-8 md:w-10 md:h-10 text-primary mb-1" />
            <span className="text-white font-bold text-xs md:text-sm">Core System</span>
            <span className="text-white/80 text-[10px] md:text-xs">Engine</span>
          </div>
        </motion.div>

        {/* Core Components - Around the hub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {coreEngineComponents.map((component, i) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onMouseEnter={() => setActiveComponent(component.id)}
              onMouseLeave={() => setActiveComponent(null)}
              className={`relative p-4 md:p-6 rounded-2xl bg-card border-2 cursor-pointer transition-all duration-300 ${
                activeComponent === component.id 
                  ? "border-primary shadow-lg shadow-primary/20" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <motion.div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                <span className="text-xs text-white font-bold">{i + 1}</span>
              </motion.div>
              
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${component.color} flex items-center justify-center mb-3`}>
                <component.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground text-sm text-center mb-1">
                {component.title}
              </h4>
              <p className="text-xs text-primary text-center mb-2">
                {component.subtitle}
              </p>
              <motion.p 
                initial={{ height: 0, opacity: 0 }}
                animate={activeComponent === component.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="text-xs text-muted-foreground text-center overflow-hidden"
              >
                {component.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Workflow End-to-End */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 p-6 rounded-2xl bg-secondary/50 border border-border"
      >
        <h4 className="text-center font-bold text-foreground mb-6">
          Workflow การทำงานจริง (End-to-End)
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background border border-border"
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                  animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <step.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-xs font-bold text-primary">{step.step}</span>
                <span className="text-sm font-medium text-foreground text-center">{step.title}</span>
                <span className="text-xs text-muted-foreground">{step.subtitle}</span>
              </motion.div>
              {i < workflowSteps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-2 w-4"
                  animate={isAnimating ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          {">"} ทุกเหตุการณ์มี Trace / Log / Evidence ครบ
        </p>
      </motion.div>

      {/* 4 Terminal System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <h4 className="text-center font-bold text-foreground mb-2">
          ระบบ 4 Terminal
        </h4>
        <p className="text-center text-sm text-muted-foreground mb-6">
          One System, Multi-Access — ทำครั้งเดียว ใช้ได้ทุกฝั่ง
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fourTerminals.map((terminal, i) => (
            <motion.div
              key={terminal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                animate={isAnimating ? { rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              >
                <terminal.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">{terminal.title}</p>
                <p className="text-xs text-muted-foreground">{terminal.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
