import './Project.scss'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 2}} exit={{ opacity: 0 }} className='project'>
      <span className='name'>Project</span>
      <span className='job'>Web Developer</span>
    </motion.div>
  )
}

export default Project
