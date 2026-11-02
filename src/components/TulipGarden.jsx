import { useRef, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cfg from '../config/personalisation';
import Tulip, { COLORS } from './Tulip';
import Butterfly from './Butterfly';
import FloatingPetals from './FloatingPetals';
let uid = 0; const MAX_DOM = 140; const rnd = (a, b) => a + Math.random() * (b - a);
export default function TulipGarden() {
  const ref = useRef(null); const timer = useRef(null);
  const [flowers, setFlowers] = useState([]); const [fx, setFx] = useState([]);
  const [count, setCount] = useState(0); const [note, setNote] = useState(null);
  const bg = useMemo(() => Array.from({ length: 70 }, (_, i) => ({ x: rnd(0, 100), s: rnd(18, 40), c: COLORS[i % 7], back: i % 2, d: rnd(0, 4) })), []);
  const show = (t, ms = 3500) => { setNote(t); clearTimeout(timer.current); timer.current = setTimeout(() => setNote(null), ms); };
  const bloom = useCallback((e) => {
    const r = ref.current.getBoundingClientRect(); const px = e.clientX - r.left, py = e.clientY - r.top;
    const n = 2 + Math.floor(Math.random() * 4);
    const fresh = Array.from({ length: n }, () => ({ id: ++uid, x: px + rnd(-30, 30), y: py + rnd(-10, 20), s: rnd(26, 48),
      c: COLORS[Math.floor(Math.random() * 7)], secret: Math.random() < .1 ? cfg.secretMessages[Math.floor(Math.random() * cfg.secretMessages.length)] : null }));
    setFlowers(f => [...f, ...fresh].slice(-MAX_DOM));
    const petals = Array.from({ length: 6 }, () => ({ id: ++uid, x: px, y: py, dx: rnd(-70, 70), dy: rnd(30, 120), c: fresh[0].c }));
    setFx(f => [...f.slice(-30), { id: ++uid, x: px, y: py, ripple: true }, ...petals]);
    setCount(c => { const nc = c + n; Object.keys(cfg.milestones).forEach(m => { if (c < +m && nc >= +m) setTimeout(() => show(cfg.milestones[m], 6000), 400); }); return nc; });
    if (navigator.vibrate) navigator.vibrate(8);
  }, []);
  return (
    <section id="garden" className="relative bg-gradient-to-b from-cream to-blush">
      <div className="px-6 pt-10 text-center"><h2 className="font-serif text-3xl">tap anywhere. make it bloom 🌷</h2>
        <p className="mt-1 font-hand text-2xl text-rose">You've made {count} little tulips bloom ♡</p></div>
      <div ref={ref} onPointerDown={bloom} className="garden grain relative mx-auto mt-4 h-[72svh] w-full cursor-pointer overflow-hidden">
        <FloatingPetals count={10} /><Butterfly top="25%" color="#f8b48f" /><Butterfly top="55%" color="#d9cdea" delay={-12} dur={30} />
        {bg.filter(b => b.back).map((b, i) => <div key={'b' + i} className="absolute bottom-0 opacity-60" style={{ left: b.x + '%' }}><div className="sway" style={{ animationDelay: -b.d + 's' }}><Tulip size={b.s * .7} color={b.c} /></div></div>)}
        {flowers.map(f => (
          <motion.div key={f.id} initial={{ scaleY: 0, scaleX: .4, opacity: 0 }} animate={{ scaleY: 1, scaleX: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="absolute" style={{ left: f.x, top: f.y, translateX: '-50%', translateY: '-100%', originY: 1 }}
            onPointerDown={f.secret ? (e) => { e.stopPropagation(); show(f.secret); } : undefined}>
            <div className={'sway ' + (f.secret ? 'glow' : '')}><Tulip size={f.s} color={f.c} /></div>
          </motion.div>))}
        {fx.map(p => p.ripple
          ? <motion.span key={p.id} initial={{ scale: 0, opacity: .7 }} animate={{ scale: 1, opacity: 0 }} transition={{ duration: 1 }} className="pointer-events-none absolute h-40 w-40 rounded-full" style={{ left: p.x - 80, top: p.y - 80, background: 'radial-gradient(circle,#fff7 0%,#f2b6c455 50%,transparent 70%)' }} />
          : <motion.span key={p.id} initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }} animate={{ x: p.dx, y: p.dy, opacity: 0, rotate: 200 }} transition={{ duration: 1.6, ease: 'easeOut' }} className="pointer-events-none absolute h-3 w-3" style={{ left: p.x, top: p.y, background: p.c, borderRadius: '80% 0 80% 0' }} />)}
        {bg.filter(b => !b.back).map((b, i) => <div key={'f' + i} className="pointer-events-none absolute -bottom-2" style={{ left: b.x + '%' }}><div className="sway" style={{ animationDelay: -b.d + 's' }}><Tulip size={b.s} color={b.c} /></div></div>)}
        <AnimatePresence>{note && <motion.div key={note} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="pointer-events-none absolute inset-x-4 top-6 z-20 mx-auto max-w-sm rounded-2xl bg-cream/95 p-4 text-center font-hand text-2xl shadow-xl">{note}</motion.div>}</AnimatePresence>
      </div>
    </section>
  );
}
