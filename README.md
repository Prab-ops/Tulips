# A Thousand Tulips for Janhavi 🌷
1. **Install:** `npm install` (Node 18+).  2. **Develop:** `npm run dev` then open the shown URL (use the Network URL on your phone).
3. **Personalise:** edit `src/config/personalisation.js` (password DDMM, text, captions, hidden messages, milestones, music path).
4. **Photos:** drop `photo1.jpg`…`photo5.jpg` and `our-picture.jpg` into `public/images/` (keep each under ~400 KB).
5. **Music:** put an instrumental MP3 you have the rights to use at `public/audio/music.mp3` (or change `music.src`). Browsers need a tap to start audio; the unlock tap does it, and the speaker button toggles it.
6. **Deploy (Vercel):** push to GitHub → vercel.com → New Project → import repo (framework: Vite, build `npm run build`, output `dist`) → Deploy. Or `npx vercel` from this folder.
Note: the password is a playful lock only; anyone can read it in the page source.
