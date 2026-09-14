import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* New Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-xl p-8 sm:p-10 text-primary-foreground"
          >
            <h2 className="text-2xl sm:text-3xl font-black mb-3">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 mb-6">
              Schedule a free consultation to discuss your technology needs. We'll provide a customized plan — no pressure, no jargon.
            </p>
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Existing Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 sm:p-10 border border-border"
          >
            <div className="flex items-center gap-3 mb-3">
              <LifeBuoy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">Need Support?</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Already a client? Submit a support ticket and our team will respond promptly. Emergency support available 24/7.
            </p>
            <Button size="lg" variant="outline" className="font-bold" asChild>
              <Link to="/support-form">Submit Support Ticket</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
