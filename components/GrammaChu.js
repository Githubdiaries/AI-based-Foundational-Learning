'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GrammaChu = ({ mood = 'idle', size = 'medium' }) => {
  const sizes = { small: 'h-16 w-16', medium: 'h-32 w-32', large: 'h-48 w-48' };

  const anims = {
    idle: { y: [0, -10, 0], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } },
    happy: { rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.1, 1], transition: { duration: 0.8, repeat: 3 } },
    sad: { y: [0, 5, 0], opacity: [1, 0.7, 1], transition: { duration: 1.5, repeat: Infinity } },
    encouraging: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: 2 } },
  };

  return (
    <motion.div className={`relative ${sizes[size]} mx-auto`} animate={anims[mood]}>
      <Image
        src="https://customer-assets.emergentagent.com/job_ab0c9bb7-6330-4228-ab90-0bbdb769b3d1/artifacts/zsb83uho_WhatsApp%20Image%202026-02-22%20at%2019.48.02.jpeg"
        alt="GrammaChu mascot"
        fill
        className="rounded-full object-cover drop-shadow-2xl"
      />
      {mood === 'happy' && (
        <motion.div className="absolute -top-4 -right-4 text-3xl"
          animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.5, repeat: Infinity }}>✨</motion.div>
      )}
      {mood === 'sad' && (
        <motion.div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl"
          animate={{ y: [0, 10], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }}>💧</motion.div>
      )}
    </motion.div>
  );
};
export default GrammaChu;
