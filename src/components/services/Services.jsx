import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./services.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}


const Services = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["Listen", "Passion", "Commitment", "Professional", "Synergy"];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={"animate"}
        >
            <motion.div
                className="textContainer"
                variants={variants}
                style={{ y: yText }}
            >
                <p>
                    Focused on enhancing the growth and progress of your brand,
                    <br />
                    through web development and UI/UX design.
                </p>
                <hr />
            </motion.div>
            <motion.div
                className="titleContainer"
                variants={variants}
                style={{ x: yBg1 }}
            >
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }} >
                            Creative
                        </motion.b>
                        Solutions
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}  >
                            For Your
                        </motion.b>
                        Business
                    </h1>
                    <button>{words[wordIndex]}</button>
                </div>
            </motion.div> 
            <motion.div
                className="listContainer"
                variants={variants}
                style={{ x: yBg2 }}
            >
                <motion.div className="box" id="globalFit">
                    <motion.h2 >Global Fit</motion.h2>
                    <motion.p >
                        Smiling, playing and learning are important components of happiness. Transmit from parents to children the essentials for a life full of success and love. Teaching reminds us what it feels like to learn.
                    </motion.p>
                    <Link to="/external1" ><button>UX/UI Design Web Developer</button></Link> 
                </motion.div>
                <motion.div className="box" id="psicoEduardo">
                    <h2>Eduardo Ospina</h2>
                    <p>
                        Mental health is a very personal issue, search within yourself and find a way out, learn and heal, through all those fears, phobias and sufferings that you carry within you.
                    </p>
                    <Link to="/external2" ><button>UX/UI Design Web Developer</button></Link>
                </motion.div>
                <motion.div className="box" id="leslie">
                    <h2>Leslie Nuñez</h2>
                    <p>
                        Look at yourself and smile it's easy. Admire your body and feel the way you always wanted. With our treatments you will find the figure you have wanted, it is safe, easy and possible.
                    </p>
                    <Link to="/external3" ><button>UX/UI Design</button></Link>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default Services;
