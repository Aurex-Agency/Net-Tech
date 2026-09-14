import { motion } from "framer-motion";
import communityImage from "@/assets/community_trust.png";
import heroImage from "@/assets/hero_local_tech.png";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6">
                Meet Your Local IT Expert
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Net-Tech was founded with a simple idea: small businesses in New Albany deserve the same quality IT support as the big guys — but with a personal touch.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For over 15 years, we've been helping local businesses stay connected, secure, and running smoothly. We're not a faceless corporation — we're your neighbors, and we take pride in building lasting relationships with every client we serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl overflow-hidden"
            >
              <img src={heroImage} alt="Brian from Net-Tech" className="w-full h-64 sm:h-80 lg:h-96 object-cover" loading="eager" fetchPriority="high" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden order-2 lg:order-1"
            >
              <img src={communityImage} alt="Net-Tech storefront on Main Street" className="w-full h-64 sm:h-80 lg:h-96 object-cover" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-6">
                Rooted in the Community
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Located right on Main Street in New Albany, we're part of the fabric of this community. We understand the unique challenges that local businesses face because we face them too.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you call Net-Tech, you'll talk to a real person who knows your name, understands your setup, and genuinely cares about keeping your business running. That's the Net-Tech difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-12">Our Promise To You</h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Honest Advice", desc: "We'll never sell you something you don't need. We recommend what's best for your business, period." },
              { title: "Fast Response", desc: "When something breaks, every minute counts. We respond quickly because we know your business depends on it." },
              { title: "Plain English", desc: "No confusing tech jargon. We explain things clearly so you always know what's happening and why." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 sm:p-8 border border-border"
              >
                <h3 className="font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
