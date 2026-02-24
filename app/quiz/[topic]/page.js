'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'
import { MOCK_DATA, TOPIC_COLORS } from '@/lib/mockData'

const DIFF_COLORS = { easy: 'bg-green-100 text-green-700', medium: 'bg-yellow-100 text-yellow-700', hard: 'bg-red-100 text-red-700' }

export default function Quiz({ params }) {
  const topic = decodeURIComponent(params.topic)
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'main'

  const router = useRouter()
  const { setQuizScore, setQuizType, setSelectedTopic, addCompletedTopic } = useStore()

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [timerActive, setTimerActive] = useState(true)

  const data = MOCK_DATA[topic]
  const questions = data ? (type === 'main' ? data.mainQuiz : data.simpleQuiz) : []
  const colors = TOPIC_COLORS[topic] || TOPIC_COLORS['Nouns']
  const q = questions[current]

  useEffect(() => {
    if (!timerActive || showFeedback) return
    if (timeLeft <= 0) { handleSelect(-1); return }
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000)
    return () => clearTimeout(t)
  }, [timeLeft, timerActive, showFeedback])

  const handleSelect = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    setTimerActive(false)
    setShowFeedback(true)
  }

  const handleNext = () => {
    const newAnswers = [...answers, selected === q.ans]
    setAnswers(newAnswers)
    setShowFeedback(false)
    setSelected(null)
    setTimeLeft(30)
    setTimerActive(true)

    if (current + 1 >= questions.length) {
      const correct = newAnswers.filter(Boolean).length
      const pct = Math.round((correct / questions.length) * 100)
      setQuizScore(pct)
      setQuizType(type)
      setSelectedTopic(topic)
      if (pct >= 70) addCompletedTopic(topic)
      router.push(type === 'main' ? '/result' : '/result-simple')
    } else {
      setCurrent(p => p + 1)
    }
  }

  if (!data || questions.length === 0) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-2xl font-black text-red-600">Topic not found!</p></div>
  }

  const progress = ((current) / questions.length) * 100
  const isCorrect = selected === q.ans
  const timerPct = (timeLeft / 30) * 100

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#FF1744 0%,#FF6B35 40%,#FFD700 100%)'}}>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-6">

        {/* Header */}
        <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="poke-card p-5 mb-5">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-3">
            <div>
              <span className={`type-badge ${colors.badge}`}>{type === 'main' ? '⚡ Main Quiz' : '🌱 Simple Quiz'}</span>
              <h1 className="text-3xl font-black text-red-600 mt-1"
                style={{fontFamily:'Bangers', letterSpacing:'2px'}}>{topic}</h1>
            </div>
            <Pikachu mood={showFeedback ? (isCorrect ? 'happy' : 'sad') : 'curious'} size="sm" />
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-black text-gray-500">{current + 1}/{questions.length}</span>
            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-red-500 to-yellow-400"
                initial={{width:0}} animate={{width:`${progress}%`}} />
            </div>
            <span className="text-xs font-black text-gray-500">{Math.round(progress)}%</span>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500">⏱</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: timerPct > 50 ? '#4CAF50' : timerPct > 25 ? '#FF9800' : '#FF1744',
                  width: `${timerPct}%`
                }}
                transition={{duration:1, ease:'linear'}}
              />
            </div>
            <span className={`text-sm font-black ${timeLeft <= 5 ? 'text-red-600 animate-bounce' : 'text-gray-600'}`}>
              {timeLeft}s
            </span>
          </div>
        </motion.div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}}
            className="poke-card p-6 mb-5"
          >
            <div className="flex items-start gap-3 mb-6">
              <span className={`type-badge ${DIFF_COLORS[q.diff]}`}>{q.diff}</span>
            </div>
            <p className="text-xl font-black text-gray-800 mb-6 leading-relaxed">{q.q}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {q.opts.map((opt, idx) => {
                let style = 'border-2 border-gray-200 bg-white text-gray-700 hover:border-yellow-400 hover:bg-yellow-50'
                if (showFeedback) {
                  if (idx === q.ans) style = 'border-2 border-green-500 bg-green-50 text-green-700'
                  else if (idx === selected) style = 'border-2 border-red-500 bg-red-50 text-red-700'
                  else style = 'border-2 border-gray-200 bg-gray-50 text-gray-400'
                }
                if (selected === idx && !showFeedback) style = 'border-2 border-yellow-400 bg-yellow-50 text-gray-800'

                return (
                  <motion.button
                    key={idx}
                    onClick={() => !showFeedback && handleSelect(idx)}
                    whileHover={!showFeedback ? {scale:1.02} : {}}
                    whileTap={!showFeedback ? {scale:0.98} : {}}
                    className={`p-4 rounded-xl text-left font-bold transition-all ${style}`}
                  >
                    <span className="font-black text-gray-500 mr-2">
                      {['A','B','C','D'][idx]}.
                    </span>
                    {opt}
                    {showFeedback && idx === q.ans && ' ✅'}
                    {showFeedback && idx === selected && idx !== q.ans && ' ❌'}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feedback & Next */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}}
              className={`poke-card p-5 flex items-center justify-between flex-wrap gap-4 ${isCorrect ? 'border-green-400' : 'border-red-400'}`}
            >
              <div>
                <p className="text-2xl font-black" style={{fontFamily:'Bangers', letterSpacing:'2px',
                  color: isCorrect ? '#4CAF50' : '#FF1744'}}>
                  {isCorrect ? '⚡ CORRECT! +10 XP' : '❌ Wrong Answer!'}
                </p>
                {!isCorrect && (
                  <p className="text-sm font-bold text-gray-600 mt-1">
                    ✅ Correct: <span className="text-green-600">{q.opts[q.ans]}</span>
                  </p>
                )}
              </div>
              <motion.button
                whileHover={{scale:1.05}} whileTap={{scale:0.95}}
                onClick={handleNext}
                className="px-8 py-3 rounded-2xl font-black text-white text-lg"
                style={{
                  background:'linear-gradient(180deg,#FF1744 50%,#CC0000 100%)',
                  border:'2px solid #1a1a1a',
                  fontFamily:'Bangers',
                  letterSpacing:'2px'
                }}
              >
                {current + 1 >= questions.length ? '🏆 SEE RESULTS!' : 'NEXT →'}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  )
}
