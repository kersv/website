import {useContext, useState} from "react";
import { ThemeContext } from "../../App";
import {FiSun, FiMoon, FiMenu, FiX} from 'react-icons/fi'
import './Nav.scss'
import {motion} from 'framer-motion'


const Nav = () => {
  const {theme, toggleTheme, setIndex} = useContext(ThemeContext)
  
  
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const changeContent = (idx) => {
    setIndex(idx)
  }
  



  return (
    <div className="nav-container">
      <motion.span onClick={() => changeContent(0)} initial={{x: '-100%'}} animate={{x: 0}} transition={{duration: 1}} className="navLogo" >Kevin</motion.span>
      <motion.ul initial={{y: '-100%'}} animate={{y: 0}} transition={{duration: 1}} className='nav-menu' >
        <li onClick={() => changeContent(0)} className="nav-item">
          Home
        </li>
        <li onClick={() => changeContent(1)} className="nav-item">
          About
        </li>
        <li onClick={() => changeContent(2)} className="nav-item">
          Project
        </li>
        <li onClick={() => changeContent(3)} className="nav-item">
          Contact
        </li>
      </motion.ul>

      
      <motion.ul initial={{y: '-100%'}} animate={{y: showMenu ? 0 : '-100%'}} transition={{duration: 1}} className={`nav-slide-menu ${showMenu ? 'show' : ''}`} >
        <li onClick={() => changeContent(0)} className="nav-item">
          Home
        </li>
        <li onClick={() => changeContent(1)} className="nav-item">
          About
        </li>
        <li onClick={() => changeContent(2)} className="nav-item">
          Project
        </li>
        <li onClick={() => changeContent(3)} className="nav-item">
          Contact
        </li>
      </motion.ul>

      

      <motion.span initial={{x: '100%'}} animate={{x: 0}} transition={{duration: 1}} className='icon-stack'>
        <motion.span initial={{x: '100%'}} animate={{x: 0}} transition={{duration: 1}} onClick={toggleTheme}>{theme === 'light' ? <FiSun className="icon"/> : <FiMoon className="icon"/>}</motion.span>
        {showMenu ? (<span className="navbar-toggle" onClick={toggleMenu} >{<FiX className="icon-menu"/>}</span>) : (<span className="navbar-toggle" onClick={toggleMenu} >{<FiMenu className="icon-menu"/>}</span>)}
      </motion.span>
    
    </div>
    )
  }
  


export default Nav