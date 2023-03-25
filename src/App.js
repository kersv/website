import { useState, createContext } from 'react';
import Nav from './components/Nav/Nav';
import './App.scss';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  
  const [index, setIndex] = useState(0)
  const content = ['Home', 'About', 'Project', 'Contact' ]
  
  
  const handleScroll = (event) => {
    const delta = event.deltaY
    if(delta > 0){
      setIndex(index +1 >= content.length ? 0 : index +1)
    }
    else{
      setIndex(index -1 < 0 ? content.length-1 : index -1)
    }
  }


  const value = {theme, toggleTheme, setIndex}
  
  return (
    <ThemeContext.Provider value={value}>
      <div className='App' id={theme}>
        <div className='border-container' onWheel={handleScroll} >
          

          {/* ----- BACKGROUND -------- */}
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          
          <Nav/>
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='content'>
              {index === 0 ? <Home/> : ''}
              {index === 1 ? <About/> : ''}
              {index === 2 ? <Project/> : ''}
              {index === 3 ? <Contact/> : ''}

            </motion.div>
          </AnimatePresence>

        </div>
        
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
