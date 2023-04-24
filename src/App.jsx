import { useState } from 'react'
import './App.css'
import AdminBootcampView from './pages/AdminBootcampView'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      {/*<AdminBootcampView />*/}
      <AdminBootcampView />

    </div>
  )
}

export default App
