import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen }) => {
    return (
        <motion.button onClick={() => setOpen((prev) => !prev)} 
            
        >
            <svg width="25" height="25" viewBox="0 0 20 20">

                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={
                        {
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }
                    }
                />
                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />

            </svg>
        </motion.button>
    )
}

export default ToggleButton