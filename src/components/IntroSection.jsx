import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Tulip, { COLORS } from './Tulip';
import FloatingPetals from './FloatingPetals';
import Butterfly from './Butterfly';
export default function IntroSection() {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-lav/60 via-blush to-cream px-6 text-center">
      <FloatingPetals /><Butterfly top="18%" /><Butterfly top="40%" color="#f2b6c4" delay={-9} dur={28} />
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="font-serif text-5xl font-semibold">heyyyy janhaviiii ♡</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-4 font-hand text-2xl">I made this little corner of the internet just for u.</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }} className="mt-3 max-w-xs text-sm text-ink/80">Every flower here is a tiny reminder that someone thinks you're pretty special.</motion.p>
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1 + i * .12, duration: 1.2 }} style={{ originY: 1, marginBottom: -(i % 3) * 8 }}>
            <div className="sway" style={{ animationDelay: -i * .4 + 's' }}><Tulip size={22 + (i % 4) * 8} color={COLORS[i % 7]} /></div>
          </motion.div>))}
      </div>
      <a href="#garden" className="absolute bottom-40 animate-bounce text-rose" aria-label="scroll"><ChevronDown size={32} /></a>
    </section>
  );
}
