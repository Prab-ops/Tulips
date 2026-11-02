export default function Butterfly({ top = '20%', color = '#d9cdea', delay = 0, dur = 22 }) {
  return (
    <div className="pointer-events-none absolute left-0 z-10" style={{ top, animation: `flutter ${dur}s ease-in-out ${delay}s infinite` }}>
      <svg width="28" height="22" viewBox="0 0 28 22" className="wing"><path d="M14 11C8 0 0 2 2 10C3 15 10 14 14 11ZM14 11C20 0 28 2 26 10C25 15 18 14 14 11Z" fill={color} /><rect x="13" y="6" width="2" height="12" rx="1" fill="#4a3340" /></svg>
    </div>
  );
}
