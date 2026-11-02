import { useState } from 'react';
import { motion } from 'framer-motion';
import cfg from '../config/personalisation';
import FloatingPetals from './FloatingPetals';
import Tulip from './Tulip';
export default function PasswordScreen({ onUnlock }) {
  const [v, setV] = useState(''); const [msg, setMsg] = useState(''); const [shake, setShake] = useState(0);
  const submit = (e) => { e.preventDefault();
    if (v.trim() === cfg.password) onUnlock();
    else { setMsg(cfg.wrongPasswordMessages[Math.floor(Math.random() * cfg.wrongPasswordMessages.length)]); setShake(s => s + 1); } };
  return (
    <motion.div exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: .8 }} className="grain fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gradient-to-b from-cream via-blush to-lav px-6 py-10">
      <FloatingPetals />
      <div className="relative z-10 w-full max-w-sm text-center">
        <Tulip size={36} className="mx-auto mb-2 sway" color="#f08aa6" />
        <h1 className="font-serif text-4xl font-semibold">pssst... this is for u 🌷</h1>
        <p className="mt-3 text-sm text-ink/80">I made a little something, but there's a tiny secret u need to figure out first.</p>
        <div className="mt-6 rounded-sm bg-cream/90 p-5 shadow-lg" style={{ transform: 'rotate(-1.5deg)' }}>
          {cfg.riddle.map((l, i) => <motion.p key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 + i * .7 }} className="font-hand text-xl leading-snug">{l}</motion.p>)}
        </div>
        <form onSubmit={submit} className="mt-6">
          <motion.input key={shake} animate={shake ? { x: [0, -10, 10, -6, 6, 0] } : {}} inputMode="numeric" maxLength={4} value={v}
            onChange={e => setV(e.target.value.replace(/\D/g, ''))} placeholder="D D M M" aria-label="password DDMM"
            className="w-full rounded-full border-2 border-petal bg-white/80 px-5 py-3 text-center text-xl tracking-[.5em] outline-none focus:border-rose" />
          <p className="mt-2 h-5 font-hand text-lg text-rose">{msg}</p>
          <button className="mt-2 rounded-full bg-rose px-8 py-3 font-semibold text-cream shadow-md active:scale-95">Unlock 🌷</button>
        </form>
      </div>
    </motion.div>
  );
}
