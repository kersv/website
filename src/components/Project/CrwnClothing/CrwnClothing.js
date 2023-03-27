import './CrwnClothing.scss'
import images from '../Project-Images';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const CrwnClothing = () => {
  const crwn_images = images.crwn_images

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
    <motion.div className='crwn-clothing' variants={projectContentVariants} initial="hidden" animate="visible">
      <div className='crwn-clothing-slider'>
        <Slider {...settings} className="slider">

          {crwn_images.map((image, index) => (
            <img key={index} className='crwn-clothing-image' src={image} alt='aria-img'/>
          ))}
        </Slider>
      </div>
      <div className='crwn-clothing-desc'>
        <p>An E-commerce platform enables users to create an account, log in, browse products, add items to the cart, and complete the checkout process.</p>
        <p>Technology: ReactJS, Firebase, Sass, Redux </p>
        <p>
          <a href='https://github.com/kersv/crwn-clothing-v2' target='_blank' rel='noreferrer' className='project-link'>Github</a> 
        </p>
      </div>
      
    </motion.div>
  )
}

export default CrwnClothing