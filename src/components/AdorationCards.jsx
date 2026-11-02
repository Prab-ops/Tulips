import { useState } from 'react';
import { motion } from 'framer-motion';
import cfg from '../config/personalisation';
import Tulip, { COLORS } from './Tulip';
export default function AdorationCards() {
  const [open, setOpen] = useState(null);
  return (
    <section className="grain relative bg-gradient-to-b from-blush to-lav/50 px-5 py-20">
      <h2 className="mx-auto max-w-xs text-center font-serif text-3xl">okay but like... let's talk about u ♡</h2>
      <p className="mt-2 text-center font-hand text-xl text-rose">(tap a flower)</p>
      <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4">
        {cfg.cards.map(([t, d], i) => (
          <motion.button layout key={i} onClick={() => setOpen(open === i ? null : i)} whileTap={{ scale: .97 }}
            className={'rounded-3xl bg-cream/90 p-4 text-left shadow-md ' + (open === i ? 'col-span-2' : '')} style={{ rotate: (i % 2 ? 1 : -1) * 1.2 }}>
            <motion.div layout className="flex items-center gap-3"><Tulip size={22} color={COLORS[i % 7]} className="shrink-0" /><span className="font-serif text-lg leading-tight">{t}</span></motion.div>
            {open === i && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 font-hand text-2xl leading-snug">{d}</motion.p>}
          </motion.button>))}
      </div>
    </section>
  );
}
