export type Answer = {
  id: number
  text: string
  isCorrect: boolean
}

export type Question = {
  id: number
  text: string
  answers: Answer[]
}

export type Test = {
  id: number
  title: string
  description: string
  questions: Question[]
}

export type TestResult = {
  userId: string
  testId: number
  correctAnswers: number
  totalQuestions: number
  timestamp: number
}

export type UserAnswer = {
  questionId: number
  answerId: number
}

export type TestSelectError = {
  [key: string]: string | null
}

export type TestStore = {
  name: string
  answers: boolean[]
  setName: (name: string) => void
  setAnswers: (answers: boolean[]) => void
}
