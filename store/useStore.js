import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      currentUser: null,
      selectedClass: null,
      selectedTopic: null,
      quizScore: 0,
      quizType: 'main',
      videoSource: 'learn',
      completedTopics: [],

      setCurrentUser: (user) => set({ currentUser: user }),
      setSelectedClass: (c) => set({ selectedClass: c }),
      setSelectedTopic: (t) => set({ selectedTopic: t }),
      setQuizScore: (s) => set({ quizScore: s }),
      setQuizType: (t) => set({ quizType: t }),
      setVideoSource: (s) => set({ videoSource: s }),
      addCompletedTopic: (t) => set((state) => ({
        completedTopics: [...new Set([...state.completedTopics, t])]
      })),
      logout: () => set({
        currentUser: null, selectedClass: null, selectedTopic: null,
        quizScore: 0, quizType: 'main', videoSource: 'learn'
      }),
    }),
    { name: 'grammarpal-store' }
  )
)

export default useStore
