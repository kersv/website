import './Project.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Aria from './Aria/Aria'
import CrwnClothing from './CrwnClothing/CrwnClothing'
import Codenames from './Codenames/Codenames'

const Project = () => {

  const [projectContent, setProjectContent] = useState(0)

  const changeProject = (id) => {
    setProjectContent(id)
  }

  const projectListVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
  };
  
  const projectContentVariants = {
    hidden: { opacity: 0, x: 50, y: -50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 2}} exit={{ opacity: 0 }} className='project'>
      <motion.div className='project-display' variants={projectContentVariants} initial="hidden" animate="visible">
        <div className='project-content'>
          {projectContent === 0 ? <Aria/> : ''}
          {projectContent === 1 ? <CrwnClothing/> : ''}
          {projectContent === 2 ? <Codenames/> : ''}
        </div>

      </motion.div>
      <motion.div variants={projectListVariants} initial="hidden" animate="visible" className='project-list'>
        <div className='project-name' onClick={() => changeProject(0)}>
          <span className='year'>2023</span> 
          <span className='name'>Aria</span>
        </div>
        <div className='project-name' onClick={() => changeProject(1)}>
          <span className='year'>2023</span> 
          <span className='name'>CrwnClothing</span>
        </div>
        <div className='project-name' onClick={() => changeProject(2)}>
          <span className='year'>2021</span> 
          <span className='name'>Codenames</span>
        </div>
        
        
        
      </motion.div>

      
    </motion.div>
  )
}

export default Project
