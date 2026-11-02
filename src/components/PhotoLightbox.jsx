import { motion } from 'framer-motion';
import { X } from 'lucide-react';
export default function PhotoLightbox({ photo, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink/90 p-4">
      <button className="absolute right-4 top-4 text-cream" aria-label="close"><X size={30} /></button>
      <motion.img initial={{ scale: .8 }} animate={{ scale: 1 }} src={photo.src} alt={photo.caption} className="max-h-[80svh] max-w-full rounded-sm border-8 border-cream object-contain" />
      <p className="mt-4 font-hand text-3xl text-cream">{photo.caption}</p>
    </motion.div>
  );
}
