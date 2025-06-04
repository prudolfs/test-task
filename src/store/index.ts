import { create } from 'zustand'
import type { TestStore } from '@/types'

export const useStore = create<TestStore>((set) => ({
  name: '',
  answers: [],
  setName: (name: string) => set(() => ({ name })),
  setAnswers: (answers: boolean[]) => set(() => ({ answers })),
}))
