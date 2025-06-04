import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { tests } from '@/data/tests'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import { useStore } from '@/store'
import { Progress } from '@/components/ui/progress'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'

function Test() {
  const store = useStore()
  const navigate = useNavigate()
  const { id, qid } = useParams()

  const [selectedAnswer, setSelectedAnswer] = useState('')

  const testId = id && parseInt(id)
  const questionId = qid && parseInt(qid)
  const testIndex = tests.findIndex((test) => test.id === testId)
  const questionIndex = tests[testIndex].questions.findIndex(
    (question) => question.id === questionId,
  )

  if (!tests[testIndex] || !tests[testIndex].questions[questionIndex]) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-red-700 lg:text-2xl">
          Error: Invalid test or question id
        </h1>
      </div>
    )
  }

  const questions = tests[testIndex].questions
  const questionOrder = questionIndex + 1
  const progress = (questionOrder / questions.length) * 100
  const answers = questions[questionIndex].answers

  const handleAnswer = () => {
    const isCorrect = answers.find(
      (answer) => answer.id.toString() === selectedAnswer,
    )?.isCorrect
    const storeAnswers = [...store.answers]
    storeAnswers[questionIndex] = Boolean(isCorrect)
    store.setAnswers(storeAnswers)
    setSelectedAnswer('')

    if (questionOrder === questions.length) {
      navigate(`/result/${testId}`)
    } else {
      navigate(`/test/${testId}/${questions[questionIndex + 1].id}`)
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Card className="w-80 lg:w-128">
        <CardHeader>
          <CardTitle>
            <Progress value={progress} />
            <p className="text-muted-foreground mt-1 text-sm">
              Question {questionOrder} of {questions.length}
            </p>
            <h1 className="mt-4 text-xl font-bold lg:text-2xl">
              {questions[questionIndex].text}
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            name="answers"
            value={selectedAnswer}
            onValueChange={(value) => setSelectedAnswer(value)}
          >
            {answers.map((answer) => (
              <div key={answer.id} className="mb-1 flex items-center space-x-2">
                <RadioGroupItem
                  id={answer.id.toString()}
                  value={answer.id.toString()}
                />
                <Label htmlFor={answer.id.toString()} className="text-lg">
                  {answer.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button
            disabled={!selectedAnswer}
            className="w-full"
            onClick={handleAnswer}
          >
            {questionOrder === questions.length ? 'Finish' : 'Next'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Test
