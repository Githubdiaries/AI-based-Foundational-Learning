'use client'
import { motion } from 'framer-motion'

const PIKACHU_SVGS = {
  // Pikachu relaxing in onsen (default)
  onsen: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Water */}
      <ellipse cx="100" cy="155" rx="80" ry="25" fill="#A7D8F0" opacity="0.8"/>
      <ellipse cx="100" cy="155" rx="75" ry="20" fill="#7EC8E3"/>
      {/* Steam */}
      <path d="M60 120 Q65 110 60 100 Q55 90 60 80" stroke="white" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round"/>
      <path d="M80 115 Q85 105 80 95 Q75 85 80 75" stroke="white" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round"/>
      <path d="M120 115 Q125 105 120 95 Q115 85 120 75" stroke="white" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round"/>
      {/* Body in water */}
      <ellipse cx="100" cy="145" rx="45" ry="20" fill="#FFD700"/>
      {/* Head */}
      <ellipse cx="100" cy="105" rx="40" ry="38" fill="#FFD700"/>
      {/* Cheeks */}
      <ellipse cx="68" cy="118" rx="10" ry="8" fill="#FF6B6B" opacity="0.8"/>
      <ellipse cx="132" cy="118" rx="10" ry="8" fill="#FF6B6B" opacity="0.8"/>
      {/* Eyes - happy closed */}
      <path d="M83 102 Q90 96 97 102" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M103 102 Q110 96 117 102" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M88 118 Q100 128 112 118" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Ears */}
      <polygon points="68,78 58,45 82,70" fill="#FFD700"/>
      <polygon points="132,78 142,45 118,70" fill="#FFD700"/>
      <polygon points="70,76 62,50 78,68" fill="#1a1a1a"/>
      <polygon points="130,76 138,50 122,68" fill="#1a1a1a"/>
      {/* Tail */}
      <path d="M145 148 Q165 130 170 115 Q175 100 165 90" stroke="#FFD700" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <polygon points="165,90 178,78 160,72" fill="#FF1744"/>
      {/* Lightning bolt on tail */}
      <path d="M155,120 L162,108 L158,108 L165,96" stroke="#FFD700" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  ),

  // Pikachu peeping/curious
  peep: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Wall/ledge */}
      <rect x="10" y="140" width="180" height="50" rx="5" fill="#8B6914" opacity="0.8"/>
      <rect x="10" y="138" width="180" height="10" rx="3" fill="#A67C52"/>
      {/* Body peeking up */}
      <ellipse cx="100" cy="155" rx="42" ry="22" fill="#FFD700"/>
      {/* Arms on ledge */}
      <ellipse cx="55" cy="142" rx="20" ry="12" fill="#FFD700"/>
      <ellipse cx="145" cy="142" rx="20" ry="12" fill="#FFD700"/>
      {/* Head */}
      <ellipse cx="100" cy="110" rx="38" ry="36" fill="#FFD700"/>
      {/* Big curious eyes */}
      <circle cx="87" cy="106" r="10" fill="white"/>
      <circle cx="113" cy="106" r="10" fill="white"/>
      <circle cx="89" cy="108" r="7" fill="#1a1a1a"/>
      <circle cx="115" cy="108" r="7" fill="#1a1a1a"/>
      <circle cx="91" cy="106" r="2.5" fill="white"/>
      <circle cx="117" cy="106" r="2.5" fill="white"/>
      {/* Raised eyebrows */}
      <path d="M80 95 Q87 90 95 95" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M105 95 Q112 90 120 95" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Cheeks */}
      <ellipse cx="68" cy="118" rx="9" ry="7" fill="#FF6B6B" opacity="0.8"/>
      <ellipse cx="132" cy="118" rx="9" ry="7" fill="#FF6B6B" opacity="0.8"/>
      {/* Small O mouth */}
      <ellipse cx="100" cy="125" rx="5" ry="4" fill="#1a1a1a"/>
      {/* Ears sticking up */}
      <polygon points="72,82 62,48 86,75" fill="#FFD700"/>
      <polygon points="128,82 138,48 114,75" fill="#FFD700"/>
      <polygon points="74,80 66,54 82,73" fill="#1a1a1a"/>
      <polygon points="126,80 134,54 118,73" fill="#1a1a1a"/>
    </svg>
  ),

  // Pikachu playing with ball
  play: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Pokéball */}
      <circle cx="155" cy="55" r="28" fill="white" stroke="#1a1a1a" strokeWidth="2.5"/>
      <path d="M127,55 A28,28 0 0,1 183,55" fill="#FF1744"/>
      <circle cx="155" cy="55" r="8" fill="white" stroke="#1a1a1a" strokeWidth="2.5"/>
      <circle cx="155" cy="55" r="4" fill="#1a1a1a"/>
      {/* Motion lines */}
      <path d="M130 35 L120 28" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M133 30 L126 20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      {/* Body */}
      <ellipse cx="88" cy="155" rx="38" ry="28" fill="#FFD700"/>
      {/* Arm reaching up */}
      <path d="M110,140 Q130,110 148,75" stroke="#FFD700" strokeWidth="14" fill="none" strokeLinecap="round"/>
      {/* Hand/paw */}
      <circle cx="148" cy="75" r="10" fill="#FFD700"/>
      <circle cx="142" cy="67" r="5" fill="#FFD700"/>
      <circle cx="153" cy="65" r="5" fill="#FFD700"/>
      {/* Head */}
      <ellipse cx="88" cy="112" rx="38" ry="36" fill="#FFD700"/>
      {/* Excited eyes */}
      <circle cx="76" cy="108" r="9" fill="white"/>
      <circle cx="100" cy="108" r="9" fill="white"/>
      <circle cx="78" cy="110" r="6" fill="#1a1a1a"/>
      <circle cx="102" cy="110" r="6" fill="#1a1a1a"/>
      <circle cx="80" cy="108" r="2" fill="white"/>
      <circle cx="104" cy="108" r="2" fill="white"/>
      {/* Cheeks */}
      <ellipse cx="62" cy="120" rx="9" ry="7" fill="#FF6B6B" opacity="0.8"/>
      <ellipse cx="116" cy="120" rx="9" ry="7" fill="#FF6B6B" opacity="0.8"/>
      {/* Big smile */}
      <path d="M72 126 Q88 138 104 126" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Ears */}
      <polygon points="68,84 58,48 82,78" fill="#FFD700"/>
      <polygon points="108,84 118,48 94,78" fill="#FFD700"/>
      <polygon points="70,82 62,52 78,76" fill="#1a1a1a"/>
      <polygon points="106,82 114,52 96,76" fill="#1a1a1a"/>
      {/* Tail */}
      <path d="M126 158 Q150 148 160 135 Q168 122 158 112" stroke="#FFD700" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <polygon points="158,112 170,100 152,95" fill="#FF1744"/>
      {/* Stars/sparkles */}
      <text x="25" y="55" fontSize="18" fill="#FFD700">✨</text>
      <text x="45" y="80" fontSize="14" fill="#FFD700">⭐</text>
    </svg>
  ),

  // Sad Pikachu
  sad: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="100" cy="160" rx="45" ry="20" fill="#FFD700"/>
      <ellipse cx="100" cy="110" rx="40" ry="38" fill="#FFD700"/>
      <ellipse cx="68" cy="122" rx="10" ry="8" fill="#FF6B6B" opacity="0.5"/>
      <ellipse cx="132" cy="122" rx="10" ry="8" fill="#FF6B6B" opacity="0.5"/>
      {/* Sad eyes */}
      <path d="M83 108 Q90 102 97 108" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M103 108 Q110 102 117 108" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Worried brows */}
      <path d="M80 98 Q87 95 95 100" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M105 100 Q112 95 120 98" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Sad mouth */}
      <path d="M88 126 Q100 120 112 126" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Tear */}
      <ellipse cx="85" cy="118" rx="3" ry="5" fill="#A7D8F0"/>
      <polygon points="68,78 58,45 82,70" fill="#FFD700"/>
      <polygon points="132,78 142,45 118,70" fill="#FFD700"/>
      <polygon points="70,76 62,50 78,68" fill="#1a1a1a"/>
      <polygon points="130,76 138,50 122,68" fill="#1a1a1a"/>
      <path d="M145 155 Q165 138 162 118" stroke="#FFD700" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <polygon points="162,118 176,108 156,104" fill="#FF1744"/>
      <text x="140" y="60" fontSize="20">💧</text>
    </svg>
  ),

  // Ash silhouette
  ash: (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Ash's body */}
      <rect x="75" y="110" width="50" height="70" rx="8" fill="#1a5276"/>
      <rect x="65" y="120" width="20" height="50" rx="8" fill="#1a5276"/>
      <rect x="115" y="120" width="20" height="50" rx="8" fill="#1a5276"/>
      {/* Legs */}
      <rect x="78" y="175" width="18" height="25" rx="5" fill="#2c3e50"/>
      <rect x="104" y="175" width="18" height="25" rx="5" fill="#2c3e50"/>
      {/* Head */}
      <circle cx="100" cy="92" r="30" fill="#FDBCB4"/>
      {/* Cap */}
      <ellipse cx="100" cy="68" rx="32" ry="15" fill="#FF1744"/>
      <rect x="68" y="58" width="64" height="18" rx="5" fill="#FF1744"/>
      <ellipse cx="100" cy="58" rx="20" ry="8" fill="#1a1a1a"/>
      {/* Eyes */}
      <circle cx="89" cy="94" r="4" fill="#1a1a1a"/>
      <circle cx="111" cy="94" r="4" fill="#1a1a1a"/>
      <circle cx="90" cy="93" r="1.5" fill="white"/>
      <circle cx="112" cy="93" r="1.5" fill="white"/>
      {/* Cheek marks */}
      <path d="M80 100 L76 98 L79 96" stroke="#FF9999" strokeWidth="1.5" fill="none"/>
      <path d="M120 100 L124 98 L121 96" stroke="#FF9999" strokeWidth="1.5" fill="none"/>
      {/* Smile */}
      <path d="M92 102 Q100 108 108 102" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Pokéball on belt */}
      <circle cx="100" cy="135" r="8" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M92,135 A8,8 0 0,1 108,135" fill="#FF1744"/>
      <circle cx="100" cy="135" r="3" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
    </svg>
  )
}

