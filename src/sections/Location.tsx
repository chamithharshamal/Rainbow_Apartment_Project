import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Waves, Building, Car, GraduationCap, Stethoscope } from 'lucide-react';

const locationHighlights = [
  {
    icon: Waves,
    title: 'Panoramic Views',
    description: 'Sea, Lagoon & Bolgoda Lake',
  },
  {
    icon: Building,
    title: 'City Access',
    description: 'Close proximity to Colombo',
  },
  {
    icon: Car,
    title: 'Connectivity',
    description: 'Major transport routes',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Nearby schools & colleges',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Hospitals & clinics',
  },
  {
    icon: MapPin,
    title: 'Convenience',
    description: 'Shopping & entertainment',
  },
];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold" />

              {/* Main image */}
              <div className="relative overflow-hidden img-zoom">
                <img
                  src="/images/location.webp"
                  alt="Rooftop view with sea and landscape"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -left-4 bg-gold text-navy p-4 shadow-xl"
              >
                <MapPin className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Location
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
                Rathmalana,
                <br />
                Sri Lanka
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                Perfectly positioned to offer the best of both worlds - tranquil
                coastal living with easy city access. Rainbow Apartments
                provides a serene retreat while keeping you connected to
                everything you need.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              {locationHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="text-center p-4 bg-white hover:bg-navy group transition-colors duration-300"
                >
                  <highlight.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <h4 className="font-medium text-navy group-hover:text-white text-sm mb-1 transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-xs text-charcoal/60 group-hover:text-white/70 transition-colors">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
