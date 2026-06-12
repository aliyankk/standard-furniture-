import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products, categories } from '../mockData';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStyle, setActiveStyle] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sortBy]);

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'New Arrivals', value: 'new' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
  ];

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-5xl lg:text-7xl lowercase tracking-tighter mb-4">the collection</h1>
          <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] font-medium">Showing {filteredProducts.length} items</p>
        </div>

        {/* Filters and Controls */}
        <div className="sticky top-[80px] z-30 bg-white/90 backdrop-blur-md py-4 border-b border-neutral-100 flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-8 overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all pb-1 border-b-2 ${
                activeCategory === 'all' ? 'border-black' : 'border-transparent text-neutral-400 hover:text-black'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all pb-1 border-b-2 ${
                  activeCategory === cat.id ? 'border-black' : 'border-transparent text-neutral-400 hover:text-black'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity">
                Sort By: {sortOptions.find(o => o.value === sortBy)?.label}
                <ChevronDown size={12} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-neutral-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {sortOptions.map(opt => (
                  <button 
                    key={opt.value}
                    onClick={() => setSortBy(opt.value)}
                    className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    {opt.label}
                    {sortBy === opt.value && <Check size={10} />}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-50 transition-opacity"
            >
              Filters
              <SlidersHorizontal size={14} />
            </button>
          </div>
        </div>

        {/* Filter Drawer Sidebar (Collapsible) */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12 border-b border-neutral-100"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black mb-4">Style</h4>
                  <ul className="space-y-3">
                    {['Minimalist', 'Brutalist', 'Scandinavian', 'Industrial', 'Mid-Century'].map(s => (
                      <li key={s}>
                        <label className="flex items-center gap-2 group cursor-pointer">
                          <div className="w-3 h-3 border border-neutral-200 group-hover:border-black transition-colors" />
                          <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-black">{s}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black mb-4">Material</h4>
                  <ul className="space-y-3">
                    {['Solid Oak', 'Travertine', 'Leather', 'Steel', 'Velvet'].map(m => (
                      <li key={m}>
                        <label className="flex items-center gap-2 group cursor-pointer">
                          <div className="w-3 h-3 border border-neutral-200 group-hover:border-black transition-colors" />
                          <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-black">{m}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black mb-4">Palette</h4>
                  <div className="flex flex-wrap gap-2">
                    {['bg-black', 'bg-white border border-neutral-100', 'bg-[#F5F2ED]', 'bg-[#717171]', 'bg-blue-900'].map((c, i) => (
                      <button key={i} className={`w-5 h-5 rounded-full ${c} hover:scale-110 transition-transform`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mb-32">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
