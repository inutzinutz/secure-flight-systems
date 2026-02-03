import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  Radar, Clock, Users, Map, ArrowRight, CheckCircle, Eye, Brain, 
  Compass, Cog, Shield, Anchor, Building, AlertTriangle, Target,
  Globe, DollarSign, Flag, Wrench, Calendar, Network, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import strategicFrameworkImage from "@/assets/altura-strategic-framework.jpg";
import alturaImage from "@/assets/altura-deployment-grid.jpg";

const executiveNarrative = [
  { icon: Eye, title: "Eyes", subtitle: "Surveillance", desc: "ดวงตาเฝ้าระวังทุกพื้นที่" },
  { icon: Brain, title: "Brain", subtitle: "Intelligence", desc: "สมองวิเคราะห์และประมวลผล" },
  { icon: Compass, title: "Long Reach", subtitle: "Extended Range", desc: "แขนยาวเข้าถึงทุกจุด" },
  { icon: Cog, title: "Autonomous", subtitle: "24/7 Operation", desc: "ระบบอัตโนมัติตลอด 24 ชม." },
];

const threatGaps = [
  "Long borders + complex terrain",
  "New threats: Drones, smuggling, cross-border, IUU, disasters",
  "Personnel shortages / Budget constraints",
  "Slow response times",
];

const solutionComponents = [
  { title: "Long-Range VTOL UAV", desc: "50–150 km range", icon: Radar },
  { title: "Automated Dock Station", desc: "Takeoff / Landing / Charging", icon: Building },
  { title: "Integrated Sensors", desc: "EO/IR, Thermal, LiDAR, AIS, Radar", icon: Eye },
  { title: "C2 + GIS + AI Hub", desc: "Private / On-Premise Analytics", icon: Brain },
];

const keyCapabilities = [
  "24/7 Autonomous Flight",
  "Real-time Alerts",
  "Dangerous Area Operations",
  "60–80% Manpower Reduction",
];

const useCases = [
  {
    id: "border",
    icon: Shield,
    title: "Border Security",
    titleTH: "ความมั่นคงชายแดน",
    items: ["Border patrol surveillance", "Smuggling & cross-border detection", "Ground radar integration"],
  },
  {
    id: "maritime",
    icon: Anchor,
    title: "Maritime Security",
    titleTH: "ความมั่นคงทางทะเล",
    items: ["Territorial waters protection", "IUU fishing enforcement", "Navy & Marine Police support"],
  },
  {
    id: "infrastructure",
    icon: Building,
    title: "Critical Infrastructure",
    titleTH: "โครงสร้างพื้นฐานสำคัญ",
    items: ["Power plants & dams", "Gas pipelines & airports", "Pre-incident intrusion detection"],
  },
  {
    id: "disaster",
    icon: AlertTriangle,
    title: "Disaster & Civil Security",
    titleTH: "ภัยพิบัติและความปลอดภัยสาธารณะ",
    items: ["Flood, fire, earthquake response", "Search & rescue without risk", "Civil emergency support"],
  },
];

const deploymentFeatures = [
  { title: "Dock every 50–80 km", desc: "Forming a Drone Security Grid" },
  { title: "Multi-level Control", desc: "Central / Provincial / Regional Hubs" },
  { title: "Agency Integration", desc: "Army, Police, DDPM, Natural Resources" },
];

const strategicValues = [
  { icon: Flag, title: "100% Reduced Reliance", desc: "on foreign technology" },
  { icon: Shield, title: "Sovereign Capability", desc: "Full national control" },
  { icon: Zap, title: "Faster Decision Making", desc: "Real-time intelligence" },
  { icon: Globe, title: "Regional Security Hub", desc: "Position Thailand as leader" },
];

const costEffectiveness = [
  { metric: "10–15x", desc: "Lower OPEX vs. Helicopter" },
  { metric: "80%", desc: "Manpower reduction" },
  { metric: "Multi-agency", desc: "Shared infrastructure" },
];

const localContent = [
  "Local assembly, repair & maintenance",
  "Data sovereignty (stays in Thailand)",
  "Knowledge transfer programs",
  "Thai engineer, pilot & analyst jobs",
];

const roadmapPhases = [
  {
    phase: "A",
    title: "Pilot Project",
    duration: "6 Months",
    items: ["1–2 provinces / 1 mission", "Proof of Capability"],
  },
  {
    phase: "B",
    title: "Regional Expansion",
    duration: "12–24 Months",
    items: ["Multi-agency connection", "Regional control centers"],
  },
  {
    phase: "C",
    title: "National Security Grid",
    duration: "3–5 Years",
    items: ["Nationwide network", "Integrated security dimensions"],
  },
];

