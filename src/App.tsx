import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Enterprise from "./pages/Enterprise";
import Platform from "./pages/Platform";
import Altura from "./pages/Altura";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import ROICalculator from "./pages/ROICalculator";
 import DroneRental from "./pages/DroneRental";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/altura" element={<Altura />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
           <Route path="/drone-rental" element={<DroneRental />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
