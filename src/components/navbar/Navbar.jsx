import "./navbar.scss";
import React from 'react';
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="navbar">

      <div className="wrapper" >
        <motion.a
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }} href="">
          <img
            className="logo-text-white"
            src="./logo-text-white.png"
            alt="juang logo" title="JuanG" />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }} href="">

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
            <a href="">
              <img id="social-media4" className="social-media" src="./github.png" alt="github logo" title="Github Logo" />
            </a>
          </div>

        </motion.a>


      </div>
    </div>
  )
}

export default Navbar