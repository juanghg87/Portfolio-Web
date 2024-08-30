import React from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Parallax = ({ type }) => {

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const yBg3 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const yBg4 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Design", "Functionality", "Coherence", "Interactive", "Honest"];
  const words2 = ["Intuitive", "Seamless", "Accessible", "Engaging", "User-centered"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='parallax' ref={ref}>
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? words[wordIndex] : words2[wordIndex]}
      </motion.h1>
      <span>
        {type === "services" ? "Design adds value faster than it adds costs. -- Joel Spolsky" : "Design is not just what it looks like and feels like. Design is how it works. -- Steve Jobs"}
      </span>
      <motion.div className={`parallax1 ${type === "services" ? "" : "brainLeft"}`}
        style={{
          x: type=== "services" ? yBg2 : yBg4,
          backgroundImage:
            `url(${type === "services" ? "./parallax1.png" : "./brainLeft.png"})`
        }}
        whileHover={{
          scale: 1.3,
          originX: -1.5,
          originY: 1,
          originZ: 1,
        }}
      ></motion.div>
      <motion.div className={`parallax2 ${type === "services" ? "" : "brainRigth"}`}
        style={{
          x: type=== "services" ? yBg1 : yBg3,
          backgroundImage: `url(${
            type=== "services" ? "./parallax2.png" : "./brainRigth.png"
          })`
        }}
        whileHover={{
          scale: 1.3,
          originX: 1.5,
          originY: 1,
          originZ: 1,
        }}
      ></motion.div>

    </div>
  )
}

export default Parallax;