const Altura = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                National Strategic Framework
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Altura VTOL Dock
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                National Autonomous Aerial Security Infrastructure
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                For Army / Police / Ministries / Budget Bureau / NSC / Policymakers
                <br />
                <span className="text-foreground font-medium">Protecting Sovereignty, Lives, and Resources of Thailand</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="btn-navy">
                    <Calendar size={20} />
                    Request Briefing
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn-hero-secondary">
                    <Target size={20} />
                    Schedule Site Survey
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive Narrative - 4 Pillars */}
        <section className="py-16 bg-card border-y border-border">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Executive Narrative
              </h2>
              <p className="text-muted-foreground">
                Altura VTOL Dock serves as Thailand's aerial security foundation
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {executiveNarrative.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                  <p className="text-sm text-primary font-medium">{item.subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Framework Diagram */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Strategic Framework
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                National Strategic Presentation Plan
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive 7-phase framework for Thailand's national security transformation
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <img 
                src={strategicFrameworkImage} 
                alt="National Strategic Presentation Plan: Altura VTOL Dock for Thailand's National Security" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Phase 1: Threat → Gap → Opportunity */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
                  Phase 1: Threat → Gap → Opportunity
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Thai Security Context Today
                </h2>
                <div className="space-y-4 mb-8">
                  {threatGaps.map((gap, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{gap}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <p className="text-lg font-semibold text-destructive mb-2">🔴 Main Problem (Gap):</p>
                  <p className="text-foreground">
                    "Humans can't watch 24/7, but threats are constant."
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl card-navy"
              >
                <h3 className="text-2xl font-bold mb-6">The Opportunity</h3>
                <p className="text-white/80 mb-6">
                  Autonomous Systems for continuous monitoring — 24/7 aerial security without risking personnel
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Eliminate blind spots</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Reduce response time to minutes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Scale coverage nationally</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Phase 2: Solution Architecture */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Phase 2: Solution Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Autonomous Aerial Security Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Altura VTOL Dock = Complete autonomous surveillance & response system
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {solutionComponents.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-secondary border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Key Capabilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-background">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Phase 3: National Security Use Cases */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Phase 3: Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                National Security Applications
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="use-case-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{useCase.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{useCase.titleTH}</p>
                      <ul className="space-y-2">
                        {useCase.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 4: National Deployment Model */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Phase 4: Deployment Model
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  National VTOL Network
                </h2>
                <div className="space-y-4 mb-8">
                  {deploymentFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                      <Network className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Connects to: Army, Police, DDPM, Natural Resources, Government GIS Data Center
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-border shadow-lg"
              >
                <img 
                  src={alturaImage} 
                  alt="Altura VTOL Dock Deployment Grid - National Network" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Phase 5: Strategic Value */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Phase 5: Strategic Value
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                🇹🇭 Value for Thailand
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* National Results */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl card-navy"
              >
                <h3 className="text-xl font-bold mb-6">National Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  {strategicValues.map((value, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/10">
                      <value.icon className="w-6 h-6 text-primary mb-2" />
                      <h4 className="font-semibold text-white text-sm">{value.title}</h4>
                      <p className="text-xs text-white/70">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Cost Effectiveness */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-background border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Cost Effectiveness
                </h3>
                <div className="space-y-4">
                  {costEffectiveness.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                      <span className="text-3xl font-bold text-primary">{item.metric}</span>
                      <span className="text-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Phase 6: Local Content & Security Policy */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Phase 6: Local Content
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Altura × Thailand
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {localContent.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Phase 7: Implementation Roadmap */}
        <section className="section-padding bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Phase 7: Roadmap
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Implementation Roadmap
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {roadmapPhases.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative p-6 rounded-2xl bg-background border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {phase.phase}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground">{phase.title}</h3>
                      <p className="text-sm text-primary font-medium">{phase.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Message & CTA */}
        <section className="section-padding bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-lg mb-8">
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                  "Altura VTOL Dock does not replace people,
                  <br />
                  <span className="text-primary">but makes Thai people safer without risking lives.</span>"
                </p>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform Thailand's national security infrastructure?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="btn-navy">
                    <Calendar size={20} />
                    Request Executive Briefing
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn-hero-secondary">
                    <Target size={20} />
                    Schedule Pilot Project Discussion
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Altura;