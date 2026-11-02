import { useRef, useState, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import cfg from '../config/personalisation';
export default function MusicPlayer({ autoStart }) {
  const a = useRef(null); const [on, setOn] = useState(false);
  const play = () => a.current?.play().then(() => setOn(true)).catch(() => setOn(false));
  useEffect(() => { if (a.current) a.current.volume = cfg.music.volume; if (autoStart) play(); }, [autoStart]);
  const toggle = () => (on ? (a.current.pause(), setOn(false)) : play());
  return (<><audio ref={a} src={cfg.music.src} loop preload="none" />
    <button onClick={toggle} aria-label="toggle music" className="fixed bottom-4 left-4 z-40 rounded-full bg-cream/90 p-3 text-rose shadow-lg">{on ? <Music size={20} /> : <VolumeX size={20} />}</button></>);
}
