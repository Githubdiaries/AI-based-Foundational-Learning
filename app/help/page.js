'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'

export default function Help() {
  const router = useRouter()
  const { currentUser, selectedTopic } = useStore()
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState(selectedTopic || '')
  const [sent, setSent] = useState(false)
  const [pikaMood, setPikaMood] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    const req = {
      id: Date.now(),
      from: currentUser?.email || 'Unknown',
      subject,
      message,
      time: new Date().toLocaleString()
    }
    const existing = JSON.parse(localStorage.getItem('gp_help_requests') || '[]')
    localStorage.setItem('gp_help_requests', JSON.stringify([...existing, req]))
    setPikaMood('happy')
    setSent(true)
  }

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#FFD700 0%,#FFF9C4 50%,#FFFFFF 100%)'}}>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div key="form" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-30}}>
              <div className="text-center mb-6">
                <motion.div
                  animate={{x:[-5,5,-5,5,0]}}
                  transition={{duration:0.5, repeat:Infinity, repeatDelay:3}}
                  className="inline-block mb-3"
                >
                  <Pikachu mood={pikaMood} size="md" />
                </motion.div>
                <h1 className="text-5xl font-black text-red-600 mb-1"
                  style={{fontFamily:'Bangers', letterSpacing:'3px'}}>
                  Need Help? 🆘
                </h1>
                <p className="text-yellow-700 font-bold">Send a message to your teacher!</p>
              </div>

              <div className="poke-card p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-1">
                      🍃 From
                    </label>
                    <input
                      value={currentUser?.name || 'You'}
                      disabled
                      className="w-full px-4 py-3 rounded-xl font-bold text-gray-500 bg-gray-100"
                      style={{border:'2px solid #ddd'}}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-1">
                      🍃 Topic / Subject
                    </label>
                    <input
                      value={subject}
                      onChange={e => { setSubject(e.target.value); setPikaMood('curious') }}
                      placeholder="e.g. Nouns, Tenses..."
                      className="w-full px-4 py-3 rounded-xl font-bold text-gray-800 outline-none transition-all"
                      style={{border:'2px solid #FFD700', background:'rgba(255,255,255,0.9)'}}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-1">
                      🍃 Your Question
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={e => { setMessage(e.target.value); setPikaMood('curious') }}
                      placeholder="Hi teacher! I need help with..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl font-bold text-gray-800 outline-none transition-all resize-none"
                      style={{border:'2px solid #FFD700', background:'rgba(255,255,255,0.9)'}}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{scale:1.03}} whileTap={{scale:0.97}}
                    className="w-full py-4 rounded-2xl font-black text-xl text-white shadow-xl"
                    style={{
                      background:'linear-gradient(180deg,#FF1744 50%,#CC0000 100%)',
                      border:'3px solid #1a1a1a',
                      fontFamily:'Bangers',
                      letterSpacing:'2px'
                    }}
                  >
                    ⚡ SEND TO TEACHER!
                  </motion.button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div key="done" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
              transition={{type:'spring', stiffness:150}}
              className="poke-card p-10 text-center"
            >
              <div className="flex justify-center mb-4">
                <Pikachu mood="happy" size="lg" />
              </div>
              <h2 className="text-5xl font-black text-green-600 mb-3"
                style={{fontFamily:'Bangers', letterSpacing:'3px'}}>
                Message Sent! ⚡
              </h2>
              <p className="text-gray-600 font-bold text-lg mb-8">
                Your teacher will get back to you soon! Keep learning in the meantime!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{scale:1.04}} whileTap={{scale:0.96}}
                  onClick={() => { setSent(false); setMessage(''); setPikaMood('idle') }}
                  className="flex-1 py-3 rounded-2xl font-bold text-gray-600 border-2 border-gray-300 hover:border-yellow-400"
                >
                  Send Another
                </motion.button>
                <motion.button
                  whileHover={{scale:1.04}} whileTap={{scale:0.96}}
                  onClick={() => router.push('/dashboard')}
                  className="flex-1 py-3 rounded-2xl font-black text-white"
                  style={{background:'linear-gradient(180deg,#FF1744 50%,#CC0000 100%)', border:'2px solid #1a1a1a'}}
                >
                  🏠 Back to Home
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  )
}
