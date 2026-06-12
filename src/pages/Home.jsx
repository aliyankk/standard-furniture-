import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { categories, products } from '../mockData';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pt-0">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[750px] w-full overflow-hidden bg-luxury-black">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2400" 
            alt="Hero Showroom"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.8em] mb-10 font-bold text-white/60">
              The 2026 Archive — Curated for Permanence
            </p>
          </motion.div>
          
          <h1 className="font-serif text-6xl md:text-9xl lg:text-[12rem] leading-[0.75] tracking-tighter mb-16 relative">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Standard
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="block italic font-light ml-20 lg:ml-40"
            >
              Furniture
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center"
          >
            <Link to="/shop" className="luxury-button min-w-[240px]">
              The Collections
            </Link>
            <span className="text-white/30 font-serif italic text-sm hidden lg:block">Architecture of Silence</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-bold">Scroll Down</span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Categories - Asymmetric Editorial Grid */}
      <section className="py-32 lg:py-48 max-w-[1920px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gray font-bold mb-4">Curated Living</span>
          <h2 className="font-serif text-5xl lg:text-7xl leading-tight">Spaces Designed <br /><span className="italic">for Intentionality</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`${
                idx === 0 ? 'lg:col-span-12 h-[500px] lg:h-[850px]' : 
                idx === 1 ? 'lg:col-span-7 h-[450px] lg:h-[700px]' : 
                idx === 2 ? 'lg:col-span-5 h-[450px] lg:h-[700px]' : 
                'lg:col-span-12 h-[500px] lg:h-[750px]'
              } group relative overflow-hidden bg-neutral-100 flex flex-col`}
            >
              <div className="h-full w-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover grayscale-[20%] transition-transform duration-[3s] ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-10 lg:p-20 flex flex-col justify-end text-white pointer-events-none">
                <p className="font-serif italic text-2xl lg:text-3xl mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">{category.tagline}</p>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight uppercase mb-8">{category.name}</h2>
                <Link 
                  to="/shop" 
                  className="pointer-events-auto inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white/40 pb-2 hover:border-white transition-all w-fit"
                >
                  Shop Collection <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasonal Highlights - Curated Staggered Grid */}
      <section className="py-40 lg:py-60 bg-neutral-50 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 space-y-8 md:space-y-0">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold font-bold mb-6 block">New Additions</span>
              <h2 className="font-serif text-6xl lg:text-8xl leading-[0.9] tracking-tighter">Collections <br /><span className="italic">d'Excellence</span></h2>
            </div>
            <Link to="/shop" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-bold border-b border-luxury-black pb-3 transition-all hover:gap-6">
              View All Pieces <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[90vh] min-h-[700px] w-full relative group bg-luxury-black">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2400" 
          alt="Showroom Campaign"
          className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 outline-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              className="font-serif text-white text-5xl lg:text-8xl italic leading-[1.1] mb-12"
            >
              "A space is more than a room; <br className="hidden lg:block"/> its the <span className="not-italic font-sans font-bold uppercase tracking-tight text-luxury-gold">soul</span> of design."
            </motion.h2>
            <Link to="/about" className="luxury-button !bg-transparent !border !border-white !text-white hover:!bg-white hover:!text-luxury-black">
              Our Philosophy
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter - Elegant Split Layout */}
      <section className="py-40 bg-white px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gray font-bold mb-6 block">Newsletter</span>
            <h2 className="font-serif text-5xl lg:text-6xl italic leading-tight mb-8">Stay informed on <br/>upcoming <span className="not-italic font-sans font-bold uppercase tracking-tighter">Collections</span></h2>
            <p className="text-sm text-neutral-500 max-w-md leading-relaxed lg:text-base">
              Join our atelier's mailing list for early access to collection launches, limited furniture releases, and exclusive interior storytelling.
            </p>
          </div>
          <form className="flex flex-col gap-6">
            <div className="relative border-b-2 border-neutral-100 focus-within:border-luxury-black transition-colors py-4">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-transparent text-xl font-serif italic outline-none placeholder:text-neutral-300"
              />
            </div>
            <button className="luxury-button w-full lg:w-fit mt-4">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
