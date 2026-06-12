import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../mockData';
import { useCart } from '../context/CartContext';
import { ChevronRight, ChevronLeft, Minus, Plus, Heart, Share2, Info } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedColor(product.colors[0]);
    }
  }, [id, product]);

  if (!product) return <div className="h-screen flex items-center justify-center font-serif italic text-2xl">Product not found.</div>;
  
  const images = product.gallery || [product.image, product.hoverImage, ...Array(2).fill(product.image)];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a dimension");
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-24 lg:pt-32 pb-32">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <nav className="mb-12 flex items-center gap-2 text-[8px] uppercase tracking-widest text-neutral-400 font-bold">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={8} />
          <Link to="/shop" className="hover:text-black transition-colors">Collections</Link>
          <ChevronRight size={8} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
          <ChevronRight size={8} />
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] bg-neutral-100 overflow-hidden group"
              >
                <img 
                  src={img} 
                  alt={`${product.name} - ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          {/* Details */}
          <div className="lg:col-span-4 lg:sticky lg:top-[120px] h-fit">
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">Ref. 2026/01-{product.id}</p>
                <h1 className="font-serif text-4xl lg:text-5xl lowercase tracking-tighter leading-tight">{product.name}</h1>
                <p className="text-2xl font-light">Rs. {product.price?.toLocaleString()}</p>
              </div>

              <div className="space-y-8">
                {/* Product Description */}
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Color Selection */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Color: {selectedColor}</h4>
                  <div className="flex gap-4">
                    {product.colors.map(color => (
                        <button 
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border transition-all ${
                            selectedColor === color ? 'border-black p-0.5' : 'border-transparent'
                          }`}
                        >
                          <div className={`w-full h-full rounded-full border border-neutral-100 ${
                            color === 'Deep Emerald' ? 'bg-[#2E4A3E]' : 
                            color === 'Obsidian' ? 'bg-black' : 
                            color === 'Chestnut' ? 'bg-[#4A2C2A]' : 
                            color === 'Natural Oak' ? 'bg-[#E3C3A1]' :
                            color === 'Dark Walnut' ? 'bg-[#3D2B1F]' :
                            color === 'Sandstone' ? 'bg-[#D2B48C]' :
                            'bg-neutral-200'
                          }`} />
                        </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection (Dimensions) */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold">Dimensions</h4>
                    <button className="text-[8px] uppercase tracking-widest font-bold border-b border-neutral-300 pb-0.5">Scale Guide</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {product.dimensions.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 text-[10px] uppercase tracking-widest transition-all ${
                          selectedSize === size 
                            ? 'bg-black text-white' 
                            : 'bg-neutral-50 text-neutral-400 hover:bg-neutral-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full luxury-button py-5 text-sm flex items-center justify-center gap-2"
                  >
                    {isAdded ? 'Added to bag' : 'Add to bag'}
                  </button>
                  <div className="flex gap-4">
                    <button className="flex-1 border border-neutral-200 py-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-50 transition-colors">
                      <Heart size={14} /> Wishlist
                    </button>
                    <button className="flex-1 border border-neutral-200 py-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-50 transition-colors">
                      <Share2 size={14} /> Share
                    </button>
                  </div>
                </div>
              </div>

              {/* Accordions / Info */}
              <div className="border-t border-neutral-100 pt-8 space-y-6">
                {[
                  { title: 'Composition & Care', icon: <Info size={14} /> },
                  { title: 'Shipping & Returns', icon: <Info size={14} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-neutral-400">{item.icon}</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold group-hover:opacity-60 transition-opacity">
                        {item.title}
                      </span>
                    </div>
                    <Plus size={12} strokeWidth={1} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Complete the look */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl italic">Complete the Look</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-2 font-bold whitespace-nowrap overflow-hidden">
              <span className="inline-block animate-marquee-slower">Curated Essentials — Curated Essentials — Curated Essentials</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
