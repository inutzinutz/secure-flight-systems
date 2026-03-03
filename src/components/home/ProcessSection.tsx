import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Users, PenTool, PlayCircle, FileText, Repeat } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Pain Discovery",
    description: "รับฟังปัญหา ทำความเข้าใจบริบท และความต้องการจริง",
    color: "from-blue-600 to-blue-500",
  },
  {
    number: "02",
    icon: Users,
    title: "Workshop",
    description: "ประชุมเชิงปฏิบัติการกับทีมเพื่อออกแบบ Solution",
    color: "from-violet-600 to-violet-500",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design + Budget",
    description: "ออกแบบระบบ พร้อมประมาณการงบประมาณ",
    color: "from-cyan-600 to-cyan-500",
  },
  {
    number: "04",
    icon: PlayCircle,
    title: "Pilot / Demo",
    description: "ทดสอบภาคสนามจริงเพื่อพิสูจน์ผลลัพธ์",
    color: "from-emerald-600 to-emerald-500",
  },
  {
    number: "05",
    icon: FileText,
    title: "Proposal",
    description: "จัดทำข้อเสนอโครงการ TOR-ready",
    color: "from-amber-600 to-amber-500",
  },
  {
    number: "06",
    icon: Repeat,
    title: "MA / Long-term",
    description: "ดูแลระยะยาว + ขยายระบบตามความต้องการ",
    color: "from-primary to-amber-400",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
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
        <div className="hidden lg:block">
          {/* Progress line */}
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute top-12 left-[calc(1/12*100%)] right-[calc(1/12*100%)] h-0.5 bg-gradient-to-r from-blue-500 via-primary to-amber-400"
            />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                  className="relative text-center group"
                >
                  {/* Step Circle */}
                  <div
                    className={`relative z-10 w-14 h-14 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Number */}
                  <span className="text-xs text-primary font-mono font-bold mb-2 block">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h4 className="font-semibold text-foreground text-sm mb-2">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50"
            >
              <div
                className={`flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}
              >
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-primary font-mono font-bold">
                    {step.number}
                  </span>
                  <h4 className="font-semibold text-foreground text-sm">
                    {step.title}
                  </h4>
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
