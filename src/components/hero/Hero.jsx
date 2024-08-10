import React from 'react';
import "./hero.scss";
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: 200,
            repeatType: "reverse",
        }
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "37%",
        opacity: 1,
        transition: {
            duration: 5,
            repeat: 200,
            repeatType: "reverse",
        },
    },
}

const Hero = () => {
    return (
        <div className='hero'>
            <motion.div className="imageContainer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                whileInView={{ scale: 1.05 }}
                drag
            >
                <img src="./juang-photo.png" alt="Juan Guillero Photo" />
            </motion.div>
            <motion.div className="wrapper"
                variants={
                    textVariants
                }
            >
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate" 
                    >
                    <motion.h2 variants={textVariants} >Hi! I´m Juan...</motion.h2>
                    <motion.h1 variants={textVariants} >UX / UI designer <br /> Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">

                        <motion.button
                            className="button"
                            variants={textVariants}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            onClick={() => {
                                const contactSection = document.getElementById('Portfolio');
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >Projects</motion.button>

                        <motion.button
                            className="button"
                            variants={textVariants}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            onClick={() => {
                                const contactSection = document.getElementById('Contact');
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >¡Get in Touch!</motion.button>

                        <motion.button
                            className="button"
                            variants={textVariants}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            onClick={() => {
                                const contactSection = document.getElementById('About');
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >About</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" className="scroll" src="./scroll.png" alt="" />
                </motion.div>
            </motion.div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Think, Create, Develop.
            </motion.div>
        </div>
    )
}

export default Hero