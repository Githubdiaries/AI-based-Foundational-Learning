"use client"

import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: "GrammarPal – Catch 'Em All Grammar!",
  description: "Learn English Grammar the Pokémon way!"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
