import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cfg from '../config/personalisation';
import Tulip, { COLORS } from './Tulip';
import PhotoLightbox from './PhotoLightbox';
export default function PhotoGallery() {
  const [sel, setSel] = useState(null);
  return (
    <section className="grain relative overflow-hidden bg-[#f3e6d3] px-5 py-20">
      <h2 className="mx-auto max-w-xs text-center font-serif text-3xl">caught myself scrolling through our pictures again...</h2>
      <div className="mx-auto mt-10 flex max-w-md flex-wrap items-start justify-center gap-x-4 gap-y-10">
        {cfg.photos.map((p, i) => (
          <motion.figure key={i} initial={{ opacity: 0, y: 40, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: p.rot }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .8 }}
            onClick={() => setSel(p)} className={`${p.w} relative cursor-pointer bg-white p-2 pb-3 shadow-xl`} style={{ marginTop: (i % 3) * 14 }}>
            <Tulip size={18} color={COLORS[i % 7]} className="absolute -top-8 left-1/2 -translate-x-1/2" />
            <div className="aspect-square bg-blush"><img src={p.src} alt={p.caption} loading="lazy" className="h-full w-full object-cover" onError={e => { e.currentTarget.style.opacity = 0; }} /></div>
            <figcaption className="mt-2 text-center font-hand text-xl">{p.caption}</figcaption>
          </motion.figure>))}
      </div>
      <AnimatePresence>{sel && <PhotoLightbox photo={sel} onClose={() => setSel(null)} />}</AnimatePresence>
    </section>
  );
}
