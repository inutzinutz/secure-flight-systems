import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eagerly load the home page (critical path)
import Index from "./pages/Index";

// Lazy load all other pages — each becomes its own JS chunk
const Enterprise = lazy(() => import("./pages/Enterprise"));
const Platform = lazy(() => import("./pages/Platform"));
const Altura = lazy(() => import("./pages/Altura"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const ROICalculator = lazy(() => import("./pages/ROICalculator"));
const DroneRental = lazy(() => import("./pages/DroneRental"));
const DroneRentalAgreement = lazy(() => import("./pages/DroneRentalAgreement"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal full-screen loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/drone-rental/agreement" element={<DroneRentalAgreement />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
