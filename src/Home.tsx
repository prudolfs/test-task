import clsx from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { tests } from '@/data/tests'
import { useStore } from '@/store'
import AcademicCap from '@/icons/AcademicCap'
import type { TestSelectError } from '@/types'

function Home() {
  const { setName, setAnswers } = useStore()
  const [error, setError] = useState<TestSelectError>({
    name: null,
    testId: null,
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name') as string
    const testIdValue = formData.get('testId') as string
    const testId = parseInt(testIdValue)

    if (!name) {
      setError({
        name: 'Name is required',
        testId: null,
      })
      return
    }

    if (isNaN(testId)) {
      setError({
        name: null,
        testId: 'Selected test is required',
      })
      return
    }

    const test = tests.find((test) => test.id === testId)
    if (!test) {
      setError({
        name: null,
        testId: 'Selected test is required',
      })
      return
    }

    setAnswers([])
    setName(name)
    navigate(`/test/${testId}/${test.questions[0].id}`)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <Card className="w-80 lg:w-128">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold lg:text-2xl">
                Welcome to the Test
              </h1>
              <div className="mt-4">
                <AcademicCap className="h-18 w-18 stroke-violet-800" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="name" className="mb-2">
              Your Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <div
              className={`my-1 ml-4 flex ${clsx(!error.name && 'opacity-0')}`}
            >
              <p className="text-sm text-red-700">Error: {error.name}</p>
            </div>
            <Label className="mb-2">Select a Test</Label>
            <Select name="testId">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a test" />
              </SelectTrigger>
              <SelectContent>
                {tests.map((test) => (
                  <SelectItem key={test.id} value={test.id.toString()}>
                    {test.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div
              className={`my-1 ml-4 flex ${clsx(!error.testId && 'opacity-0')}`}
            >
              <p className="text-sm text-red-700">Error: {error.testId}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default Home
