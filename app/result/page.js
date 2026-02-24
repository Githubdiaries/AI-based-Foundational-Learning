'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'

export default function Result() {
  const router = useRouter()
  const { quizScore, selectedTopic, setVideoSource } = useStore()
  const confettiFired = useRef(false)

  const passed = quizScore >= 70
  const mood = quizScore >= 70 ? 'happy' : quizScore >= 40 ? 'encouraging' : 'sad'

  useEffect(() => {
    if (passed && !confettiFired.current) {
      confettiFired.current = true
      if (typeof window !== 'undefined') {
        import('canvas-confetti').then(({ default: confetti }) => {
          confetti({ particleCount: 150, spread: 80, origin: { y: 0.4 },
            colors: ['#FFD700', '#FF1744', '#3B4CCA', '#FFFFFF'] })
        })
      }
    }
  }, [passed])

  const getMessage = () => {
    if (quizScore >= 90) return { text: "LEGENDARY! 🏆", sub: "You're a Grammar Master!", color: '#FFD700' }
    if (quizScore >= 70) return { text: "YOU PASSED! ⚡", sub: "Great job, Trainer!", color: '#4CAF50' }
    if (quizScore >= 40) return { text: "Keep Trying! 💪", sub: "Almost there! Try the simple quiz.", color: '#FF9800' }
    return { text: "Don't Give Up! 🌱", sub: "Watch a video and try again!", color: '#FF1744' }
  }

  const msg = getMessage()

  // HP bar color
  const hpClass = quizScore >= 70 ? '' : quizScore >= 40 ? 'medium' : 'low'

  return (
    <div className="min-h-screen" style={{background: passed
      ? 'linear-gradient(160deg,#FFD700 0%,#FFF9C4 50%,#FFFFFF 100%)'
      : 'linear-gradient(160deg,#FF1744 0%,#FF6B35 50%,#FFD700 100%)'}}>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">

        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
          transition={{type:'spring', stiffness:150}}
          className="poke-card p-8 text-center"
        >
          {/* Pikachu */}
          <div className="flex justify-center mb-4">
            <Pikachu mood={mood} size="lg" />
          </div>

          {/* Score circle */}
          <motion.div
            initial={{scale:0}} animate={{scale:1}}
            transition={{delay:0.3, type:'spring', stiffness:200}}
            className="relative inline-flex items-center justify-center w-40 h-40 rounded-full border-8 mb-6"
            style={{borderColor: msg.color, boxShadow:`0 0 30px ${msg.color}88`}}
          >
            <div>
              <div className="text-5xl font-black" style={{fontFamily:'Bangers', color:msg.color, letterSpacing:'2px'}}>
                {quizScore}%
              </div>
              <div className="text-xs font-bold text-gray-500">Score</div>
            </div>
          </motion.div>

          {/* HP Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs font-black text-gray-500 mb-1">
              <span>HP</span><span>{quizScore}/100</span>
            </div>
            <div className="hp-bar">
              <motion.div
                className={`hp-fill ${hpClass}`}
                initial={{width:0}}
                animate={{width:`${quizScore}%`}}
                transition={{duration:1.5, delay:0.5, ease:'easeOut'}}
              />
            </div>
          </div>

          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}
            className="text-5xl font-black mb-2"
            style={{fontFamily:'Bangers', color:msg.color, letterSpacing:'3px', textShadow:`2px 2px 0 ${msg.color}44`}}>
            {msg.text}
          </motion.h1>
          <p className="text-gray-600 font-bold text-lg mb-8">{msg.sub}</p>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            {passed ? (
              <>
                <motion.button
                  whileHover={{scale:1.04,y:-3}} whileTap={{scale:0.96}}
                  onClick={() => router.push('/topics')}
                  className="py-4 rounded-2xl font-black text-xl text-white shadow-xl"
                  style={{background:'linear-gradient(180deg,#4CAF50 50%,#388E3C 100%)', border:'3px solid #1a1a1a', fontFamily:'Bangers', letterSpacing:'2px'}}
                >
                  ⚡ NEXT TOPIC!
                </motion.button>
                <motion.button
                  whileHover={{scale:1.04}} whileTap={{scale:0.96}}
                  onClick={() => router.push(`/quiz/${selectedTopic}?type=main`)}
                  className="py-3 rounded-2xl font-bold text-gray-600 border-2 border-gray-300 hover:border-red-400"
                >
                  🔄 Retake for higher score
                </motion.button>
              </>
            ) : (
              <>
                <motion.button
                  whileHover={{scale:1.04,y:-3}} whileTap={{scale:0.96}}
                  onClick={() => router.push(`/quiz/${selectedTopic}?type=simple`)}
                  className="py-4 rounded-2xl font-black text-xl text-white shadow-xl"
                  style={{background:'linear-gradient(180deg,#FF9800 50%,#F57C00 100%)', border:'3px solid #1a1a1a', fontFamily:'Bangers', letterSpacing:'2px'}}
                >
                  🌱 TRY SIMPLE QUIZ
                </motion.button>
                <motion.button
                  whileHover={{scale:1.04,y:-3}} whileTap={{scale:0.96}}
                  onClick={() => { setVideoSource('result'); router.push(`/videos/${selectedTopic}`) }}
                  className="py-4 rounded-2xl font-black text-xl text-white shadow-xl"
                  style={{background:'linear-gradient(135deg,#3B4CCA,#5C6BC0)', border:'3px solid #1a1a1a', fontFamily:'Bangers', letterSpacing:'2px'}}
                >
                  🎬 WATCH VIDEOS
                </motion.button>
                <motion.button
                  whileHover={{scale:1.04}} whileTap={{scale:0.96}}
                  onClick={() => router.push(`/learn/${selectedTopic}`)}
                  className="py-3 rounded-2xl font-bold text-gray-600 border-2 border-gray-300 hover:border-yellow-400"
                >
                  📖 Review Lesson Again
                </motion.button>
              </>
            )}
          </div>
        </motion.div>

      </main>
    </div>
  )
}
