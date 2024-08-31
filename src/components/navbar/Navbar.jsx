import "./navbar.scss";
import React from 'react';
import { motion } from "framer-motion";
import SideBar from "../sidebar/SideBar";


const Navbar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper" >

        <motion.a
          initial={{ opacity: 0, scale: 0, x: -200, y: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 1.5 }} 
          whileInView={{scale: 1.1}}
          href="">

          <div className="social" >
            <a href="https://www.linkedin.com/in/juanghg87/" target="blank">
              <img id="social-media1" className="social-media" src="./linkedin.png" alt="linkedin logo" title="LinkedIn Logo" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=573015018260" target="blank">
              <img id="social-media2" className="social-media" src="./whatsapp.png" alt="whatsapp logo" title="WhatsApp Logo" />
            </a>
            <a href="">
              <img id="social-media3" className="social-media" src="./instagram.png" alt="instagram logo" title="Instagram Logo" />
            </a>
            <a href="https://github.com/juanghg87" target="blank">
              <img id="social-media4" className="social-media" src="./github.png" alt="github logo" title="Github Logo" />
            </a>
          </div>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0, x: 200, y: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 1.5 }} 
          whileHover= {{opacity: 2,scale: 1.15}}
          whileInView={{scale: 1.1}}
          drag
          href="">
          <img
            className="logo-text-white"
            src="./logo-text-white.png"
            alt="juang logo" title="JuanG" />
        </motion.a>


      </div>
    </div>
  )
}

export default Navbar;