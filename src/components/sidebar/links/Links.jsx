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
        <motion.div className='links' variants={variants} >
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
                        {/* <Link to="/external1">Services</Link> */}
                        <a href="#Services" >Services</a>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        {/* <Link to="/external1">Portfolio</Link> */}
                        <a href="#Portfolio">Portfolio</a>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="/external1" id='external_links'>Global Fit</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="/external2" id='external_links'>Eduardo Ospina</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <Link to="/external3" id='external_links'>Leslie Nuñez</Link>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        {/* <Link to="/external1">About</Link> */}
                        <a href="#About">About</a>
                    </motion.li>

                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.5 }}
                    >
                        {/* <Link to="/external1">Contact</Link> */}
                        <a href="#Contact">Contact</a>
                    </motion.li>

                </motion.ul>
            </nav>
            <br />
            <Outlet />
        </motion.div>
    )
}

export default Links