import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./link.scss";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 50,
        opacity: 1,
    },
    closed: {
        y: 0,
        opacity: 0,
    }
}

const Links = () => {
    return (
        <motion.div className='links' variants={variants}>
            <nav>
                <motion.ul>
                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="/">Home</Link>
                    </motion.li>
 
                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="#Services" onClick={(e) => scrollToSection(e, 'Services')}>Services</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="#Portfolio" onClick={(e) => scrollToSection(e, 'Portfolio')}>Portfolio</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="/external1" id='external_links' target='_blank'>Global Fit</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="/external2" id='external_links' target='_blank'>Eduardo Ospina</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="/external3" id='external_links' target='_blank'>Leslie Nuñez</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="#About" onClick={(e) => scrollToSection(e, 'About')}>About</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="#Contact" onClick={(e) => scrollToSection(e, 'Contact')}>Contact</Link>
                    </motion.li>
                </motion.ul>
            </nav>
            <br />
            <Outlet />
        </motion.div>
    );
}

export default Links;

const scrollToSection = (e, sectionId) => {
    e.preventDefault();  
    const section = document.getElementById(sectionId);  
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); 
    }
};
