import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlyingDrone } from "@/components/icons/DroneIcon";

const resources = [
  {
    title: "Company Profile",
    description: "ภาพรวมบริษัท บริการ และ Solutions (6-10 หน้า)",
    type: "PDF",
    size: "2.5 MB",
  },
  {
    title: "3-Pillar Architecture",
    description: "แผนภาพ Integrated Architecture: Enterprise + LM + Altura",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    title: "Enterprise 6-Step Process",
    description: "กระบวนการส่งมอบแบบ Enterprise",
    type: "PDF",
    size: "0.8 MB",
  },
  {
    title: "Altura Deployment Model",
    description: "แผนภาพ Grid Deployment สำหรับ VTOL Dock",
    type: "PDF",
    size: "1.5 MB",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Drones */}
      <FlyingDrone
        className="w-10 h-10"
        pathX={[100, 300, 500, 350, 150, 100]}
        pathY={[120, 160, 100, 180, 140, 120]}
        rotation={[0, 6, -8, 10, -4, 0]}
        duration={16}
        color="text-primary/20"
      />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Resources
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                ดาวน์โหลดเอกสาร
              </h1>
              <p className="text-xl text-muted-foreground">
                Company Profile, Architecture Diagrams, One-pagers และเอกสารประกอบการนำเสนอ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Downloads */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {resources.map((resource, i) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{resource.type} • {resource.size}</span>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Download size={14} />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">ต้องการเอกสารเพิ่มเติม หรือเอกสารเฉพาะทาง?</p>
              <Button variant="outline" className="gap-2" asChild>
                <a href="/contact">
                  <ExternalLink size={16} />
                  ติดต่อทีม
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
