import images from '../Project-Images';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Aria.scss'
import { motion } from 'framer-motion';




const Aria = () => {
  const aria_images = images.aria_images

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll:1,  
    autoplaySpeed: 4000,
    cssEase: "linear",
    autoplay: true,
    fade: true,
    arrows: false,
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
    <motion.div className='aria' variants={projectContentVariants} initial="hidden" animate="visible">
      <div className='aria-slider'>
        <Slider {...settings} className="slider">

          {aria_images.map((image, index) => (
            <img key={index} className='aria-image' src={image} alt='aria-img'/>
          ))}
        </Slider>
      </div>
      <div className='aria-desc'>
        <p>A virtual platform where users can connect with friends and share YouTube videos while chatting in real-time.</p>
        <p>Technology: ReactJS, Firebase, Sass, Socket.io, API </p>
        <p>
          <a href='https://github.com/kersv/Aria' target='_blank' rel='noreferrer' className='project-link'>Github</a> 
          <a href='https://www.youtube.com/watch?v=nkq0dWIijSU&ab_channel=michaeltessey' target='_blank' rel='noreferrer' className='project-link'>YouTube</a> 
        </p>
      </div>
      
    </motion.div>
  )
}

export default Aria