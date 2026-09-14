import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import TicketClaimed from "./pages/TicketClaimed";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

/** Route table, separated from the router so tests can mount it in a MemoryRouter. */
export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support-form" element={<Support />} />
        <Route path="/ticketclaimed" element={<TicketClaimed />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    <Toaster />
  </>
);

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
