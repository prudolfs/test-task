import { useNavigate } from 'react-router'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useStore } from '@/store'
import { Button } from '@/components/ui/button'
import Trophy from '@/icons/Trophy'

function Result() {
  const { name, answers } = useStore()
  const navigate = useNavigate()
  const correctAnswers = answers.filter(Boolean).length
  const totalQuestions = answers.length
  const percentage = Math.round((correctAnswers / totalQuestions) * 100)

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Card className="w-80 lg:w-128">
        <CardHeader>
          <CardTitle className="flex flex-col items-center justify-center">
            <div>
              <Trophy className="h-18 w-18 stroke-yellow-500" />
            </div>
            <h1 className="mt-4 text-center text-xl font-bold lg:text-2xl">
              Congratulations, {name}!
            </h1>
            <p className="text-muted-foreground mt-1 text-center text-sm">
              You have completed the test
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-8">
            <h2 className="text-5xl font-bold text-violet-700">
              {percentage}%
            </h2>
            <p className="text-muted-foreground mt-2 text-center">
              You have answered {correctAnswers} out of {totalQuestions}{' '}
              questions correctly.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => navigate('/')}>
            Return to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Result
