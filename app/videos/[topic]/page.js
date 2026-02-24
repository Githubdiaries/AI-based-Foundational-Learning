'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import useStore from '@/store/useStore'
import Navbar from '@/components/Navbar'
import Pikachu from '@/components/Pikachu'
import { MOCK_DATA, TOPIC_COLORS } from '@/lib/mockData'

export default function Videos({ params }) {
  const topic = decodeURIComponent(params.topic)
  const router = useRouter()
  const { videoSource, setSelectedTopic } = useStore()

  const data = MOCK_DATA[topic]
  const colors = TOPIC_COLORS[topic] || TOPIC_COLORS['Nouns']

  const handleDone = () => {
    setSelectedTopic(topic)
    if (videoSource === 'popup') {
      router.push(`/quiz/${topic}?type=simple`)
    } else if (videoSource === 'result') {
      router.push(`/quiz/${topic}?type=main`)
    } else {
      router.push(`/learn/${topic}`)
    }
  }

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-2xl font-black text-red-600">Topic not found!</p>
    </div>
  )

  return (
    <div className="min-h-screen" style={{background:'linear-gradient(160deg,#3B4CCA 0%,#5C6BC0 40%,#FFD700 100%)'}}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-6">

        <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <Pikachu mood="curious" size="sm" />
          </div>
          <h1 className="text-5xl font-black text-white drop-shadow-lg"
            style={{fontFamily:'Bangers', letterSpacing:'3px', textShadow:'3px 3px 0 rgba(0,0,0,0.2)'}}>
            📺 {topic} Videos
          </h1>
          <p className="text-yellow-200 font-bold mt-1">Watch and learn with Pikachu! ⚡</p>
        </motion.div>

        {/* Bamboo-scroll cards for videos */}
        <div className="space-y-6 mb-8">
          {data.videos.map((vid, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
              transition={{delay: i * 0.15}}
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{border:'4px solid #8B6914', background:'#FFFDE7'}}
            >
              {/* Bamboo top bar */}
              <div className="h-4 flex gap-1 px-2 items-center"
                style={{background:'linear-gradient(90deg,#8B6914,#A67C52,#8B6914)'}}>
                {[...Array(8)].map((_,j) => (
                  <div key={j} className="flex-1 h-2 rounded-full" style={{background:'rgba(255,255,255,0.3)'}}/>
                ))}
              </div>

              <div className="p-4">
                <h3 className="font-black text-gray-800 text-lg mb-3">
                  {i + 1}. {vid.title}
                </h3>
                <div className="rounded-xl overflow-hidden" style={{paddingBottom:'56.25%', position:'relative', background:'#000'}}>
                  <iframe
                    src={vid.url}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{border:'none'}}
                  />
                </div>
              </div>

              {/* Bamboo bottom bar */}
              <div className="h-4 flex gap-1 px-2 items-center"
                style={{background:'linear-gradient(90deg,#8B6914,#A67C52,#8B6914)'}}>
                {[...Array(8)].map((_,j) => (
                  <div key={j} className="flex-1 h-2 rounded-full" style={{background:'rgba(255,255,255,0.3)'}}/>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Done button */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.5}}
          className="text-center">
          <motion.button
            whileHover={{scale:1.05, y:-4}} whileTap={{scale:0.95}}
            onClick={handleDone}
            className="px-12 py-5 rounded-2xl font-black text-xl text-white shadow-2xl"
            style={{
              background:'linear-gradient(180deg,#FF1744 50%,#CC0000 100%)',
              border:'3px solid #1a1a1a',
              fontFamily:'Bangers',
              letterSpacing:'3px'
            }}
          >
            ✅ DONE WATCHING! LET'S GO! →
          </motion.button>
        </motion.div>

      </main>
    </div>
  )
}
