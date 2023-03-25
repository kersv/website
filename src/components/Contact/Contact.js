import './Contact.scss'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 2}} exit={{ opacity: 0 }} className='contact'>
      <span className='name'>Contact</span>
      <span className='job'>Web Developer</span>
    </motion.div>
  )
}

export default Contact
