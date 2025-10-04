import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Team from "./pages/team";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import BranchCupWinners from "./pages/BranchCupWinners";
import AntiRaggingWeek from "./pages/AntiRaggingWeek";
import AltronixCommittee from "./pages/AltronixCommittee";
import AIPLRegistration from "./pages/AIPLRegistration";

const queryClient = new QueryClient();

// 🔹 Normalize /index.html → /
const NormalizeIndexHtml = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/index.html") {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Fix for /index.html */}
        <NormalizeIndexHtml />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/committee" element={<AltronixCommittee />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/branch-cup-winners" element={<BranchCupWinners />} />
          <Route path="/anti-ragging-week" element={<AntiRaggingWeek />} />
          <Route path="/aipl-registration" element={<AIPLRegistration />} />

          {/* ✅ Debug route to test deep linking */}
          <Route path="/__deeplink-test" element={<div style={{ padding: 40 }}>DEEPLINK TEST OK</div>} />

          {/* ✅ Explicit redirect if someone hits /index.html */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


