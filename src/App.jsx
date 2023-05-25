import { Home } from './components/Pages/home'
import { useEffect } from 'react'
import './App.css'

function App() {
  // useEffect(() => {
  //   async function fetchData() {

  //     console.log(data)
  //   }
  //   fetchData()
  // },[])

  return (
    <div className='max-w-screen h-screen'>
      <Home />
    </div>
  )
}

export default App
