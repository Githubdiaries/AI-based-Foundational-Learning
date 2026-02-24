'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'

export default function ResultSimple() {
  const router = useRouter()
  const { quizScore, selectedTopic, setVideoSource } = useStore()
  const [showPopup, setShowPopup] = useState(false)
  const confettiFired = useRef(false)

  const passed = quizScore >= 70

  useEffect(() => {
    if (passed && !confettiFired.current) {
      confettiFired.current = true
      if (typeof window !== 'undefined') {
        import('canvas-confetti').then(({ default: confetti }) => {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 },
            colors: ['#FFD700', '#4CAF50', '#FF1744'] })
        })
      }
    }
    if (!passed) {
      const t = setTimeout(() => setShowPopup(true), 1500)
      return () => clearTimeout(t)
    }
  }, [passed])

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#4CAF50 0%,#A5D6A7 50%,#FFFFFF 100%)'}}>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">

        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
          transition={{type:'spring', stiffness:150}}
          className="poke-card p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <Pikachu mood={passed ? 'happy' : 'encouraging'} size="lg" />
          </div>

          {/* Score */}
          <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3,type:'spring'}}
            className="inline-flex items-center justify-center w-36 h-36 rounded-full border-8 mb-6"
            style={{borderColor: passed ? '#4CAF50' : '#FF9800', boxShadow:`0 0 25px ${passed ? '#4CAF5088' : '#FF980088'}`}}>
            <div>
              <div className="text-4xl font-black" style={{fontFamily:'Bangers', color: passed ? '#4CAF50' : '#FF9800', letterSpacing:'2px'}}>
                {quizScore}%
              </div>
              <div className="text-xs font-bold text-gray-500">Score</div>
            </div>
          </motion.div>

          <h1 className="text-4xl font-black mb-2" style={{fontFamily:'Bangers', letterSpacing:'3px',
            color: passed ? '#4CAF50' : '#FF9800'}}>
            {passed ? '🌟 SIMPLE QUIZ PASSED!' : '💪 KEEP GOING!'}
          </h1>
          <p className="text-gray-600 font-bold mb-8">
            {passed ? 'Now take the Main Quiz to unlock the next topic!' : "Don't worry — watch a video or retake!"}
          </p>

          {passed ? (
            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{scale:1.04,y:-3}} whileTap={{scale:0.96}}
                onClick={() => router.push(`/quiz/${selectedTopic}?type=main`)}
                className="py-4 rounded-2xl font-black text-xl text-white shadow-xl"
                style={{background:'linear-gradient(180deg,#FF1744 50%,#CC0000 100%)', border:'3px solid #1a1a1a', fontFamily:'Bangers', letterSpacing:'2px'}}
              >
                ⚡ TAKE MAIN QUIZ NOW!
              </motion.button>
              <p className="text-xs text-gray-500 font-bold">You must pass the main quiz (≥70%) to advance</p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{scale:1.04,y:-3}} whileTap={{scale:0.96}}
                onClick={() => { setVideoSource('popup'); router.push(`/videos/${selectedTopic}`) }}
                className="flex-1 py-4 rounded-2xl font-black text-lg text-white"
                style={{background:'linear-gradient(135deg,#3B4CCA,#5C6BC0)', border:'3px solid #1a1a1a', fontFamily:'Bangers', letterSpacing:'2px'}}
              >
                🎬 WATCH VIDEO
              </motion.button>
              <motion.button
                whileHover={{scale:1.04,y:-3}} whileTap={{scale:0.96}}
                onClick={() => router.push(`/quiz/${selectedTopic}?type=simple`)}
                className="flex-1 py-4 rounded-2xl font-black text-lg text-white"
                style={{background:'linear-gradient(180deg,#FF9800 50%,#F57C00 100%)', border:'3px solid #1a1a1a', fontFamily:'Bangers', letterSpacing:'2px'}}
              >
                🔄 RETAKE QUIZ
              </motion.button>
            </div>
          )}
        </motion.div>
      </main>

      {/* Popup for failed */}
      <AnimatePresence>
        {showPopup && !passed && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPopup(false)}>
            <motion.div
              initial={{scale:0.5, y:100}} animate={{scale:1, y:0}} exit={{scale:0.5}}
              transition={{type:'spring', stiffness:200}}
              onClick={e => e.stopPropagation()}
              className="poke-card p-8 max-w-sm w-full text-center"
            >
              <div className="flex justify-center mb-3">
                <Pikachu mood="encouraging" size="md" />
              </div>
              <h2 className="text-3xl font-black text-red-600 mb-2" style={{fontFamily:'Bangers', letterSpacing:'2px'}}>
                Need Help? ⚡
              </h2>
              <p className="text-gray-600 font-bold mb-6">Pikachu believes in you! What do you want to do?</p>
              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{scale:1.05}} whileTap={{scale:0.95}}
                  onClick={() => { setVideoSource('popup'); router.push(`/videos/${selectedTopic}`) }}
                  className="py-3 rounded-xl font-black text-white"
                  style={{background:'linear-gradient(135deg,#3B4CCA,#5C6BC0)', border:'2px solid #1a1a1a'}}
                >
                  🎬 Watch a Video First
                </motion.button>
                <motion.button
                  whileHover={{scale:1.05}} whileTap={{scale:0.95}}
                  onClick={() => { setShowPopup(false); router.push(`/quiz/${selectedTopic}?type=simple`) }}
                  className="py-3 rounded-xl font-black text-white"
                  style={{background:'linear-gradient(180deg,#FF9800 50%,#F57C00 100%)', border:'2px solid #1a1a1a'}}
                >
                  🔄 Retake Simple Quiz
                </motion.button>
                <button onClick={() => setShowPopup(false)} className="text-sm text-gray-400 font-bold">
                  Maybe later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
