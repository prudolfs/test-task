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
