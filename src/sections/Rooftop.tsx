import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
    Dumbbell,
    BookOpen,
    Baby,
    Music,
    Users,
    Presentation,
    ChevronLeft,
    ChevronRight,
    Table2,
    Briefcase,
    Bath
} from "lucide-react";

// Types
interface Amenity {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
    size: "large" | "medium" | "small";
    image?: string;
}

// Data
const amenities: Amenity[] = [
    {
        id: "fitness",
        name: "Sky Fitness Centre",
        description: "State-of-the-art equipment with panoramic views.",
        icon: Dumbbell,
        size: "medium",
        image: "/images/amenity-fitness.webp"
    },
    {
        id: "zumba",
        name: "Indoor Zumba",
        description: "Dedicated rhythm and dance fitness studio.",
        icon: Music,
        size: "medium",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: "meeting",
        name: "Rentable Meeting Rooms",
        description: "Professional spaces for business gatherings.",
        icon: Presentation,
        size: "small",
        image: "/images/amenity-meeting.webp"
    },
    {
        id: "office",
        name: "Office Cabin Area",
        description: "Private workspaces for remote productivity.",
        icon: Briefcase,
        size: "small",
        image: "/images/office.jpeg"
    },
    {
        id: "kids",
        name: "Kids Play Area",
        description: "Safe, engaging fun for little ones.",
        icon: Baby,
        size: "large",
        image: "/images/kids.jpeg"
    },
    {
        id: "daycare",
        name: "Daycare & Nursery",
        description: "Trusted care facility for residents' children.",
        icon: Baby,
        size: "medium",
        image: "/images/daycare.jpeg"
    },
    {
        id: "library",
        name: "Mini Library",
        description: "Quiet haven for book lovers.",
        icon: BookOpen,
        size: "small",
        image: "/images/library.jpeg"
    },
    {
        id: "elders",
        name: "Elder's Entertainment",
        description: "Relaxing socialization lounge for seniors.",
        icon: Users,
        size: "small",
        image: "/images/amenity-entertainment.webp"
    },
    {
        id: "tt",
        name: "Table Tennis Area",
        description: "Recreation spot for active leisure.",
        icon: Table2,
        size: "small",
        image: "/images/amenity-tennis.webp"
    },
    {
        id: "washroom",
        name: "Luxury Washrooms",
        description: "Premium facilities for convenience.",
        icon: Bath,
        size: "small",
        image: "/images/washroom.jpeg"
    },
];

// Size configurations
const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
};

// Components
const ScrollReveal = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

function AmenityCard({ amenity }: { amenity: Amenity }) {
    const Icon = amenity.icon;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative h-full bg-white border border-[#1a2744]/10 overflow-hidden transition-all duration-300 hover:border-gold/50 rounded-lg shadow-lg hover:shadow-2xl"
        >
            {/* Background Image if available */}
            {amenity.image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={amenity.image}
                        alt={amenity.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Strong bottom gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
            )}

            {/* No image fallback with gold gradient */}
            {!amenity.image && (
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-gold/10 to-white z-0" />
            )}

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/30 group-hover:border-gold/60 transition-colors z-20 rounded-tr-lg" />

            {/* Content positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gold/90 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors shadow-lg">
                        <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-serif text-lg font-bold text-white mb-1 leading-tight drop-shadow-lg">{amenity.name}</h3>
                        <p className="text-white/90 text-xs leading-relaxed drop-shadow-md">{amenity.description}</p>
                    </div>
                </div>

                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-gold/50 group-hover:w-full group-hover:bg-gold transition-all duration-500" />
            </div>
        </motion.div>
    );
}

export default function Rooftop() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="rooftop" className="bg-white py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-12 lg:mb-16">
                        <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                            Rooftop Lifestyle
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a2744] mb-6">
                            Elevate Your <span className="text-gold">Everyday</span>
                        </h2>
                        <p className="text-[#1a2744]/70 max-w-2xl mx-auto text-lg leading-relaxed">
                            A curated collection of rooftop amenities designed to enhance your lifestyle, leisure, and well-being.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Mobile Carousel */}
                {isMobile ? (
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            onScroll={checkScroll}
                            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {amenities.map((amenity, index) => (
                                <motion.div
                                    key={amenity.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex-shrink-0 w-[280px] snap-center h-[280px]"
                                >
                                    <AmenityCard amenity={amenity} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll buttons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <button
                                onClick={() => scroll("left")}
                                disabled={!canScrollLeft}
                                className={`p-2 rounded-full border transition-colors ${canScrollLeft
                                    ? "border-gold text-gold hover:bg-gold hover:text-[#1a2744]"
                                    : "border-[#1a2744]/10 text-[#1a2744]/30 cursor-not-allowed"
                                    }`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                disabled={!canScrollRight}
                                className={`p-2 rounded-full border transition-colors ${canScrollRight
                                    ? "border-gold text-gold hover:bg-gold hover:text-[#1a2744]"
                                    : "border-[#1a2744]/10 text-[#1a2744]/30 cursor-not-allowed"
                                    }`}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Desktop Bento Grid */
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
                        {amenities.map((amenity) => (
                            <StaggerItem key={amenity.id} className={sizeClasses[amenity.size]}>
                                <AmenityCard amenity={amenity} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                )}
            </div>
        </section>
    );
}
