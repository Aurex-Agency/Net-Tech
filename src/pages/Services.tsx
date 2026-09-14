import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Cloud, MapPin, Wifi, ShieldCheck, Server, Settings, TrendingUp, Headphones } from "lucide-react";
// Layout is now in App.tsx
import ServicePanel from "@/components/services/ServicePanel";
import { panelData } from "@/components/services/servicePanelData";

import teamImg from "@/assets/team_handshake.png";
import heroTechImg from "@/assets/hero_local_tech.png";
import communityImg from "@/assets/community_trust.png";

/* ─── data ─── */

const heroTabs = [
{ id: "networking", label: "Networking", icon: Wifi },
{ id: "security", label: "Physical Security", icon: ShieldCheck },
{ id: "cloud", label: "Cloud Integrations", icon: Cloud },
{ id: "multisite", label: "Multi-Site Management", icon: MapPin }];


const advantageTabs = [
{
  id: "equipment",
  label: "Professional-Grade Equipment",
  icon: Server,
  title: "Built to Perform, Built to Last.",
  bullets: [
  "Obsessive attention to detail in every installation.",
  "No hidden fees or subscriptions — ever.",
  "Only the best Ubiquiti hardware, professionally deployed."],

  image: heroTechImg
},
{
  id: "management",
  label: "Hassle-Free Management",
  icon: Settings,
  title: "Plug-and-Play Simplicity.",
  bullets: [
  "Intuitive setup and management interfaces.",
  "Interfaces crafted for usability, not complexity.",
  "We manage it all for you, seamlessly."],

  image: teamImg
},
{
  id: "growth",
  label: "Solutions That Grow With You",
  icon: TrendingUp,
  title: "Scales Wide, Scales Tall.",
  bullets: [
  "From starter setups to large offices.",
  "Redundant architecture for reliability.",
  "Grows with your business needs."],

  image: heroTechImg
},
{
  id: "support",
  label: "Proactive Support & Maintenance",
  icon: Headphones,
  title: "Updates that Keep Giving.",
  bullets: [
  "Constant innovation, zero extra fees.",
  "Rapid security advancements.",
  "The best IT investment you can make."],

  image: heroTechImg
}];


/* ─── scroll animation hook ─── */

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

const FadeSection = ({ children, className = "" }: {children: React.ReactNode;className?: string;}) => {
  const { ref, visible } = useScrollFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>

      {children}
    </div>);

};

/* ─── pill tab component ─── */

const PillTabs = ({
  tabs,
  activeId,
  onSelect




}: {tabs: {id: string;label: string;icon: React.ElementType;}[];activeId: string;onSelect: (id: string) => void;}) =>
<div className="flex flex-wrap justify-center gap-2 sm:gap-3">
    {tabs.map((tab) => {
    const Icon = tab.icon;
    const active = tab.id === activeId;
    return (
      <button
        key={tab.id}
        onClick={() => onSelect(tab.id)}
        className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
            border transition-all duration-200 ease-out cursor-pointer select-none
            hover:scale-[1.03] hover:shadow-md
            ${active ?
        "bg-[#3B82F6] text-white border-[#3B82F6] shadow-lg shadow-[#3B82F6]/20" :
        "bg-white text-[#222] border-[#e0e0e0] hover:border-[#3B82F6]/40"}
          `
        }>

          <Icon className="w-4 h-4" />
          {tab.label}
        </button>);

  })}
  </div>;


/* ─── page ─── */

const Services = () => {
  const [heroTab, setHeroTab] = useState("networking");
  const [advantageTab, setAdvantageTab] = useState("equipment");

  const activeAdvantage = advantageTabs.find((t) => t.id === advantageTab)!;

  return (
    <div className="font-['Inter',system-ui,sans-serif] bg-white text-[#222]">

        {/* ─── Section 1: Hero ─── */}
        <section className="pt-16 pb-8 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-4xl mx-auto mb-8">

            Building the Future of IT for Mississippi Businesses.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>

            <PillTabs
              tabs={heroTabs}
              activeId={heroTab}
              onSelect={setHeroTab} />

          </motion.div>
        </section>

        {/* ─── Section 2: Interactive Rich Content Showcase ─── */}
        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}>

                <ServicePanel data={panelData[heroTab]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ─── Section 3: The Net-Tech Advantage ─── */}
        <section className="py-20 px-6 bg-white">
          <FadeSection className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8">
              The Net-Tech Advantage
            </h2>
            <PillTabs
              tabs={advantageTabs}
              activeId={advantageTab}
              onSelect={setAdvantageTab} />

          </FadeSection>

          <div className="max-w-6xl mx-auto mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAdvantage.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-10 items-center">

                {/* Left: text */}
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {activeAdvantage.title}
                  </h3>
                  <ul className="space-y-4">
                    {activeAdvantage.bullets.map((b, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#3B82F6] mt-0.5 shrink-0" />
                        <span className="text-[#444] text-base leading-relaxed">{b}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Right: image */}
                <div className="rounded-2xl overflow-hidden shadow-sm bg-[#f8f9fa]">
                  <img
                    src={activeAdvantage.image}
                    alt={activeAdvantage.title}
                    className="w-full h-[300px] sm:h-[380px] object-cover"
                    loading="lazy"
                    decoding="async" />

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ─── Section 4: Trusted Testimonial ─── */}
        <section className="py-24 px-6 bg-[#f8f9fa]">
          <FadeSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-12">
              Trusted by Businesses Like Yours
            </h2>
            <blockquote className="text-xl sm:text-2xl leading-relaxed text-[#333] italic mb-8">
              "Net-Tech transformed our entire network infrastructure. The Ubiquiti setup they designed is rock-solid and we couldn't be happier."
            </blockquote>
            <p className="text-base font-semibold text-[#555]">
              — Michael Chen, TechStart Solutions
            </p>
          </FadeSection>
        </section>

        {/* ─── Section 5: Final CTA ─── */}
        <section className="relative py-28 px-6 overflow-hidden" style={{ backgroundColor: "#0a0f1e" }}>
          {/* bg overlay */}
          <div className="absolute inset-0">
            <img
              src={communityImg}
              alt=""
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
              decoding="async" />

            <div className="absolute inset-0 bg-[#0a0f1e]/80" />
          </div>

          <FadeSection className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Networking, Security, and More. Unified by a Local Expert.

            </h2>
            <p className="text-lg text-white/60 mb-10">
              Seamless, reliable IT solutions for businesses in New Albany and beyond.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white text-white font-bold text-base
                transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-lg hover:shadow-white/10 hover:bg-white/10">

              Get Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeSection>
        </section>

      </div>);

};

export default Services;