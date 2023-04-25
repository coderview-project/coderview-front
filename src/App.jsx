import { useState } from 'react'
import './App.css'
//import AdminBootcampView from './pages/AdminBootcampView;
import AdminView from './pages/AdminView'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AdminView />
      {/*<AdminBootcampView />*/}
      {/*<AdminBootcampView />*/}

    </div>
  )
}

export default App
