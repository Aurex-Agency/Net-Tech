import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero_local_tech.png";
import InteractiveBackground from "./InteractiveBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Net-Tech technician" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Interactive particle overlay - kept as requested */}
      <div className="absolute inset-0 w-full h-full">
        <InteractiveBackground />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6"
          >
            Reliable IT Support for Your Mississippi Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-white/85 mb-8 max-w-xl"
          >
            Friendly, local, and certified expertise in networking, security, and managed IT services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8" asChild>
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