const MOODS = {
  idle:        { svg: 'onsen',  animate: { y: [0,-10,0] },          transition: { duration:3, repeat:Infinity } },
  happy:       { svg: 'play',   animate: { rotate:[-5,5,-5,5,0], scale:[1,1.1,1] }, transition: { duration:0.5, repeat:3 } },
  sad:         { svg: 'sad',    animate: { y:[0,5,0] },             transition: { duration:2, repeat:Infinity } },
  curious:     { svg: 'peep',   animate: { y:[0,-6,0] },            transition: { duration:2.5, repeat:Infinity } },
  encouraging: { svg: 'ash',    animate: { x:[-4,4,-4,4,0] },      transition: { duration:0.5, repeat:2 } },
}

export default function Pikachu({ mood = 'idle', size = 'md' }) {
  const sizes = { sm:'w-20 h-20', md:'w-36 h-36', lg:'w-52 h-52', xl:'w-72 h-72' }
  const { svg, animate, transition } = MOODS[mood] || MOODS.idle

  return (
    <motion.div
      className={`${sizes[size]} relative select-none`}
      animate={animate}
      transition={transition}
      style={{ filter: 'drop-shadow(0 8px 24px rgba(255,215,0,0.5))' }}
    >
      {PIKACHU_SVGS[svg]}
    </motion.div>
  )
}
