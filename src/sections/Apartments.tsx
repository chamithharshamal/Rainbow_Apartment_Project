import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bed, Bath, ArrowRight } from 'lucide-react';

const apartments = [
  {
    id: 1,
    name: 'Two Bedroom',
    size: '1,012 - 1,324',
    unit: 'Sq.Ft',
    bedrooms: 2,
    bathrooms: 2,
    features: ['Balcony', 'City Views'],
    description:
      'Perfect for young professionals and small families seeking modern comfort with stunning views.',
    image: '/images/apt-2bed.webp',
  },
  {
    id: 2,
    name: 'Three Bedroom',
    size: '1,420 - 1,529',
    unit: 'Sq.Ft',
    bedrooms: 3,
    bathrooms: 2,
    features: ['Balcony', 'Sea Views'],
    description:
      'Spacious living for growing families who appreciate luxury, space, and panoramic vistas.',
    image: '/images/apt-3bed.webp',
  },
  {
    id: 3,
    name: 'Special Garden',
    size: '1,115',
    unit: 'Sq.Ft',
    bedrooms: 2,
    bathrooms: 2,
    features: ['Private Garden', 'Premium Finish'],
    description:
      'Exclusive apartments with private garden spaces for seamless indoor-outdoor living.',
    image: '/images/apt-special.webp',
  },
];

export default function Apartments() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="apartments" className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Apartments
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Residences Designed for Distinction
          </h2>
          <p className="text-white/70 leading-relaxed">
            Each apartment is thoughtfully planned to deliver a seamless balance
            of privacy, comfort, and sophistication.
          </p>
        </motion.div>

        {/* Apartment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt, index) => (
            <motion.div
              key={apt.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden img-zoom">
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 text-sm font-medium">
                  {apt.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Size */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-serif text-3xl font-bold text-white">
                    {apt.size}
                  </span>
                  <span className="text-white/60 text-sm">{apt.unit}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-4 text-sm text-white/70">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-gold" />
                    <span>{apt.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-gold" />
                    <span>{apt.bathrooms} Baths</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {apt.description}
                </p>

                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {apt.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white/10 text-white/80 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white font-medium group/link"
                >
                  <span className="border-b border-transparent group-hover/link:border-gold transition-colors">
                    Inquire Now
                  </span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
