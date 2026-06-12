import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100]"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 w-full max-w-[450px] h-full bg-white z-[110] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-neutral-100 flex items-center justify-between">
              <h2 className="font-serif text-2xl lowercase tracking-tighter">Shopping Bag ({cartItems.length})</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X size={20} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6 hide-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-neutral-400 space-y-4">
                  <p className="font-serif italic text-xl">Your bag is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-[10px] uppercase tracking-[0.2em] underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-6">
                      <div className="w-24 aspect-[3/4] bg-neutral-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xs uppercase tracking-widest font-semibold">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.size, item.color)}
                            className="text-neutral-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="text-[10px] text-neutral-400 mt-1">{item.size} / {item.color}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-neutral-200">
                            <button 
                              onClick={() => updateQuantity(item.id, item.size, item.color, -1)}
                              className="p-1.5 hover:bg-neutral-50 transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center text-xs">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.size, item.color, 1)}
                              className="p-1.5 hover:bg-neutral-50 transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-8 bg-neutral-50 border-t border-neutral-100 space-y-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Total</span>
                  <span className="text-2xl font-light">Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <button className="w-full luxury-button py-4">
                  Checkout
                </button>
                <p className="text-[8px] text-center text-neutral-400 uppercase tracking-widest leading-relaxed">
                  Shipping and taxes calculated at checkout.<br/>
                  Complimentary worldwide delivery on orders over Rs. 150,000.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
