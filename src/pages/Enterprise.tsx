import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Users, Cog, Briefcase, HeadphonesIcon, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const revenueModels = [
  { title: "Project Delivery", description: "ส่งมอบโครงการครบวงจร" },
  { title: "License/Software", description: "License แพลตฟอร์มและซอฟต์แวร์" },
  { title: "MA Contract", description: "สัญญาบำรุงรักษารายปี" },
  { title: "DaaS", description: "Drone-as-a-Service รายเดือน/รายปี" },
];

const Enterprise = () => {
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
                เสาที่ 1
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                13 STORE Enterprise
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                <span className="text-foreground font-medium">System Integrator + Solution Owner + Operation Partner</span>
                <br />
                ทีม + กระบวนการ + บริการที่ทำเงิน (Project/MA/DaaS)
              </p>
              <Link to="/contact">
                <button className="btn-hero-primary">
                  นัดคุยกับทีม Enterprise
                  <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stack Overview */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Enterprise Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Expert Team", desc: "วิศวกร + นักบิน Certified + PM" },
                { icon: Cog, title: "Proven Process", desc: "6-Step Delivery Process" },
                { icon: Briefcase, title: "Full Service", desc: "Pre-sales → Delivery → MA" },
                { icon: HeadphonesIcon, title: "Long-term Support", desc: "MA/DaaS/Training" },
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

        {/* Revenue Models */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Revenue Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {revenueModels.map((model, i) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-background border border-border/50"
                >
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{model.title}</h3>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
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

export default Enterprise;
