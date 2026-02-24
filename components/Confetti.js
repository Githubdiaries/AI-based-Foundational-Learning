'use client';
import { useEffect } from 'react';

const Confetti = ({ trigger }) => {
  useEffect(() => {
    if (!trigger) return;
    import('canvas-confetti').then(({ default: confetti }) => {
      const end = Date.now() + 3000;
      const colors = ['#9333ea', '#ec4899', '#eab308'];
      (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    });
  }, [trigger]);
  return null;
};
export default Confetti;
