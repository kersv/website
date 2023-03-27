import './Contact.scss'
import { motion } from 'framer-motion'
import {FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineDocumentText} from 'react-icons/hi'
import Resume from '../Images/Resume.pdf'

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 2}} exit={{ opacity: 0 }} className='contact'>
      <div className='contact-container'>
        <a href='https://github.com/kersv' target='_blank' rel='noreferrer' className='contact-icon'>
          <FaGithub className='icon'/> 
          <div className='icon-desc'>Github</div>
        </a>
        <a href='https://www.linkedin.com/in/kersv-kevin-xie/' target='_blank' rel='noreferrer' className='contact-icon'>
          <FaLinkedinIn className='icon'/> 
          <div className='icon-desc'>LinkedIn</div>
        </a>
        <a download href={Resume}  className='contact-icon'>
          <HiOutlineDocumentText className='icon'/> 
          <div className='icon-desc'>Resume</div>
        </a>
      </div>
    </motion.div>
  )
}

export default Contact
