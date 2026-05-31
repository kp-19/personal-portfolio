import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from "motion/react"

type DarkModeProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Contact: React.FC<DarkModeProps> = ({ isDarkMode, setIsDarkMode }) => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "269b5b71-f771-48d7-8ba3-16d1b951f4d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST", 
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")]
     bg-no-repeat bg-center bg-size-[90%_auto] dark:bg-none'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
     >
        <motion.h4 className='text-center mb-2 text-lg font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
        >
            Connect with me</motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >
            Get in touch</motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
        >
            I'm always open to discussing new opportunities, 
            interesting projects, research collaborations, 
            or simply connecting with like-minded people. 
            Feel free to reach out, and I'll get back to you as soon as possible.
        </motion.p>

        <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.9}}
        >
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input type="text" placeholder='Enter your name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                dark:bg-darkHover/30 dark:border-white/90'
                name='name' 

                initial={{opacity: 0 , x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 1.1}}
                />
                <motion.input type="email" placeholder='Enter your email' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                dark:bg-darkHover/30 dark:border-white/90' 
                name='email'

                initial={{opacity: 0 , x: 50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 1.2}}
                />
            </div>
            <motion.textarea name="message" rows={6} placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
            dark:bg-darkHover/30 dark:border-white/90'

            initial={{opacity: 0 , y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 1.3}}
            ></motion.textarea>

            <motion.button type='submit' className='px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
                whileHover={{scale:1.05}}
                transition={{duration: 0.3}}
            >
                Submit now
                <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div> 
  )
}

export default Contact