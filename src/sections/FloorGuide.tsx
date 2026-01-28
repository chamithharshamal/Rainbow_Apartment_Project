import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, HeartPulse, Activity, Zap, Home } from 'lucide-react';

const floors = [
    {
        id: 'ground',
        title: 'Ground Floor',
        subtitle: 'The Arrival',
        description: 'Accessibility & Convenience',
        features: [
            'Smooth vehicular access via dedicated arrival ramp',
            'Well-planned parking areas for residents and visitors',
            'EV charging points supporting sustainable mobility',
            'Essential building services including backup generator',
            'Air-conditioned reception lobby with TV lounge',
            'Convenient on-site mini supermarket',
            'Café for everyday dining and casual meetings'
        ],
        image: 'https://images.unsplash.com/photo-1768346564825-6f90c0b89e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwcmVjZXB0aW9uJTIwZGFyayUyMGludGVyaW9yfGVufDF8fHx8MTc2OTU3ODczMHww&ixlib=rb-4.1.0&q=80&w=1080',
        icon: <Home className="w-6 h-6 text-gold" />
    },
    {
        id: 'first',
        title: '1st Floor',
        subtitle: 'Services & Wellness',
        description: 'Lifestyle & Healthcare Hub',
        features: [
            'Dedicated 1st floor layout designed for wellness and essential services',
            'Fully equipped ETU (Emergency Treatment Unit)',
            'On-site Laboratory for diagnostic services',
            'Pharmacy for everyday medical needs',
            'Channeling Centre for specialist consultations',
            'Cafeteria and Mini-Café for comfort and convenience',
            'Ambulance access for emergency response'
        ],
        image: 'https://images.unsplash.com/photo-1761971975973-cbb3e59263de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2VudGVyJTIwcmVjZXB0aW9uJTIwd2VsbG5lc3MlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njk1Nzg3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        icon: <HeartPulse className="w-6 h-6 text-gold" />
    },
    {
        id: 'second',
        title: '2nd Floor',
        subtitle: 'Operational Excellence',
        description: 'Building Services Hub',
        features: [
            'Dedicated second-floor layout designed to support essential building services',
            'Solar System for energy-efficient and sustainable operations',
            'Accessible parking for differently-abled users',
            'Backup generator ensuring uninterrupted power supply',
            'Well-maintained washroom facilities',
            'Dedicated laundry area for operational convenience'
        ],
        image: 'https://images.unsplash.com/photo-1643376452350-97eadd2c417f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMGdvbGQlMjBhY2NlbnRzfGVufDF8fHx8MTc2OTU3ODczMHww&ixlib=rb-4.1.0&q=80&w=1080',
        icon: <Zap className="w-6 h-6 text-gold" />
    },
    {
        id: 'third',
        title: '3rd Floor',
        subtitle: 'Special Apartments',
        description: '1115.57 Sq.Ft | Private Garden Spaces',
        features: [
            'Additional floor area offering enhanced spatial flexibility',
            'Exclusive apartments designed with private garden spaces',
            'Seamless indoor–outdoor living experience',
            'Ideal balance of privacy, openness, and luxury',
            'Includes: Living & Dining, Master Washroom, Pantry & Kitchen, Master Bedroom'
        ],
        image: 'https://images.unsplash.com/photo-1559924687-433731b5f852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwZ2FyZGVuJTIwbHV4dXJ5JTIwYXBhcnRtZW50JTIwc3Vuc2V0fGVufDF8fHx8MTc2OTU3ODczMHww&ixlib=rb-4.1.0&q=80&w=1080',
        icon: <Activity className="w-6 h-6 text-gold" />
    }
];

const FloorCard = ({ floor, index }: { floor: typeof floors[0], index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="min-h-screen flex items-center justify-center py-20 sticky top-0 bg-navy border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-15`}>

                    {/* Text Content */}
                    <div className="lg:w-1/2 mb-10 ml-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center lg:justify-start lg:pt-24 h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-gold border border-gold rounded-full p-3">
                                    {floor.icon}
                                </span>
                                <span className="text-white/60 uppercase tracking-widest text-sm font-medium">{floor.subtitle}</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                                {floor.title}
                            </h2>

                            <p className="text-xl text-white/80 mb-8 font-light italic">
                                {floor.description}
                            </p>

                            <div className="space-y-4">
                                {floor.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="w-5 h-5 text-gold mt-1 shrink-0" />
                                        <span className="text-white/80 font-light">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-[40%] w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl"
                        >
                            <img
                                src={floor.image}
                                alt={floor.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};



// ... (floors array remains the same)

// ... (FloorCard component remains the same)

export default function FloorGuide() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="floors" className="bg-navy relative">
            {/* Header */}
            <div className="bg-navy pt-24 pb-10 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto px-6 h-full"
                >
                    <span className="text-gold text-sm font-medium tracking-widest uppercase">
                        Floor Guide
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Explore Our Spaces
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                        Navigate through the levels of luxury. From the welcoming ground floor to the exclusive private gardens above, discover a layout designed for modern living.
                    </p>
                </motion.div>
            </div>

            {floors.map((floor, index) => (
                <FloorCard key={floor.id} floor={floor} index={index} />
            ))}
        </section>
    );
};
