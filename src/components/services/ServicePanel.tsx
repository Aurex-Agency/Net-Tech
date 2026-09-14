import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServicePanelData {
  stats: { value: string; label: string }[];
  deliverables: string[];
  features: { icon: LucideIcon; name: string; description: string }[];
}

const ServicePanel = ({ data }: { data: ServicePanelData }) => (
  <div className="space-y-16">
    {/* Part A: Stats */}
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#3B82F6] mb-8 text-center">
        Why It Matters
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {data.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl sm:text-5xl font-black text-[#222]">{s.value}</p>
            <p className="mt-2 text-sm text-[#555] leading-relaxed max-w-[260px] mx-auto">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Part B: Deliverables */}
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#3B82F6] mb-8 text-center">
        What We Do
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
        {data.deliverables.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-[#3B82F6] mt-0.5 shrink-0" />
            <span className="text-[#333] text-base">{d}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Part C: Feature Grid */}
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#3B82F6] mb-8 text-center">
        What You Get
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {data.features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="bg-[#f8f9fa] rounded-xl p-6 hover:shadow-md hover:scale-[1.03] transition-all duration-200"
            >
              <Icon className="w-6 h-6 text-[#3B82F6] mb-3" />
              <p className="font-bold text-[#222] mb-1">{f.name}</p>
              <p className="text-sm text-[#555] leading-relaxed">{f.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
);

export default ServicePanel;
