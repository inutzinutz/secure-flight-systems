import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Siren, 
  HardHat, 
  TrafficCone, 
  Landmark,
  MapPin,
  ArrowRight
} from "lucide-react";

const useCases = [
  {
    icon: Siren,
    title: "Emergency Response",
    description: "ดับเพลิง / กู้ภัย / USAR",
    tags: ["Real-time Video", "Thermal", "Situational Awareness"],
  },
  {
    icon: Building2,
    title: "Smart City",
    description: "เฝ้าระวังเมือง / Traffic / Events",
    tags: ["24/7 Monitoring", "AI Analytics", "C2 Integration"],
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Survey / Progress / Inspection",
    tags: ["Mapping", "3D Model", "Reporting"],
  },
  {
    icon: TrafficCone,
    title: "Highway Police",
    description: "ตรวจจราจร / อุบัติเหตุ / ค้นหา",
    tags: ["Quick Deploy", "Wide Coverage", "Night Ops"],
  },
  {
    icon: Landmark,
    title: "Local Government",
    description: "สำรวจ / แผนที่ / ป้องกันภัย",
    tags: ["Multi-use", "Cost Effective", "Easy Operation"],
  },
  {
    icon: MapPin,
    title: "Border & Maritime",
    description: "ชายแดน / ทะเล / Security",
    tags: ["Long Endurance", "Autonomous", "24/7 Grid"],
  },
];

export function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            เลือกตามหน่วยงาน / อุตสาหกรรม
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions สำหรับทุกภารกิจ ปรับแต่งได้ตามความต้องการจริง
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/solutions" className="block group">
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground mb-1">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-secondary text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            ดู Use Cases ทั้งหมด
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
