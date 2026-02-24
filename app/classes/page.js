'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'

const CLASS_THEMES = [
  { num: 6, emoji: '🌱', color: '#4CAF50', bg: '#E8F5E9' },
  { num: 7, emoji: '⚡', color: '#FFD700', bg: '#FFFDE7' },
  { num: 8, emoji: '🔥', color: '#FF5722', bg: '#FBE9E7' },
  { num: 9, emoji: '💧', color: '#2196F3', bg: '#E3F2FD' },
  { num: 10, emoji: '🌙', color: '#9C27B0', bg: '#F3E5F5' },
]

export default function Classes() {
  const router = useRouter()
  const { setSelectedClass } = useStore()

  const select = (num) => {
    setSelectedClass(num)
    router.push('/topics')
  }

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#FFD700 0%,#FFF9C4 40%,#FFFFFF 100%)'}}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">

        <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Pikachu mood="curious" size="md" />
          </div>
          <h1 className="text-5xl font-black text-red-600 mb-2"
            style={{fontFamily:'Bangers, cursive', letterSpacing:'3px'}}>
            Choose Your Class!
          </h1>
          <p className="text-yellow-700 font-bold">Select your grade to begin the adventure ⚡</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLASS_THEMES.map(({ num, emoji, color, bg }, i) => (
            <motion.button
              key={num}
              onClick={() => select(num)}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -8, rotate: [-1,1,-1,1,0] }}
              whileTap={{ scale: 0.95 }}
              className="poke-card p-8 flex flex-col items-center gap-3 cursor-pointer group"
              style={{ borderColor: color }}
            >
              <motion.div className="text-6xl"
                animate={{ y: [0,-8,0] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity }}>
                {emoji}
              </motion.div>
              <div className="text-4xl font-black" style={{ fontFamily: 'Bangers, cursive', color, letterSpacing: '2px' }}>
                Class {num}
              </div>
              <div className="text-sm font-bold text-gray-500">Grade {num}</div>
              {/* Pokéball decoration */}
              <div className="w-8 h-8 rounded-full border-2 border-gray-800 opacity-30 group-hover:opacity-70 transition-opacity"
                style={{background:`linear-gradient(180deg,${color} 50%,white 50%)`}}/>
            </motion.button>
          ))}
        </div>

        {/* Back */}
        <motion.button
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}
          onClick={() => router.push('/dashboard')}
          className="mt-8 mx-auto flex items-center gap-2 px-6 py-3 rounded-full font-bold text-gray-600 hover:text-red-600 transition-colors"
        >
          ← Back to Home
        </motion.button>
      </main>
    </div>
  )
}
