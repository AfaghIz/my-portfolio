import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
{/* TODO: implement
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
*/}

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* //Commented out for the time being
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Navbar />
        <Footer />
        */}
      </Routes>
    </>
  )
}

export default App
