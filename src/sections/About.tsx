import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Eye, Heart, Building2 } from 'lucide-react';

const stats = [
  { icon: Award, value: '30+', label: 'Years Experience' },
  { icon: Eye, value: '360°', label: 'Panoramic Views' },
  { icon: Heart, value: '24/7', label: 'Healthcare' },
  { icon: Building2, value: '15+', label: 'Premium Amenities' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                About Us
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
                Building Futures,
                <br />
                Creating Homes
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-charcoal/80 leading-relaxed mb-6"
            >
              We are a forward-thinking real estate development company committed
              to creating architectural landmarks that elevate modern living in
              Sri Lanka. With a strong foundation built on trust, quality, and
              innovation, our journey has been shaped by a passion for delivering
              thoughtfully designed spaces that stand the test of time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal/80 leading-relaxed mb-8"
            >
              Our mission is to design and develop exceptional residential spaces
              that elevate modern living through thoughtful architecture,
              superior craftsmanship, and uncompromising quality.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <div className="font-serif text-2xl md:text-3xl font-bold text-navy">
                    {stat.value}
                  </div>
                  <div className="text-sm text-charcoal/60 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold" />

              {/* Main image */}
              <div className="relative overflow-hidden img-zoom">
                <img
                  src="/images/about.webp"
                  alt="Rainbow Apartments Building"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-navy text-white p-6 shadow-xl"
              >
                <div className="font-serif text-3xl font-bold text-gold">
                  2025
                </div>
                <div className="text-sm text-white/80">Completion Year</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
