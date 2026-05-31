import { skillsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

type DarkModeProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Skills: React.FC<DarkModeProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div id="skills" className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
        >
            My expertise</motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >
            Skills and Technologies</motion.h2>

        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
        >
            A collection of technologies, tools, and frameworks I've worked with
            throughout my academic, professional, and personal projects.
        </motion.p>

        <motion.div className='grid grid-cols-auto gap-6 my-10'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}
        >
            {skillsData.map(({icons, icons_description, title}, index)=>(
                <motion.div key={index} className='border border-gray-400 rounded-lg px-3 py-5
                 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-trasnlate-y-1 duration-500
                 dark:hover:bg-darkHover dark:hover:shadow-white'
                 whileHover={{scale: 1.02}}
                 >
                    <h3 className='text-lg mb-5 text-gray-700 dark:text-white text-left'>{title}</h3>
                    <div className='grid grid-cols-3 grid-rows-3 gap-5 justify-items-start'>
                        {icons.map((icon, iconIndex) => (
                            <div key={iconIndex} className='flex flex-col items-start'>
                                <motion.div className='flex flex-col items-center justify-center w-16 h-16 
                                border-2 border-gray-300 rounded-md dark:border-white/20 px-2 py-1
                                text-center gap-1 hover:shadow-black hover:bg-amber-100
                                hover:-trasnlate-y-1 duration-500 dark:hover:bg-purple-800 dark:hover:shadow-white '>
                                    <Image alt='' src={icon} className='w-7 h-7 object-contain' />
                                    <span className='text-xs leading-4 text-gray-600 dark:text-white/70'>
                                        {icons_description?.[iconIndex]}
                                    </span>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}

        </motion.div>
    </motion.div>
  )
}

export default Skills