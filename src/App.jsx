import { useState } from 'react'
import './App.css'
import AdminBootcampView from '../src/pages/AdminBootcampView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AdminBootcampView />
    </div>
  )
}

export default App
