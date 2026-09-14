import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Net-Tech transformed our entire network infrastructure. The Ubiquiti setup they designed is rock-solid and we couldn't be happier.",
    author: "Michael Chen",
    company: "TechStart Solutions",
  },
  {
    id: 2,
    quote: "After years of IT headaches, finding Net-Tech was a game-changer. Their response time is incredible and they always explain things clearly.",
    author: "Sarah Johnson",
    company: "Meridian Manufacturing",
  },
  {
    id: 3,
    quote: "The camera system they installed gives us complete visibility across all our locations. Professional work from start to finish.",
    author: "David Rodriguez",
    company: "StoreSafe Properties",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) =>
      newDirection === 1
        ? prev === testimonials.length - 1 ? 0 : prev + 1
        : prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-10"
          >
            What Our Neighbors Are Saying
          </motion.h2>

          <div className="relative min-h-[200px] sm:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <p className="font-bold text-foreground">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => paginate(-1)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-accent w-6" : "bg-muted-foreground/30"}`}
                  aria-label={`Go to ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={() => paginate(1)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
