import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

type DarkModeProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Projects: React.FC<DarkModeProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
        >
            My Portfolio</motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >
            My Projects</motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
        >
            A collection of academic, personal, and professional projects built 
            through curiosity, experimentation, and continuous learning.
        </motion.p>

        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-8'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}
        >
            {workData.map((project, index)=>(
                <motion.div key={index} className='flex flex-col border border-gray-400 rounded-xl overflow-hidden cursor-pointer
                 hover:shadow-black dark:border-white/20 dark:hover:shadow-white hover:-translate-y-2 duration-500
                 bg-white dark:bg-darkTheme/50 backdrop-blur-sm'
                 whileHover={{scale: 1.02}}
                 transition={{duration: 0.3}}
                 >
                    {/* Project Image */}
                    <div className='h-48 sm:h-56 bg-no-repeat bg-cover bg-center border-b border-gray-400 dark:border-white/20' 
                         style={{backgroundImage: `url(${project.bgImage})`}} />
                    
                    {/* Project Content */}
                    <div className='flex flex-col flex-1 p-6 relative gap-4'>
                        <div className='flex items-start justify-between gap-4'>
                            <h2 className='text-xl font-bold text-gray-800 dark:text-white'>{project.title}</h2>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" 
                               className='border border-black dark:border-white rounded-full w-8 h-8 shrink-0 flex items-center justify-center 
                               shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] hover:bg-lime-300 dark:hover:bg-darkHover duration-300 transition-colors'>
                                <Image src={assets.github_icon} alt='GitHub' className='w-6 object-contain dark:invert' />
                            </a>
                        </div>
                        
                        <p className='text-sm text-gray-600 dark:text-white/80 leading-relaxed font-ovo flex-1'>
                            {project.description}
                        </p>
                        
                        {/* Tags */}
                        {project.tags && project.tags.length > 0 && (
                            <div className='flex flex-wrap gap-2 mt-2'>
                                {project.tags.map((tag: string, tagIndex: number) => (
                                    <span key={tagIndex} className='px-3 py-1 text-xs font-medium border border-gray-400 rounded-full 
                                    dark:border-white/30 text-gray-700 dark:text-white/90'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </motion.div>
        
        <motion.a href="" className='w-max flex items-center justify-center gap-2
         text-gray-700 border-[0.5px] border-gray-700 rounded-full
          py-3 px-10 mx-auto my-20 hover:border-lightHover duration-500
          dark:text-white dark:border-white dark:hover:bg-darkHover'

            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 1.1}}
          >
            Show more
            <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
        </motion.a>
    </motion.div>
  )
}

export default Projects