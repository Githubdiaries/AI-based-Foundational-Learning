'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    let token = null

    if (typeof window !== 'undefined') {
      token = localStorage.getItem('gp_token')
    }

    router.replace(token ? '/dashboard' : '/login')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="pokeball-loader" />
    </div>
  )
}
