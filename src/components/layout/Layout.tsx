import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {/* Desktop scroll progress rail */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <ScrollProgress variant="desktop" />
      </div>
      <main className="flex-1 pt-20">{children}</main>
      {/* Mobile scroll progress bar */}
      <ScrollProgress variant="mobile" />
      <Footer />
    </div>
  );
};

export default Layout;
