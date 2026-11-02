export const COLORS = ['#f08aa6','#d6384f','#fffaf3','#f7d44c','#9b6fc9','#f8b48f','#c9b6ee'];
export default function Tulip({ color = '#f08aa6', size = 60, className = '' }) {
  return (
    <svg viewBox="0 0 40 100" width={size} height={size * 2.5} className={className} aria-hidden="true">
      <path d="M20 40C19 60 21 80 20 100" stroke="#6f9a6a" strokeWidth="2.5" fill="none" />
      <path d="M20 88C8 80 6 64 12 56C14 70 18 76 20 88Z" fill="#7fa878" />
      <path d="M20 84C32 78 34 66 29 60C27 70 23 76 20 84Z" fill="#8fb888" />
      <path d="M20 42C6 40 4 18 8 6C14 12 18 14 20 22C22 14 26 12 32 6C36 18 34 40 20 42Z" fill={color} />
      <path d="M20 42C13 38 13 20 20 10C27 20 27 38 20 42Z" fill="#fff" opacity=".25" />
    </svg>
  );
}
