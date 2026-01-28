import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Contact Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Begin Your Journey Home
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Schedule a visit to experience Rainbow Apartments in person. Our
              team is ready to assist you in finding your perfect home.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/80">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+94 70 707 4470"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold text-navy hover:bg-gold-light font-medium py-6"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-12"
          >
            <div className="bg-white/5 p-8 lg:p-12 h-full">
              <h3 className="font-serif text-2xl font-bold text-white mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+94707074470"
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      +94 70 707 4470
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a
                      href="mailto:info@rainbowapartments.lk"
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      info@rainbowapartments.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <p className="text-white/70">
                      Rathmalana, Sri Lanka
                      <br />
                      Near Bolgoda Lake
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">
                  Prefer WhatsApp?
                </h4>
                <a
                  href="https://wa.me/94707074470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors animate-pulse-gold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
