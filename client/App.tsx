import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Statement from "./pages/Statement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cv" element={<Placeholder title="CV" />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/projects" element={<Placeholder title="Projects" />} />
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/live-sound" element={<Placeholder title="Live Sound" />} />
          <Route path="/light-staging" element={<Placeholder title="Light Staging" />} />
          <Route path="/events" element={<Placeholder title="Events" />} />
          <Route path="/commercial" element={<Placeholder title="Commercial" />} />
          <Route path="/art" element={<Placeholder title="Art" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root")!;
if (!rootElement._reactRoot) {
  const root = createRoot(rootElement);
  rootElement._reactRoot = root;
  root.render(<App />);
} else {
  rootElement._reactRoot.render(<App />);
}
