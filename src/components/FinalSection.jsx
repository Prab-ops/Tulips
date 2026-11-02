import { motion } from 'framer-motion';
import cfg from '../config/personalisation';
import Tulip, { COLORS } from './Tulip';
import FloatingPetals from './FloatingPetals';
import Butterfly from './Butterfly';
export default function FinalSection() {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center text-cream" style={{ background: 'linear-gradient(#5b3a63,#b86b7e 45%,#f3a77f 80%,#f9d79b)' }}>
      <FloatingPetals count={20} /><Butterfly top="15%" color="#f9d79b" />
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} className="relative z-10 max-w-sm font-serif text-2xl italic leading-relaxed">{cfg.finalQuote}</motion.p>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2, duration: 2 }} viewport={{ once: true }} className="relative z-10 mt-8 max-w-sm font-hand text-3xl">{cfg.finalLine}</motion.p>
      <motion.button whileTap={{ scale: .94 }} animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 2.4 }}
        onClick={() => document.getElementById('garden').scrollIntoView({ behavior: 'smooth' })} className="relative z-10 mt-10 rounded-full bg-cream px-8 py-3 font-semibold text-rose shadow-xl">Bloom our garden again 🌷</motion.button>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-around">{Array.from({ length: 16 }).map((_, i) =>
        <div key={i} className="sway" style={{ animationDelay: -i * .3 + 's', marginBottom: -(i % 3) * 10 }}><Tulip size={24 + (i % 4) * 8} color={COLORS[i % 7]} /></div>)}</div>
    </section>
  );
}
