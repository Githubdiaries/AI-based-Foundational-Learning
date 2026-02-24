'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'
import { MOCK_DATA, TOPIC_COLORS } from '@/lib/mockData'

export default function Learn({ params }) {
  const topic = decodeURIComponent(params.topic)
  const router = useRouter()
  const { setSelectedTopic, setVideoSource } = useStore()
  const [speaking, setSpeaking] = useState(false)
  const [currentPara, setCurrentPara] = useState(0)

  const data = MOCK_DATA[topic]
  const colors = TOPIC_COLORS[topic] || TOPIC_COLORS['Nouns']

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Navbar />
        <p className="text-2xl font-black text-red-600">Topic not found! 😕</p>
        <button onClick={() => router.push('/topics')} className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold">Back to Topics</button>
      </div>
    )
  }

  const speak = (text) => {
    if (typeof window === 'undefined') return
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.rate = 0.9
    utter.onstart = () => setSpeaking(true)
    utter.onend = () => setSpeaking(false)
    window.speechSynthesis.speak(utter)
  }

  const stopSpeaking = () => {
    if (typeof window !== 'undefined') window.speechSynthesis.cancel()
    setSpeaking(false)
  }

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#FFD700 0%,#FFF9C4 50%,#FFFFFF 100%)'}}>
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 py-2">
        <p className="text-sm font-bold text-gray-500">
          <span className="cursor-pointer hover:text-red-600" onClick={() => router.push('/dashboard')}>Home</span>
          {' → '}
          <span className="cursor-pointer hover:text-red-600" onClick={() => router.push('/topics')}>Topics</span>
          {' → '}
          <span className="text-red-600">{topic}</span>
        </p>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-4">
        <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="poke-card p-8 mb-6">

          {/* Header */}
          <div className="flex items-center gap-6 mb-6 flex-wrap">
            <motion.div animate={{y:[0,-8,0]}} transition={{duration:2.5,repeat:Infinity}}>
              <Pikachu mood="idle" size="sm" />
            </motion.div>
            <div>
              <span className={`type-badge ${colors.badge} mb-2`}>{colors.type} Type</span>
              <h1 className="text-4xl font-black text-red-600"
                style={{fontFamily:'Bangers, cursive', letterSpacing:'2px'}}>
                {data.lesson.title}
              </h1>
            </div>
          </div>

          {/* TTS Controls */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <motion.button
              whileHover={{scale:1.05}} whileTap={{scale:0.95}}
              onClick={() => speak(data.lesson.content.join(' '))}
              className="flex items-center gap-2 px-5 py-2 rounded-full font-black text-white text-sm"
              style={{background:'linear-gradient(135deg,#3B4CCA,#5C6BC0)', border:'2px solid #1a1a1a'}}
            >
              {speaking ? '🔊 Speaking...' : '🔊 Read Aloud'}
            </motion.button>
            {speaking && (
              <motion.button initial={{opacity:0}} animate={{opacity:1}}
                onClick={stopSpeaking}
                whileHover={{scale:1.05}} whileTap={{scale:0.95}}
                className="flex items-center gap-2 px-5 py-2 rounded-full font-black text-white text-sm"
                style={{background:'#FF1744', border:'2px solid #1a1a1a'}}
              >
                ⏹ Stop
              </motion.button>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            {data.lesson.content.map((para, i) => (
              <motion.div
                key={i}
                initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}}
                transition={{delay: i * 0.2}}
                onClick={() => { setCurrentPara(i); speak(para) }}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  currentPara === i ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-white hover:border-yellow-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">
                    {i === 0 ? colors.icon : i === 1 ? '📖' : '💡'}
                  </span>
                  <p className="text-gray-700 font-semibold leading-relaxed text-base">{para}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4}}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <motion.button
            whileHover={{scale:1.04, y:-4}} whileTap={{scale:0.96}}
            onClick={() => {
              setSelectedTopic(topic)
              setVideoSource('learn')
              router.push(`/videos/${topic}`)
            }}
            className="p-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 shadow-xl"
            style={{background:'linear-gradient(135deg,#3B4CCA,#5C6BC0)', border:'3px solid #1a1a1a'}}
          >
            🎬 Watch Videos
          </motion.button>

          <motion.button
            whileHover={{scale:1.04, y:-4}} whileTap={{scale:0.96}}
            onClick={() => {
              setSelectedTopic(topic)
              router.push(`/quiz/${topic}?type=main`)
            }}
            className="p-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 shadow-xl"
            style={{
              background:'linear-gradient(180deg,#FF1744 50%,#CC0000 100%)',
              border:'3px solid #1a1a1a',
              fontFamily:'Bangers, cursive',
              letterSpacing:'2px'
            }}
          >
            ⚡ TAKE QUIZ!
          </motion.button>
        </motion.div>

        <motion.button
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}
          onClick={() => router.push('/topics')}
          className="mt-6 mx-auto flex items-center gap-2 px-6 py-3 rounded-full font-bold text-gray-600 hover:text-red-600 transition-colors"
        >
          ← Back to Topics
        </motion.button>
      </main>
    </div>
  )
}
