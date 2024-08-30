import React from 'react';
import { useRef } from "react";
import "./about.scss";
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";


const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}


export const About = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div className='mainContainer' ref={ref} variants={container} initial="hidden" animate={isInView} whileInView="visible" >
      <motion.div className='textContainer' variants={variants} >
        <motion.h2 className='overview' >
          Overview
          <hr />
        </motion.h2>
      </motion.div>
      <div className='resumeContainer'>
      <motion.p className='presentation' variants={variants} >
        <b>Hi again!</b> I bring a wealth of experience, particularly in UX/UI design and frontend development. With a solid background, I have successfully led projects as a Freelance, guiding from the beginning of UX to UI implementation. Additionally, I have backend and database skills that allow for more ideal application deployment.
        <br />
        <a href="https://drive.google.com/file/d/1HM8n0qz1BP1M4xeUhKbtampA8GLHH6Hh/view?usp=drive_link" target='_blank'>
          <button>Resume</button>
        </a>
      </motion.p>
      </div>
      

      <div className='cardsContainer' >
        <div className='cards' >
          <motion.div className="contenedor" variants={variants}>
            <motion.div className="containerItem1">
              <h2>FrontEnd</h2>
              <img src='./frontend.png' alt="" />
            </motion.div>
            <motion.div className="containerItem2">
              <img src="./icon-css.png" alt="CSS" />
              <img src="./icon-html.png" alt="HTML" />
              <img src="./icon-javascript.png" alt="JavaScript" />
              <img src="./icon-react.png" alt="React" />
              <img src="./icon-bootstrap.png" alt="Bootstrap" />
            </motion.div>
          </motion.div>
        </div>

        <div className='cards' >
          <motion.div className="contenedor" variants={variants}>
            <motion.div className="containerItem1">
              <h2>BackEnd</h2>
              <img src="./icons-backend.png" alt="" />
            </motion.div>
            <motion.div className="containerItem2">
              <img src="./icon-java.png" alt="Java" />
              <img src="./icon-json.png" alt="Json" />
              <img src="./icon-mysql.png" alt="MySql" />
              <img src="./icon-php.png" alt="PHP" />
              <img src="./icon-python.png" alt="Python" />
            </motion.div>
          </motion.div>
        </div>

        <div className='cards' >
          <motion.div className="contenedor" variants={variants}>
            <motion.div className="containerItem1">
              <h2>UX / UI Designer</h2>
              <img src="./icon-ux-designer.png" alt="" />
            </motion.div>
            <motion.div className="containerItem2">
              <img src="./icon-figma.png" alt="Figma" />
              <img src="./icon-xd.png" alt="Adobe XD" />
            </motion.div>
          </motion.div>
        </div>
      </div>

    </motion.div>
  )
}

export default About;