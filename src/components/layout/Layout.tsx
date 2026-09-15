import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";
import { Toaster } from "@/components/ui/sonner";

/** App shell wrapping every route. */
const Layout = () => (
  <div className="flex min-h-screen flex-col bg-base">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>
    <ScrollToTop />
    <Header />
    <main id="main" className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <Toaster />
  </div>
);

export default Layout;
