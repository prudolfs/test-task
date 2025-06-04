import { useState } from 'react'
import { useNavigate } from "react-router";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select, SelectTrigger, SelectContent, SelectItem } from './components/ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { tests } from '@/data/tests'
import type { TestSelectError } from '@/types'

function Home() {
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
        name: 'Error: Name is required',
        testId: null,
      })
      return
    }

    if (isNaN(testId)) {
      setError({
        name: null,
        testId: 'Error: Selected test is required',
      })
      return
    }

    const test = tests.find((test) => test.id === testId)
    if (!test) {
      setError({
        name: null,
        testId: 'Error: Selected test is required',
      })
      return
    }

    navigate(`/test/${testId}/${test.questions[0].id}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Welcome to the Test</CardTitle>
          </CardHeader>

          <CardContent>
            <Input name="name" type="text" placeholder="Enter your name" />
            {error.name && <p className="text-red-500">{error.name}</p>}
            <Select name="testId">
              <SelectTrigger>
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
            {error.testId && <p className="text-red-500">{error.testId}</p>}
          </CardContent>
          <CardFooter>
            <Button>Start</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default Home
