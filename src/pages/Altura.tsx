import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Radar, Clock, Users, Map, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import alturaImage from "@/assets/altura-deployment-grid.jpg";

const useCases = [
  "ชายแดนและจุดผ่านแดน",
  "ความมั่นคงทางทะเล",
  "โครงสร้างพื้นฐานสำคัญ",
  "การตอบสนองภัยพิบัติ",
  "การเฝ้าระวังเมืองอัจฉริยะ",
  "การตรวจสอบทางหลวง",
];

const Altura = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img src={alturaImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/50" />
          </div>
          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                เสาที่ 3
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Altura VTOL Dock
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                <span className="text-foreground font-medium">National Aerial Security Infrastructure</span>
              </p>
              <p className="text-muted-foreground mb-8">
                โครงสร้างพื้นฐานความมั่นคงทางอากาศระดับชาติ
                <br />
                24/7 Autonomous / ลดกำลังพล 80% / Grid Deployment Model
              </p>
              <Link to="/contact">
                <button className="btn-hero-primary">
                  นัด Site Survey
                  <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">ทำไมต้อง Altura?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: "24/7 Autonomous", desc: "ทำงานอัตโนมัติตลอดเวลา" },
                { icon: Users, title: "ลดกำลังพล 80%", desc: "หนึ่งคนควบคุมหลาย Dock" },
                { icon: Map, title: "Grid Deployment", desc: "ขยายพื้นที่ครอบคลุมเป็นระบบ" },
                { icon: Radar, title: "C2 Integration", desc: "เชื่อมต่อศูนย์บัญชาการ" },
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

        {/* Use Cases */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Use Cases</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {useCases.map((useCase, i) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-background border border-border/50"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Grid Image */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Deployment Model</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl overflow-hidden border border-border/50"
            >
              <img src={alturaImage} alt="Altura VTOL Dock Deployment Grid" className="w-full" />
            </motion.div>
            <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
              วางตำแหน่ง Dock เป็นระบบ Grid เพื่อครอบคลุมพื้นที่กว้าง 
              แต่ละ Dock ทำงานประสานกันผ่านศูนย์บัญชาการ
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Altura;
