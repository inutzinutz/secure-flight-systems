import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PainSection } from "@/components/home/PainSection";
import { ArchitectureSection } from "@/components/home/ArchitectureSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { CTASection } from "@/components/home/CTASection";
import { ClientsSection } from "@/components/home/ClientsSection";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PainSection />
        <ArchitectureSection />
        <PillarsSection />
        <ClientsSection />
        <ProcessSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
