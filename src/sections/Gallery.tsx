import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/gallery-1.webp',
    alt: 'Living Room',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/gallery-2.webp',
    alt: 'Dining Room',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/apt-2bed.webp',
    alt: 'Two Bedroom Interior',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/apt-3bed.webp',
    alt: 'Three Bedroom Interior',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/apt-special.webp',
    alt: 'Special Garden Apartment',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="bg-white py-24 lg:py-32">
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
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Step Inside Your New Home
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            Experience the warmth and sophistication of Rainbow Apartments
            interiors, designed with meticulous attention to detail.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-navy" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
