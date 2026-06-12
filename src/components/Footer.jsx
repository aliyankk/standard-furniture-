import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white pt-24 pb-12 px-6 lg:px-12 border-t border-neutral-100">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          {/* Logo & Info */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl tracking-[0.4em] uppercase font-bold text-luxury-black">Standard <span className="italic font-light">Furniture</span></h2>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed max-w-xs font-medium">
              Curating high-end architecture and interior sanctuaries. Designed with architectural silence, crafted by master artisans worldwide.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-50 transition-opacity"><Instagram size={18} strokeWidth={1} /></a>
              <a href="#" className="hover:opacity-50 transition-opacity"><Twitter size={18} strokeWidth={1} /></a>
              <a href="#" className="hover:opacity-50 transition-opacity"><Facebook size={18} strokeWidth={1} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8">Inquiries</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-black transition-colors">In-Store Pickup</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8">About</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
              <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Stores</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter / Meta */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
              <span className="text-[10px] uppercase tracking-widest font-bold">English (US)</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">USD $</span>
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 text-[8px] uppercase tracking-[0.4em] font-bold group"
            >
              Back to top 
              <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUp size={12} />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 italic font-serif text-neutral-400 text-sm">
          <p>© 2026 Standard Furniture. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Security</span>
            <span>Terms of Service</span>
            <span>Transparency Report</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
