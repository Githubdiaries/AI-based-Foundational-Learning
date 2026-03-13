

import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: "GrammarPal – Catch 'Em All Grammar!",
  description: "Learn English Grammar the Pokémon way!"
}
        <meta name="description" content="Learn English Grammar the Pokémon way!" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
