import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
