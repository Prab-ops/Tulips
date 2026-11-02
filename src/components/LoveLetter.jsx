import { motion } from 'framer-motion';
import cfg from '../config/personalisation';
export default function LoveLetter() {
  return (
    <section className="relative bg-gradient-to-b from-[#f3e6d3] to-blush px-4 py-20">
      <h2 className="text-center font-serif text-3xl">okay, one serious thing...</h2>
      <div className="grain relative mx-auto mt-8 max-w-md rounded-sm bg-cream px-6 py-10 shadow-2xl" style={{ transform: 'rotate(-.6deg)', backgroundImage: 'repeating-linear-gradient(transparent 0 35px,#e9d9c0 36px)' }}>
        {cfg.letter.map((l, i) => <motion.p key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 1 }}
          className="mb-5 font-hand text-2xl leading-9">{l}</motion.p>)}
      </div>
    </section>
  );
}
