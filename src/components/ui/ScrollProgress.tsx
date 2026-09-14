import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const nodes = [
  { position: 0 },
  { position: 25 },
  { position: 50 },
  { position: 75 },
  { position: 100 },
];

// Ubiquiti AP light blue glow color token
const AP = "var(--ap-glow)";

interface ScrollProgressProps {
  variant: "desktop" | "mobile";
}

const ScrollProgress = ({ variant }: ScrollProgressProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>();
  const lastScrollRef = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) { setScrollProgress(0); return; }

        const progress = (scrollTop / docHeight) * 100;
        const clamped = Math.max(0, Math.min(100, progress));
        const smooth = lastScrollRef.current + (clamped - lastScrollRef.current) * 0.3;
        lastScrollRef.current = smooth;

        setScrollProgress(smooth);
        setIsVisible(scrollTop > 50);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (variant === "desktop" && isMobile) return null;
  if (variant === "mobile" && !isMobile) return null;

  if (variant === "desktop") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative h-64 w-8 flex flex-col items-center"
      >
        <div className="absolute top-0 bottom-0 w-[2px] bg-border/50 rounded-full left-1/2 -translate-x-1/2" />

        <div
          className="absolute top-0 w-[2px] rounded-full left-1/2 -translate-x-1/2 transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%`, background: `hsl(${AP} / 0.6)` }}
        />

        {/* Glowing progress head */}
        <div
          className="absolute w-[3px] h-8 rounded-full left-1/2 -translate-x-1/2 transition-all duration-150 ease-out"
          style={{
            top: `calc(${scrollProgress}% - 16px)`,
            background: `linear-gradient(180deg, transparent, hsl(${AP}), transparent)`,
            boxShadow: `0 0 12px hsl(${AP}), 0 0 24px hsl(${AP} / 0.4)`,
            opacity: scrollProgress > 0 ? 1 : 0,
          }}
        />

        {nodes.map((node, index) => {
          const isPassed = scrollProgress >= node.position - 2;
          const isCurrent = isPassed && (index === nodes.length - 1 || scrollProgress < nodes[index + 1].position - 2);

          return (
            <div
              key={index}
              className="absolute flex items-center justify-center left-1/2"
              style={{ top: `${node.position}%`, transform: "translate(-50%, -50%)" }}
            >
              {/* Outer glow ring */}
              <motion.div
                className={`absolute w-5 h-5 rounded-full transition-all duration-500 ${isPassed ? "opacity-100" : "opacity-0"}`}
                style={{
                  background: isPassed
                    ? `conic-gradient(from 180deg, hsl(${AP} / 0.8), hsl(${AP}), hsl(${AP} / 0.8))`
                    : "transparent",
                  boxShadow: isPassed
                    ? `0 0 12px hsl(${AP} / 0.6), 0 0 24px hsl(${AP} / 0.3), inset 0 0 8px hsl(${AP} / 0.4)`
                    : "none",
                }}
                animate={isCurrent ? {
                  boxShadow: [
                    `0 0 12px hsl(${AP} / 0.6), 0 0 24px hsl(${AP} / 0.3), inset 0 0 8px hsl(${AP} / 0.4)`,
                    `0 0 18px hsl(${AP} / 0.8), 0 0 36px hsl(${AP} / 0.5), inset 0 0 12px hsl(${AP} / 0.6)`,
                    `0 0 12px hsl(${AP} / 0.6), 0 0 24px hsl(${AP} / 0.3), inset 0 0 8px hsl(${AP} / 0.4)`,
                  ],
                } : {}}
                transition={isCurrent ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
              />

              {/* Inner ring */}
              <div
                className={`absolute w-4 h-4 rounded-full transition-all duration-500 ${isPassed ? "opacity-100" : "opacity-30"}`}
                style={{
                  background: isPassed ? `radial-gradient(circle at 30% 30%, hsl(${AP} / 0.3), transparent 60%)` : "transparent",
                  border: isPassed ? `1.5px solid hsl(${AP})` : "1.5px solid hsl(var(--muted-foreground) / 0.3)",
                }}
              />

              {/* White center */}
              <div
                className={`relative w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  isPassed ? "bg-gradient-to-br from-white via-gray-100 to-gray-200" : "bg-gradient-to-br from-muted to-muted-foreground/20"
                }`}
                style={{
                  boxShadow: isPassed
                    ? "0 1px 4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.8)"
                    : "0 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-all duration-500 ${
                  isPassed ? "bg-muted-foreground/40" : "bg-muted-foreground/20"
                }`} />
              </div>
            </div>
          );
        })}
      </motion.div>
    );
  }

  // Mobile: Horizontal progress bar
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-background/80 backdrop-blur-sm border-t border-border/30 px-4 py-3 pb-safe">
        <div className="relative h-6 flex items-center justify-center">
          <div className="absolute left-4 right-4 h-[2px] bg-border/50 rounded-full top-1/2 -translate-y-1/2" />

          <div
            className="absolute left-4 h-[2px] rounded-full top-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
            style={{ width: `calc(${scrollProgress}% * 0.92)`, background: `hsl(${AP} / 0.6)` }}
          />

          <div
            className="absolute h-[3px] w-6 rounded-full top-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
            style={{
              left: `calc(16px + ${scrollProgress}% * 0.92 - 12px)`,
              background: `linear-gradient(90deg, transparent, hsl(${AP}), transparent)`,
              boxShadow: `0 0 8px hsl(${AP}), 0 0 16px hsl(${AP} / 0.4)`,
              opacity: scrollProgress > 0 ? 1 : 0,
            }}
          />

          {nodes.map((node, index) => {
            const isPassed = scrollProgress >= node.position - 2;
            const isCurrent = isPassed && (index === nodes.length - 1 || scrollProgress < nodes[index + 1].position - 2);

            return (
              <div
                key={index}
                className="absolute flex items-center justify-center top-1/2 -translate-y-1/2"
                style={{ left: `calc(16px + ${node.position}% * 0.92)`, transform: "translate(-50%, -50%)" }}
              >
                <motion.div
                  className={`absolute w-4 h-4 rounded-full transition-all duration-500 ${isPassed ? "opacity-100" : "opacity-0"}`}
                  style={{
                    background: isPassed ? `conic-gradient(from 180deg, hsl(${AP} / 0.8), hsl(${AP}), hsl(${AP} / 0.8))` : "transparent",
                    boxShadow: isPassed ? `0 0 8px hsl(${AP} / 0.6), 0 0 16px hsl(${AP} / 0.3)` : "none",
                  }}
                  animate={isCurrent ? {
                    boxShadow: [
                      `0 0 8px hsl(${AP} / 0.6), 0 0 16px hsl(${AP} / 0.3)`,
                      `0 0 12px hsl(${AP} / 0.8), 0 0 24px hsl(${AP} / 0.5)`,
                      `0 0 8px hsl(${AP} / 0.6), 0 0 16px hsl(${AP} / 0.3)`,
                    ],
                  } : {}}
                  transition={isCurrent ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                />

                <div
                  className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${isPassed ? "opacity-100" : "opacity-30"}`}
                  style={{
                    background: isPassed ? `radial-gradient(circle at 30% 30%, hsl(${AP} / 0.3), transparent 60%)` : "transparent",
                    border: isPassed ? `1px solid hsl(${AP})` : "1px solid hsl(var(--muted-foreground) / 0.3)",
                  }}
                />

                <div
                  className={`relative w-2 h-2 rounded-full transition-all duration-500 ${
                    isPassed ? "bg-gradient-to-br from-white via-gray-100 to-gray-200" : "bg-gradient-to-br from-muted to-muted-foreground/20"
                  }`}
                  style={{
                    boxShadow: isPassed
                      ? "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.8)"
                      : "0 1px 2px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollProgress;
