# ⚡ GrammarPal – Catch 'Em All Grammar!

A Pokémon-themed English Grammar learning app for Class 6–10 students.

## 🎮 Demo Login
- **Email**: any email (e.g. ash@pokemon.com)
- **Password**: demo123 (or any 4+ chars)

## 🚀 Deploy to Vercel (1-click)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. **Root Directory**: leave as `/` (this IS the Next.js app)
5. Framework: Next.js (auto-detected)
6. Click **Deploy** → Done! ✅

## 🛠 Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Structure
```
grammarpal/
├── app/              # Next.js App Router pages
│   ├── login/        # Login screen
│   ├── dashboard/    # Home with Pikachu
│   ├── classes/      # Class selection
│   ├── topics/       # Grammar topics
│   ├── learn/[topic] # Lesson content + TTS
│   ├── quiz/[topic]  # MCQ quiz
│   ├── result/       # Main quiz result
│   ├── result-simple # Simple quiz result
│   ├── videos/[topic]# YouTube videos
│   └── help/         # Help form
├── components/       # Pikachu, Navbar
├── lib/mockData.js   # All quiz data
├── store/useStore.js # Zustand state
└── vercel.json       # Deploy config
```

## ⚡ Features
- 5 Grammar Topics: Nouns, Verbs, Tenses, Articles, Prepositions
- Main Quiz + Simple Quiz per topic
- Score-based adaptive routing (≥70% pass)
- Pikachu SVG mascot with 5 moods
- Text-to-Speech lesson narration
- YouTube video embeds per topic
- Help form → localStorage
- Mobile-responsive, Pokémon-themed UI
- Framer Motion animations

## 🎨 Theme
Bright Pokémon: Yellow #FFD700 + Red #FF1744 + Blue #3B4CCA
