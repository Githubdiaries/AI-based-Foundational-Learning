'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, BookOpen, HelpCircle, LogOut, Menu, X, Zap } from 'lucide-react'
import useStore from '@/store/useStore'

const NAV = [
  { label: 'Home', icon: Home, href: '/dashboard' },
  { label: 'Lessons', icon: BookOpen, href: '/classes' },
  { label: 'Help', icon: HelpCircle, href: '/help' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { currentUser, logout } = useStore()

  const handleLogout = () => {
    logout()
    if (typeof window !== 'undefined') localStorage.removeItem('gp_token')
    router.push('/login')
    setOpen(false)
  }

  const go = (href) => { router.push(href); setOpen(false) }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full" style={{background: 'linear-gradient(90deg, #FF1744 0%, #FFD700 50%, #FF1744 100%)', borderBottom: '4px solid #1a1a1a', boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => go('/dashboard')}
          >
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-lg" style={{background:'linear-gradient(180deg,#FF1744 50%,white 50%)'}}>
              <span className="text-xs">⚡</span>
            </div>
            <span className="text-white font-black text-xl tracking-wide drop-shadow" style={{fontFamily:'Bangers, cursive', letterSpacing:'2px'}}>
              GrammarPal
            </span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {NAV.map(({ label, icon: Icon, href }) => (
              <motion.button
                key={href}
                onClick={() => go(href)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm transition-all ${pathname === href ? 'bg-white text-red-600 shadow-lg' : 'text-white hover:bg-white/20'}`}
                style={{fontFamily:'Nunito, sans-serif'}}
              >
                <Icon size={15} />
                {label}
              </motion.button>
            ))}
            {currentUser && (
              <>
                <span className="text-white/80 text-sm font-bold px-2">⚡ {currentUser.name}</span>
                <motion.button
                  onClick={handleLogout}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/20 text-white text-sm font-bold hover:bg-white/40"
                >
                  <LogOut size={14} /> Logout
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              className="md:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}}
              transition={{type:'spring', damping:20}}
              className="md:hidden fixed top-0 right-0 h-screen w-72 z-50 p-6 flex flex-col gap-4"
              style={{background:'linear-gradient(135deg,#FF1744,#FFD700)', borderLeft:'4px solid #1a1a1a'}}
            >
              <button className="self-end text-white" onClick={() => setOpen(false)}><X size={28}/></button>
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">⚡</div>
                <p className="text-white font-black text-lg" style={{fontFamily:'Bangers'}}>
                  {currentUser?.name || 'Trainer'}
                </p>
              </div>
              {NAV.map(({label, icon: Icon, href}) => (
                <motion.button key={href} onClick={() => go(href)}
                  whileTap={{scale:0.95}}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-left ${pathname===href?'bg-white text-red-600':'bg-white/20 text-white'}`}
                >
                  <Icon size={20}/>{label}
                </motion.button>
              ))}
              <motion.button onClick={handleLogout} whileTap={{scale:0.95}}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl font-bold bg-black/20 text-white mt-auto"
              >
                <LogOut size={20}/>Logout
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
