import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, Wifi, Cloud, Camera } from "lucide-react";
import networkImage from "@/assets/local_business_network.png";

const services = [
  {
    icon: Monitor,
    title: "Managed IT",
    description: "We keep your systems running so you can focus on your business. Proactive monitoring and fast help desk support.",
  },
  {
    icon: Wifi,
    title: "Network & Security",
    description: "We build rock-solid, reliable networks for local businesses using top-quality Ubiquiti equipment.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless migration, secure backups, and Microsoft 365 or Google Workspace setup — we've got you covered.",
  },
  {
    icon: Camera,
    title: "Security Cameras",
    description: "Professional Ubiquiti camera installation with remote monitoring to protect your business around the clock.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4"
          >
            How We Help Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From everyday IT support to complete network buildouts, we provide the technology solutions your business needs to thrive.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 sm:p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Network image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <img
            src={networkImage}
            alt="Professional network installation by Net-Tech"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
