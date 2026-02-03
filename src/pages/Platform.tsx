import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Cloud, Database, Shield, GitBranch, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const roadmap = [
  { phase: "Phase 1", title: "Core Platform", items: ["C2 Console", "Fleet Management", "Basic GIS"] },
  { phase: "Phase 2", title: "AI Integration", items: ["Object Detection", "Event Alerts", "Analytics Dashboard"] },
  { phase: "Phase 3", title: "Advanced GIS", items: ["3D Mapping", "Terrain Analysis", "Custom Layers"] },
  { phase: "Phase 4", title: "Enterprise Scale", items: ["Multi-tenant", "API Gateway", "Custom Reports"] },
];

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                เสาที่ 2
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                LM Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                <span className="text-foreground font-medium">Command & Intelligence Platform</span>
              </p>
              <p className="text-muted-foreground mb-8">
                แพลตฟอร์มศูนย์บัญชาการ + AI + GIS สำหรับภาครัฐ/องค์กรใหญ่
                <br />
                On-Prem / Private Cloud / Data อยู่ไทย / Anti-Vendor Lock
              </p>
              <Link to="/contact">
                <button className="btn-hero-primary">
                  ขอ Demo Platform
                  <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cloud, title: "On-Prem / Private Cloud", desc: "ติดตั้งในศูนย์ข้อมูลของคุณเอง" },
                { icon: Database, title: "Data Sovereignty", desc: "ข้อมูลอยู่ในประเทศไทย 100%" },
                { icon: Shield, title: "Security First", desc: "ระดับความปลอดภัยสำหรับงานรัฐ" },
                { icon: GitBranch, title: "Anti-Vendor Lock", desc: "ไม่ผูกขาดกับเจ้าใดเจ้าหนึ่ง" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">12-Month Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmap.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-background border border-border/50"
                >
                  <span className="text-primary font-mono text-sm">{phase.phase}</span>
                  <h3 className="font-semibold text-foreground mt-2 mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
