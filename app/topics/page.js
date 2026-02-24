'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'
import { TOPICS, TOPIC_COLORS } from '@/lib/mockData'

export default function Topics() {
  const router = useRouter()
  const { setSelectedTopic, completedTopics, selectedClass } = useStore()

  const select = (topic) => {
    setSelectedTopic(topic)
    router.push(`/learn/${topic}`)
  }

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#FF1744 0%,#FF6B35 30%,#FFD700 70%,#FFF176 100%)'}}>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">

        <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-center mb-8">
          <h1 className="text-5xl font-black text-white mb-2 drop-shadow-lg"
            style={{fontFamily:'Bangers, cursive', letterSpacing:'3px', textShadow:'3px 3px 0 #CC0000'}}>
            Choose Your Topic!
          </h1>
          <p className="text-yellow-100 font-bold">Class {selectedClass} • Pick your grammar battle! ⚡</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic, i) => {
            const { bg, badge, icon, type } = TOPIC_COLORS[topic]
            const done = completedTopics.includes(topic)

            return (
              <motion.button
                key={topic}
                onClick={() => select(topic)}
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 180 }}
                whileHover={{ scale: 1.06, y: -10 }}
                whileTap={{ scale: 0.94 }}
                className="relative rounded-2xl p-6 text-white shadow-2xl overflow-hidden cursor-pointer"
                style={{ border: '3px solid rgba(255,255,255,0.4)', background: 'transparent' }}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-90`}/>

                {/* Shine effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white opacity-10 rounded-t-2xl"/>

                <div className="relative z-10">
                  {/* Done badge */}
                  {done && (
                    <div className="absolute top-0 right-0 bg-white text-green-600 text-xs font-black px-2 py-1 rounded-bl-xl rounded-tr-xl">
                      ✅ DONE
                    </div>
                  )}

                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
                  >
                    {icon}
                  </motion.div>

                  <h2 className="text-3xl font-black mb-1"
                    style={{fontFamily:'Bangers, cursive', letterSpacing:'2px'}}>
                    {topic}
                  </h2>

                  {/* Type badge like Pokémon card */}
                  <span className={`type-badge ${badge} mt-2`}>
                    {type} Type
                  </span>

                  {/* Pokéball button */}
                  <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-bold">
                    <div className="w-5 h-5 rounded-full border-2 border-white"
                      style={{background:'linear-gradient(180deg,white 50%,rgba(255,255,255,0.3) 50%)'}}/>
                    Start Lesson →
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        <motion.button
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}
          onClick={() => router.push('/classes')}
          className="mt-8 mx-auto flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white/80 hover:text-white transition-colors"
        >
          ← Back to Classes
        </motion.button>
      </main>
    </div>
  )
}
