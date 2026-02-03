import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Users, PenTool, PlayCircle, FileText, Repeat } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Pain Discovery",
    description: "รับฟังปัญหา ทำความเข้าใจบริบท และความต้องการจริง",
  },
  {
    number: "02",
    icon: Users,
    title: "Workshop",
    description: "ประชุมเชิงปฏิบัติการกับทีมเพื่อออกแบบ Solution",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design + Budget",
    description: "ออกแบบระบบ พร้อมประมาณการงบประมาณ",
  },
  {
    number: "04",
    icon: PlayCircle,
    title: "Pilot / Demo",
    description: "ทดสอบภาคสนามจริงเพื่อพิสูจน์ผลลัพธ์",
  },
  {
    number: "05",
    icon: FileText,
    title: "Proposal",
    description: "จัดทำข้อเสนอโครงการ TOR-ready",
  },
  {
    number: "06",
    icon: Repeat,
    title: "MA / Long-term",
    description: "ดูแลระยะยาว + ขยายระบบตามความต้องการ",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-overlay opacity-5" />
      
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How We Deliver
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            6-Step Delivery Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            กระบวนการส่งมอบแบบ Enterprise ที่พิสูจน์แล้วกับลูกค้าองค์กรและภาครัฐ
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                
                {/* Number */}
                <span className="text-xs text-primary font-mono mb-2 block">{step.number}</span>
                
                {/* Title */}
                <h4 className="font-semibold text-foreground text-sm mb-2">{step.title}</h4>
                
                {/* Description */}
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-primary font-mono">{step.number}</span>
                  <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
