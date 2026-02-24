'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'

export default function Dashboard() {
  const router = useRouter()
  const { currentUser, completedTopics } = useStore()

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('gp_token') : null
    if (!token && !currentUser) router.push('/login')
  }, [currentUser, router])

  if (!currentUser) return <div className="min-h-screen flex items-center justify-center"><div className="pokeball-loader"/></div>

  const xp = completedTopics.length * 120
  const level = Math.floor(xp / 300) + 1

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#FFD700 0%,#FFF176 40%,#FFFFFF 70%,#FF1744 100%)'}}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">

        {/* Hero */}
        <motion.div initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}}
          className="poke-card p-8 mb-8 text-center">
          <motion.div animate={{y:[0,-8,0]}} transition={{duration:2.5,repeat:Infinity}} className="inline-block mb-4">
            <Pikachu mood="idle" size="lg" />
          </motion.div>
          <h1 className="text-5xl font-black text-red-600 mb-2"
            style={{fontFamily:'Bangers, cursive', letterSpacing:'3px'}}>
            Welcome Back, {currentUser.name}!
          </h1>
          <p className="text-yellow-600 font-bold text-lg mb-6">Your grammar adventure continues! ⚡</p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Level', value: level, icon: '⭐', color: '#FF1744' },
              { label: 'Topics Done', value: completedTopics.length, icon: '✅', color: '#FFD700' },
              { label: 'Total XP', value: xp, icon: '⚡', color: '#3B4CCA' },
            ].map(({ label, value, icon, color }) => (
              <motion.div key={label} whileHover={{scale:1.05, y:-3}}
                className="rounded-2xl p-4 text-center font-black border-3"
                style={{background:'white', borderColor:color, border:`3px solid ${color}`}}>
                <div className="text-3xl">{icon}</div>
                <div className="text-2xl" style={{color, fontFamily:'Bangers, cursive'}}>{value}</div>
                <div className="text-xs text-gray-600">{label}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => router.push('/classes')}
            whileHover={{scale:1.05}} whileTap={{scale:0.95}}
            className="px-12 py-4 rounded-2xl text-white font-black text-2xl shadow-2xl"
            style={{
              background:'linear-gradient(180deg,#FF1744 50%,#CC0000 100%)',
              border:'3px solid #1a1a1a',
              fontFamily:'Bangers, cursive',
              letterSpacing:'3px'
            }}
          >
            ⚡ START LEARNING!
          </motion.button>
        </motion.div>

        {/* Friends row */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}}
          className="poke-card p-6">
          <h2 className="text-3xl font-black text-red-600 mb-4 text-center"
            style={{fontFamily:'Bangers', letterSpacing:'2px'}}>
            Your Team 🏆
          </h2>
          <div className="flex justify-around flex-wrap gap-4">
            {[
              { name: 'Pikachu', role: 'Your Partner', emoji: '⚡', bg: '#FFD700' },
              { name: 'Ash', role: 'Trainer Guide', emoji: '🎮', bg: '#FF1744' },
              { name: 'Bulbasaur', role: 'Grammar Guru', emoji: '🌿', bg: '#4CAF50' },
              { name: 'Squirtle', role: 'Quiz Buddy', emoji: '💧', bg: '#2196F3' },
            ].map(({ name, role, emoji, bg }, i) => (
              <motion.div key={name}
                initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}}
                transition={{delay:0.4+i*0.1, type:'spring'}}
                whileHover={{y:-5, scale:1.05}}
                className="flex flex-col items-center p-4 rounded-2xl"
                style={{background:bg+'22', border:`2px solid ${bg}`, minWidth:'90px'}}>
                <div className="text-4xl mb-1">{emoji}</div>
                <div className="font-black text-sm text-gray-800">{name}</div>
                <div className="text-xs text-gray-500">{role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </main>
    </div>
  )
}
