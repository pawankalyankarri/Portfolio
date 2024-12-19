import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
