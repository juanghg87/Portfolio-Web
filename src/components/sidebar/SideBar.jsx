import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";
import { useState } from "react";
import { motion } from "framer-motion";



const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const variants = {
        open: {
            clipPath: "circle(900px at 50px 50px)",
            transition: {
                delay: 0.01,
                type: "spring",
                sfiffness: 400,
                damping: 40,
            }
        },
        closed: {
            clipPath: "circle(25px at 50px 50px)",
            transition: {
                delay: 0.3,
                type: "spring",
                sfiffness: 400,
                damping: 40,
            }
        }
    };

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"} >
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div >
    )
}

export default Sidebar;