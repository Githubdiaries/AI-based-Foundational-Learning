'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '@/store/useStore'
import Pikachu from '@/components/Pikachu'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mood, setMood] = useState('curious')
  const router = useRouter()
  const { setCurrentUser } = useStore()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setMood('idle')

    await new Promise(r => setTimeout(r, 800))

    if (password === 'demo123' || password.length >= 4) {
      const user = { name: email.split('@')[0] || 'Trainer', email }
      setCurrentUser(user)
      if (typeof window !== 'undefined') localStorage.setItem('gp_token', 'mock-token')
      setMood('happy')
      await new Promise(r => setTimeout(r, 500))
      router.push('/dashboard')
    } else {
      setError('Wrong password! Try: demo123')
      setMood('sad')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{background:'linear-gradient(135deg, #FF1744 0%, #FF6B35 25%, #FFD700 50%, #FFF176 75%, #FFFFFF 100%)'}}>

      {/* Floating Pokéballs background */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i}
          className="absolute text-4xl opacity-10 select-none pointer-events-none"
          initial={{ x: Math.random() * 400 - 200, y: -50 }}
          animate={{ y: '110vh', rotate: 360 }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 1.5, ease: 'linear' }}
          style={{ left: `${10 + i * 15}%` }}
        >
          ⚽
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="w-full max-w-md relative z-10"
      >
        {/* Card */}
        <div className="poke-card p-8">
          {/* Pokéball top stripe decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl"
            style={{background:'linear-gradient(90deg,#FF1744,#FFD700,#3B4CCA,#FF1744)'}}/>

          {/* Pikachu */}
          <div className="flex justify-center mb-2">
            <Pikachu mood={mood} size="md" />
          </div>

          <h1 className="text-center text-5xl font-black mb-1 text-red-600 drop-shadow-md"
            style={{fontFamily:'Bangers, cursive', letterSpacing:'3px'}}>
            GrammarPal
          </h1>
          <p className="text-center text-sm font-bold text-yellow-600 mb-6">
            ⚡ Catch 'Em All Grammar! ⚡
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-black text-gray-700 mb-1">Trainer Email</label>
              <input
                type="email" required value={email}
                onChange={e => { setEmail(e.target.value); setMood('curious') }}
                placeholder="ash@pokemon.com"
                className="w-full px-4 py-3 rounded-xl border-3 border-yellow-400 font-bold text-gray-800 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                style={{background:'rgba(255,255,255,0.9)', border:'3px solid #FFD700'}}
              />
            </div>
            <div>
              <label className="block text-sm font-black text-gray-700 mb-1">Secret Password</label>
              <input
                type="password" required value={password}
                onChange={e => { setPassword(e.target.value); setMood('curious') }}
                placeholder="demo123"
                className="w-full px-4 py-3 rounded-xl font-bold text-gray-800 outline-none focus:ring-2 focus:ring-red-200 transition-all"
                style={{background:'rgba(255,255,255,0.9)', border:'3px solid #FFD700'}}
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.p initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0}}
                  className="text-red-600 font-bold text-sm bg-red-50 p-3 rounded-xl border-2 border-red-300">
                  ❌ {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit" disabled={loading}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl font-black text-xl text-white shadow-xl transition-all"
              style={{
                background: loading ? '#999' : 'linear-gradient(180deg,#FF1744 50%,#CC0000 100%)',
                border: '3px solid #1a1a1a',
                fontFamily: 'Bangers, cursive',
                letterSpacing: '2px'
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="pokeball-loader" style={{width:20,height:20}}/>
                  Catching...
                </span>
              ) : '⚡ START JOURNEY!'}
            </motion.button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-4 font-bold">
            🎮 Use any email + password "demo123"
          </p>
        </div>

        {/* Decorative footer */}
        <div className="flex justify-center gap-4 mt-4 text-2xl">
          {['⚡','🔴','⭐','🟡','🔵'].map((e,i) => (
            <motion.span key={i} animate={{y:[0,-5,0]}}
              transition={{duration:1.5, delay:i*0.2, repeat:Infinity}}>
              {e}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
