import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

type DarkModeProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Services: React.FC<DarkModeProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div id="services" className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
        >
            What I offer</motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >
            My Services</motion.h2>

        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
        >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, 
            deserunt alias autem aperiam,
            cum doloribus nulla, illo qui unde natus dolores? Quas pariatur ea 
            aperiam asperiores deleniti, cum doloremque voluptate.
        </motion.p>

        <motion.div className='grid grid-cols-auto gap-6 my-10'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}
        >
            {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div key={index} className='border border-gray-400 rounded-lg px-8 py-12
                 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-trasnlate-y-1 duration-500
                 dark:hover:bg-darkHover dark:hover:shadow-white'
                 whileHover={{scale: 1.05}}
                 >
                    <Image alt='' src={icon} className='w-10' />
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                    <a href="{link}" className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4' /> 
                    </a>
                </motion.div>
            ))}

        </motion.div>
    </motion.div>
  )
}

export default Services