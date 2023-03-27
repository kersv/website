import './Codenames.scss'
import images from '../Project-Images';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const Codenames = () => {
  const codenames_images = images.codenames_images

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
    <motion.div className='codenames' variants={projectContentVariants} initial="hidden" animate="visible">
      <div className='codenames-slider'>
        <Slider {...settings} className="slider">

          {codenames_images.map((image, index) => (
            <img key={index} className='codenames-image' src={image} alt='aria-img'/>
          ))}
        </Slider>
      </div>
      <div className='codenames-desc'>
        <p>Codenames is a team-based word game where players give one-word clues to help their team identify their agents while avoiding the neutral and opposing team's agents.</p>
        <p>Technology: ReactJS, Python, Django, Postman, Heroku </p>
        <p>
          <a href='https://github.com/amyghotra/codenames' target='_blank' rel='noreferrer' className='project-link'>Github</a> 
        </p>
      </div>
      
    </motion.div>
  )
}

export default Codenames