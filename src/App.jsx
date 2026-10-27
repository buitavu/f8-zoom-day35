import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './Components/Navigation'
import './App.css'
import ButtonDefault from './Components/ButtonsDefault'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navigation />
       <ButtonDefault Bordered >Click me!</ButtonDefault>
    </>
  )
}

export default App
