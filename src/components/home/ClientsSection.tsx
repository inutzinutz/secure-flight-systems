import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Award, BadgeCheck, Building2 } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "DJI Authorized Dealer",
    desc: "ตัวแทนจำหน่ายอย่างเป็นทางการ",
  },
  {
    icon: Award,
    title: "9+ ปีประสบการณ์",
    desc: "เชี่ยวชาญโซลูชันโดรนองค์กร",
  },
  {
    icon: BadgeCheck,
    title: "มาตรฐานสากล",
    desc: "กระบวนการส่งมอบแบบ Enterprise",
  },
  {
    icon: Building2,
    title: "50+ องค์กรไว้วางใจ",
    desc: "ภาครัฐและเอกชนชั้นนำ",
  },
];

const stats = [
  { target: 50, suffix: "+", label: "องค์กรที่ไว้วางใจ", unit: "แห่ง" },
  { target: 9, suffix: "+", label: "ปีประสบการณ์", unit: "ปี" },
  { target: 45, suffix: "+", label: "ผู้เชี่ยวชาญในทีม", unit: "คน" },
  { target: 3, suffix: "", label: "Core Teams พร้อมบริการ", unit: "ทีม" },
];

const clientLogos = [
  { name: "กระทรวงมหาดไทย", type: "government" },
  { name: "กรมป้องกันและบรรเทาสาธารณภัย", type: "government" },
  { name: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย", type: "government" },
  { name: "ปตท.", type: "enterprise" },
  { name: "SCG", type: "enterprise" },
  { name: "กรมที่ดิน", type: "government" },
  { name: "กรมโยธาธิการและผังเมือง", type: "government" },
  { name: "บริษัทก่อสร้างชั้นนำ", type: "enterprise" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-28 bg-secondary">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Trust &amp; Credentials
          </span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            มาตรฐานที่คุณวางใจได้
          </h2>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border shadow-sm"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-1">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base">
                {badge.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-bold text-foreground md:text-2xl">
            ลูกค้าของเรา
          </h3>
          <p className="text-muted-foreground mt-2">
            หน่วยงานภาครัฐและองค์กรชั้นนำที่ไว้วางใจใช้บริการ
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              className="flex items-center justify-center p-4 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="text-center">
                <div
                  className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                    client.type === "government"
                      ? "bg-blue-100 dark:bg-blue-900/30"
                      : "bg-amber-100 dark:bg-amber-900/30"
                  }`}
                >
                  <Building2
                    className={`w-6 h-6 ${
                      client.type === "government"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-amber-600 dark:text-amber-400"
                    }`}
                  />
                </div>
                <p className="text-xs md:text-sm font-medium text-foreground line-clamp-2">
                  {client.name}
                </p>
                <span
                  className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full ${
                    client.type === "government"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                  }`}
                >
                  {client.type === "government" ? "ภาครัฐ" : "เอกชน"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground italic text-lg max-w-2xl mx-auto">
            "ไม่ใช่แค่ขายโดรน —{" "}
            <span className="text-foreground font-medium not-italic">
              แต่เป็นพาร์ทเนอร์ที่ช่วยให้องค์กรใช้งานได้จริงและต่อเนื่อง
            </span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
