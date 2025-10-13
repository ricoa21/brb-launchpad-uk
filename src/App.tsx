import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReturnJourney from "./pages/ReturnJourney";
import StarterPackage from "./pages/StarterPackage";
import ProPackage from "./pages/ProPackage";
import ConciergePackage from "./pages/ConciergePackage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/return-journey" element={<ReturnJourney />} />
          <Route path="/packages/starter" element={<StarterPackage />} />
          <Route path="/packages/pro" element={<ProPackage />} />
          <Route path="/packages/concierge" element={<ConciergePackage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
