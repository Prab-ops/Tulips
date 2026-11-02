import { useMemo } from 'react';
export default function FloatingPetals({ count = 14 }) {
  const ps = useMemo(() => Array.from({ length: count }, (_, i) => ({
    left: Math.random() * 100, s: 8 + Math.random() * 10, d: 9 + Math.random() * 10, dl: -Math.random() * 14,
    c: ['#f7d9de', '#f2b6c4', '#d9cdea', '#fff'][i % 4] })), [count]);
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">{ps.map((p, i) =>
    <span key={i} className="petal" style={{ left: p.left + '%', width: p.s, height: p.s, background: p.c, opacity: .8, animationDuration: p.d + 's', animationDelay: p.dl + 's' }} />)}</div>;
}
