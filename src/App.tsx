import { Routes, Route } from 'react-router'
import Home from '@/Home'
import Test from '@/Test'
import Result from '@/Result'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test/:id/:qid" element={<Test />} />
      <Route path="/result/:id" element={<Result />} />
    </Routes>
  )
}

export default App
