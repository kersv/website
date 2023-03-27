import './About.scss'
import { motion } from 'framer-motion'

const About = () => {


  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
  };
  const aboutVariants = {
    hidden: { opacity: 0, x: 50, y: -50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
  };
  

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 2}} exit={{ opacity: 0 }} className='about'>
      <motion.h2
        className="header"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        About
      </motion.h2>
      <div className='content-container'>
        <div className='about-me-container'>
          <motion.p className="about-me" variants={aboutVariants} initial="hidden" animate="visible" >
            Hi! My name is Kevin and I am a web developer with a passion for creating responsive and functional websites.  I am constantly seeking to expand my knowledge of new technologies and trends in the web development industry. 
          </motion.p>
        </div>
        <div className='skills-container'>
          <motion.div className='skills' variants={containerVariants} initial="hidden" animate="visible">
            <motion.img variants={itemVariants} src='https://cdn-icons-png.flaticon.com/512/732/732212.png' className='icon-img'></motion.img>
            <motion.img variants={itemVariants} src='https://cdn-icons-png.flaticon.com/512/732/732190.png' className='icon-img'></motion.img>
            <motion.img variants={itemVariants} src='https://cdn-icons-png.flaticon.com/512/919/919828.png' className='icon-img'></motion.img>
            <motion.img variants={itemVariants} src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' className='icon-img'></motion.img>
            <motion.img variants={itemVariants} src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' className='icon-img'></motion.img>
            <motion.img variants={itemVariants} src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png' className='icon-img'></motion.img>
            <motion.img variants={itemVariants} src='https://cdn-icons-png.flaticon.com/512/5968/5968350.png' className='icon-img'></motion.img>
            <motion.img variants={itemVariants} src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' className='icon-img'></motion.img>
 
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  )
}

export default About

