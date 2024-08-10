import React from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Parallax = () => {

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Design", "Functionality", "Coherence", "Interactive", "Honest"];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


  return (
    <div className='parallax' ref={ref}>
      <motion.h1 style={{ y: yText }}>
      {words[wordIndex]}
      </motion.h1>
      <span>
        "Design adds value faster than it adds costs." -- Joel Spolsky
      </span>
      <motion.div className="parallax1"
        style={{ x: yBg2 }}
        whileHover={{
          scale: 1.3,
          originX: -1.5,
          originY: 1,
          originZ: 1,
        }}
      ></motion.div>
      <motion.div className="parallax2"
        style={{ x: yBg1 }}
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