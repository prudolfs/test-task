import { create } from 'zustand'
import type { TestStore } from '@/types'

export const useStore = create<TestStore>((set) => ({
  name: '',
  setName: (name: string) => set(() => ({ name })),
}))
