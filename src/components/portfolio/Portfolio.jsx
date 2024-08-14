import React from 'react';
import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Global Fit",
    img: "./globalFit.gif",
    description: "Physical activity promotes bone and muscle growth, improving spatial perception and coordination. Develops motor skills, reflexes and reactions, promoting values ​​such as tolerance and perseverance. In addition, it contributes to physical and mental health, reducing stress and promoting healthy habits from childhood. Parental support is essential for children's physical, cognitive and personality development.",
    link: "",
  },

  {
    id: 2,
    title: "Psico Eduardo",
    img: "./mental-health2.jpg",
    description: "Welcome! I am Eduardo Andrés Ospina Villa, a psychologist with a solid academic background, including a Master's Degree in Psychology and Mental Health. With 7 years of experience as a clinical psychologist, I offer specialized care from Post-Rationalist Cognitive Therapy. I provide therapy for children, adolescents and adults, both individually, as a couple or family, whether in person or virtual. I am here to help you!",
    link: "",
  },

  {
    id: 3,
    title: "Leslie Nuñez",
    img: "./leslie.PNG",
    description: "Integrate the experience, name and identity of the brand with the different digital platforms in order to expand its reach. The integration and consolidation of the brand identity are the starting point and differentiation. The details of expanding the brand to other platforms are very important, the colors, the logo, the typography, among others. All those components that make a brand its identity.",
    link: "",
  },

  // {
  //     id: 4,
  //     title: "Geotechnical Website",
  //     img: "./geotecnia.jpg",
  //     description: "The creation of the brand and its digital footprint, addressing all identity content such as color, iconography, typography, among others, makes up the main aspect of the birth of Geotechnical in the virtual world, this in order to expand its market, meet with customer demands, generating trust through a complete and intuitive web environment. Reaching more clients, more opportunities in the market nationally.",
  //     link: "",
  // }
]

const Single = ({ item }) => {
  const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section  > 
            <div className="container"  >
                <div className="wrapper">
                    <motion.div className="imageContainer" ref={ref} whileHover={{
                        transition: { duration: 1 },
                        scale: 1.15,
                    }} >
                        <img src={item.img} alt="" />
                    </motion.div>
                    <motion.div className="textContainer" style={{ y }} whileHover={{
                        transition: { duration: 1 },
                        scale: 1.05,
                        backgroundColor: "#black",
                        color: "#cfb313",
                    }} >
                        <motion.h2 whileHover={{ scale: 1.07 }} >{item.title}</motion.h2>
                        <p> {item.description} </p>
                        {/* <Link  target="_blank">
                            <button>View Case Study</button>
                        </Link> */}
                        <a href={item.link}target="_blank">
                            <button>View Case Study</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(
          item => (<Single item={item} key={item.id} />)
        )
        }
    </div>

  )
}

export default Portfolio;
