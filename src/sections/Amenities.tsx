import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HeartPulse,
  Stethoscope,
  FlaskConical,
  Pill,
  Ambulance,
  Dumbbell,
  Trees,
  Gamepad2,
  Table2,
  Baby,
  BookOpen,
  Coffee,
  ShoppingCart,
  Users,
  Briefcase,
  Zap,
  BatteryCharging,
} from 'lucide-react';

const amenityCategories = [
  {
    title: 'Healthcare & Wellness',
    description: 'Comprehensive care facilities ensuring your well-being is always prioritized.',
    amenities: [
      { icon: HeartPulse, label: '24/7 Nurse Call System' },
      { icon: Stethoscope, label: 'On-site ETU' },
      { icon: FlaskConical, label: 'Laboratory' },
      { icon: Pill, label: 'Pharmacy' },
      { icon: Ambulance, label: 'Ambulance Service' },
      { icon: Dumbbell, label: 'Fitness Centre' },
    ],
  },
  {
    title: 'Lifestyle & Recreation',
    description: 'Curated spaces designed for relaxation, entertainment, and community bonding.',
    amenities: [
      { icon: Trees, label: 'Rooftop Garden' },
      { icon: Gamepad2, label: 'Elder Entertainment' },
      { icon: Table2, label: 'Table Tennis' },
      { icon: Baby, label: 'Kids Play Area' },
      { icon: BookOpen, label: 'Mini Library' },
      { icon: Users, label: 'Daycare & Nursery' },
    ],
  },
  {
    title: 'Convenience',
    description: 'Essential services and modern utilities for a seamless, hassle-free lifestyle.',
    amenities: [
      { icon: Coffee, label: 'Ground Floor Café' },
      { icon: ShoppingCart, label: 'Mini Supermarket' },
      { icon: Briefcase, label: 'Meeting Room' },
      { icon: Users, label: 'Office Cabin' },
      { icon: Zap, label: 'EV Charging' },
      { icon: BatteryCharging, label: 'Backup Generator' },
    ],
  },
];

export default function Amenities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Services & Facilities
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a2744] mb-6">
            Curated for <span className="text-gold">Comfort</span>
          </h2>
          <p className="text-[#1a2744]/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Beyond just amenities, we offer a suite of services designed to make everyday living effortless and enjoyable.
          </p>
        </motion.div>

        {/* Service Cards Layout */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {amenityCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="bg-white p-8 lg:p-10 border-t-4 border-gold shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 relative group"
            >
              {/* Decorative Number */}
              <div className="absolute top-4 right-6 text-9xl font-serif text-navy/5 font-bold select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-500">
                0{catIndex + 1}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-[#1a2744] mb-4 group-hover:text-gold transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-[#1a2744]/60 text-sm mb-8 leading-relaxed min-h-[40px]">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.amenities.map((amenity, index) => (
                    <motion.div
                      key={amenity.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + catIndex * 0.1 + index * 0.05 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center group-hover/item:bg-gold/10 transition-colors duration-300 flex-shrink-0">
                        <amenity.icon className="w-4 h-4 text-[#1a2744] group-hover/item:text-gold transition-colors duration-300" />
                      </div>
                      <span className="text-[#1a2744]/80 text-sm font-medium group-hover/item:text-[#1a2744] transition-colors duration-300">
                        {amenity.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
