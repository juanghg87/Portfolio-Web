import React, { useRef, useState } from 'react';
import "./contact.scss"
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = { 
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

function Contact() {

    const ref = useRef();
    const inInView = useInView(ref, { margin: "-100px" });
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eioz0wv', 'template_kmwrg2l', formRef.current, 'LEZsQBzfZw7xrEho1')
            .then((result) => {
                setSuccess(true);
                formRef.current.reset();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setError(true);
            });
    };

    return (
        <motion.div className='contactContainer' >
            <motion.div className='contact' variants={variants} initial="initial" whileInView="animate" >
                <motion.div className="textContainer" variants={variants} >
                    <motion.h1 variants={variants} >
                        Let´s Work Together
                    </motion.h1>
                    <motion.div className="item" variants={variants} >
                        <h2>Mail</h2>
                        <span>juanghg@gmail.com</span>
                    </motion.div>
                    <motion.div className="item" variants={variants} >
                        <h2>Based</h2>
                        <span>Medellín, Colombia</span>
                    </motion.div>
                    <motion.div className="item" variants={variants} >
                        <h2>Phone</h2>
                        <span>+57 301 5018260</span>
                    </motion.div>
                </motion.div>
                <div className="formContainer">
                    <motion.form ref={formRef} onSubmit={sendEmail} action="" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} >
                        <input type="text" required placeholder='Name' name='name' className='name' />
                        <input type="email" required placeholder='Email' name='email' className='email'/>
                        <textarea rows={8} placeholder='Message' name='message' />
                        <button>Send</button>
                        {error && "Error"}
                        {success && "Message sent successfully"} 
                    </motion.form>
                </div>
            </motion.div>
        </motion.div>
    )
}
export default Contact; 