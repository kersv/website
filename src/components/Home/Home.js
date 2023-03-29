import './Home.scss'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 2}} exit={{ opacity: 0 }} className='home'>
      <div className='intro-desc'>
        <span className='intro'>Hello, I'm</span>
        <span className='name'>Kevin Xie</span>
        <span className='job'>Frontend Engineer</span>
      </div>
      
    </motion.div>
  )
}

export default Home

