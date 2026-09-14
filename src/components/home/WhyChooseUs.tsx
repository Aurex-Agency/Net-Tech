import { motion } from "framer-motion";
import { MapPin, Award, Heart } from "lucide-react";
import handshakeImage from "@/assets/team_handshake.png";

const points = [
  {
    icon: MapPin,
    title: "Local & Trusted",
    description: "We're right here in New Albany, ready to help whenever you need us.",
  },
  {
    icon: Award,
    title: "15+ Years of Experience",
    description: "Proven expertise for your peace of mind, backed by Ubiquiti certification.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "We treat your business like our own — because your success is our success.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden order-2 lg:order-1"
          >
            <img
              src={handshakeImage}
              alt="Net-Tech building personal relationships with clients"
              className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-6">
              Your Local Partner in Technology
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              When you work with Net-Tech, you're not just another ticket number. You're a neighbor, and we'll always go the extra mile for you.
            </p>

            <div className="space-y-6">
              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
