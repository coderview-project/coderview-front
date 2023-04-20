import { useState } from 'react'
import './App.css'
import AdminView from './pages/AdminView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      {/*<AdminBootcampView />*/}
      <AdminView />

    </div>
  )
}

export default App
