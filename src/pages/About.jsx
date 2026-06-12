import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-40 pb-32 overflow-hidden bg-white text-luxury-black">
      {/* Editorial Storytelling */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 mb-48 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-40">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gray font-bold mb-8 block">Atelier Aura</span>
            <h1 className="font-serif text-6xl lg:text-[7rem] leading-[0.85] tracking-tighter mb-12">
              curating <br /> <span className="italic">modern</span> <br /> sanctuaries.
            </h1>
            <p className="font-serif italic text-2xl lg:text-3xl text-neutral-600 leading-relaxed max-w-md">
              "A sanctuary is not a collection of objects, but a curation of moments and the profound silence between them."
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="aspect-[3/4] lg:aspect-[4/5] bg-neutral-100 overflow-hidden mb-16 rounded-t-[20rem]"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1500" 
              alt="Artisan Atelier"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-[2.5s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8 text-sm lg:text-base text-neutral-500 font-light leading-loose">
              <p>
                Founded in 2026, Aura Atelier was born from a singular philosophy: that high-end editorial aesthetics can coexist with the functional sanctity of home.
              </p>
              <p>
                Our vision eschews the temporary in favor of the timeless. Every piece in our collection is a dialogue between structural honesty and material purity.
              </p>
            </div>
            <div className="space-y-8 text-sm lg:text-base text-neutral-500 font-light leading-loose">
              <p>
                We collaborate exclusively with master artisans who understand that furniture is more than utility—it is an heirloom, designed to age with elegance and carry the narrative of generations.
              </p>
              <p>
                Aura is not merely a brand; it is a commitment to intentionality. We invite you to explore a world where design is silent, yet speaks volumes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="bg-neutral-50/50 py-48 px-6 lg:px-16 border-y border-neutral-100">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-24">
            {[
              { 
                tag: 'Material', 
                title: 'Structural Honesty', 
                desc: 'We select materials that maintain their character over lifetimes. Solid European oaks, Italian travertine, and hand-forged steel form our foundational palette.' 
              },
              { 
                tag: 'Design', 
                title: 'Architectural Silence', 
                desc: 'Our designs prioritize the negative space. By removing the unnecessary, we allow the intrinsic beauty of the form to command the room.' 
              },
              { 
                tag: 'Craft', 
                title: 'Master Stewardship', 
                desc: 'Sustainability is not a feature; it is our ethos. We partner only with workshops that uphold the highest standards of ethical labor.' 
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="flex-1 space-y-10 group"
              >
                <div className="w-12 h-[1px] bg-luxury-black group-hover:w-24 transition-all duration-700" />
                <div>
                  <span className="text-[9px] uppercase tracking-[0.5em] text-luxury-gold font-bold mb-4 block">{item.tag}</span>
                  <h3 className="font-serif italic text-4xl lg:text-5xl mb-8 leading-tight">{item.title}</h3>
                  <p className="text-sm lg:text-base text-neutral-500 font-light leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Visual Campaign */}
      <section className="py-56 px-6 lg:px-16 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto">
           <motion.div 
             initial={{ height: 0 }}
             whileInView={{ height: "128px" }}
             viewport={{ once: true }}
             className="w-[1px] bg-luxury-black mx-auto mb-16" 
           />
           <motion.p 
             initial={{ opacity: 0, scale: 1.05 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="font-serif italic text-5xl lg:text-9xl mb-20 leading-[1.1] tracking-tighter"
           >
             Design is a <br /> <span className="not-italic font-sans font-bold uppercase">Dialogue</span> <br /> with permanence.
           </motion.p>
           <Link to="/shop" className="luxury-button mx-auto w-fit">
             Explore the Archives
           </Link>
        </div>
      </section>
    </div>
  );
}
