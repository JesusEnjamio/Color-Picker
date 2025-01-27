import { useState } from 'react'
import ColorPicker from './components/colorPicker'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center">
      <ColorPicker />
      </main>
    </>
  )
}

export default App
