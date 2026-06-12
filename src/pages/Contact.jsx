import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <div className="pt-32 lg:pt-40 pb-32">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Info */}
        <div className="lg:col-span-4 space-y-16">
          <div>
            <h1 className="font-serif text-5xl lg:text-7xl lowercase tracking-tighter mb-8">get in <br /> touch.</h1>
            <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs">
              Whether you have a query about a collection or simply wish to share your thoughts, we await your message.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex gap-4">
              <Mail size={18} className="text-neutral-300" strokeWidth={1} />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Inquiries</p>
                <p className="text-xs text-neutral-600">concierge@aurainteriors.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={18} className="text-neutral-300" strokeWidth={1} />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Phone</p>
                <p className="text-xs text-neutral-600">+1 (212) 555-0192</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin size={18} className="text-neutral-300" strokeWidth={1} />
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Flagship Atelier</p>
                <p className="text-xs text-neutral-600">72 Mercer Street, New York, NY 10012</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8">
           <AnimatePresence mode="wait">
             {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[500px] flex flex-col items-center justify-center text-center space-y-8 bg-neutral-50/50 rounded-t-[10rem] border border-neutral-100"
                >
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-luxury-black shadow-sm">
                    <CheckCircle2 size={32} strokeWidth={1} />
                  </div>
                  <h2 className="font-serif text-4xl italic">Message Received</h2>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest max-w-xs leading-relaxed px-6">
                    Our concierge team will review your inquiry and respond within one business day.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="luxury-button"
                  >
                    Send Another
                  </button>
                </motion.div>
             ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-16"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gray">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-transparent border-b border-neutral-200 py-6 focus:border-luxury-black transition-all outline-none text-base font-serif italic px-1"
                        placeholder="Jean-Luc Godard"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gray">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-transparent border-b border-neutral-200 py-6 focus:border-luxury-black transition-all outline-none text-base font-serif italic px-1"
                        placeholder="jeanluc@nouvellevague.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gray">Inquiry Subject</label>
                    <div className="relative group">
                      <select className="w-full bg-transparent border-b border-neutral-200 py-6 focus:border-luxury-black transition-all outline-none text-base font-serif italic px-1 appearance-none cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Bespoke Commissions</option>
                        <option>Order Assistance</option>
                        <option>Trade & Architecture</option>
                        <option>Press & Media</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                         <ChevronDown size={14} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-gray">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-neutral-200 py-6 focus:border-luxury-black transition-all outline-none text-base font-serif italic px-1 resize-none"
                      placeholder="Share your thoughts..."
                    />
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    className="luxury-button w-full md:w-auto min-w-[240px] flex items-center justify-center gap-3 disabled:bg-neutral-400 disabled:cursor-not-allowed group"
                  >
                    {formState === 'submitting' ? (
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.form>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
