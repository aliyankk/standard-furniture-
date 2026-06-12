import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
        {/* Base Image */}
        <motion.img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Image Overlay */}
        <div 
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <motion.img 
            src={product.hoverImage}
            alt={`${product.name} hover`}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            referrerPolicy="no-referrer"
          />
        </div>
        
        {product.new && (
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white shadow-sm drop-shadow-md">
              Collection No. 1
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      
      <div className="mt-8 flex justify-between items-start px-2">
        <div className="max-w-[70%]">
          <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-luxury-black mb-2 group-hover:text-luxury-gold transition-colors duration-500">
            {product.name}
          </h3>
          <p className="text-[9px] text-neutral-400 uppercase tracking-[0.4em] font-medium">
            {product.category}
          </p>
        </div>
        <p className="font-serif italic text-lg lg:text-xl text-neutral-800 tracking-tighter">
          Rs. {product.price ? product.price.toLocaleString() : ""}
        </p>
      </div>
    </Link>
  );
}
