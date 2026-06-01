import { assets, interestsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

type DarkModeProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Interests: React.FC<DarkModeProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div id='interests' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
        >
            My Hobbies</motion.h4>
        <motion.h2 className='text-center text-5xl font-ovo'
            initial={{opacity: 0 , y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
        >
            Other Interests</motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
        >
            A glimpse into the hobbies and interests that shape my perspective,
            fuel my creativity, and keep me motivated outside of work.
        </motion.p>

        <motion.div className='grid grid-cols-2 md:grid-cols-4 my-10 gap-8 justify-items-center max-w-4xl mx-auto'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}
        >
            {interestsData.map((interest, index)=>(
                <motion.div key={index} className='flex flex-col items-center justify-center gap-4 cursor-default'
                 whileHover={{scale: 1.05}}
                 transition={{duration: 0.3}}
                 >
                    <div className='w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-gray-400 dark:border-white/20 flex items-center justify-center bg-white dark:bg-darkTheme/50 backdrop-blur-sm shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] hover:bg-lime-300 dark:hover:bg-darkHover transition-colors duration-300 overflow-hidden p-4 sm:p-5'>
                        <Image src={interest.icon} alt={interest.description} className='w-full h-full object-contain dark:invert' />
                    </div>
                    <h3 className='text-gray-700 dark:text-white font-ovo font-medium'>{interest.description}</h3>
                </motion.div>
            ))}
        </motion.div>
        
        {/* YouTube Channel Banner */}
        <motion.div className='max-w-2xl mx-auto mt-15'
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 1.1}}
        >
            <div className='flex flex-col sm:flex-row items-center gap-6 border border-gray-400 dark:border-white/20 rounded-xl p-6 sm:p-8
            bg-white dark:bg-darkTheme/50 backdrop-blur-sm hover:shadow-black dark:hover:shadow-white hover:-translate-y-2 duration-500'>
                
                {/* Channel DP */}
                <div className='w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-full border-[0.5px] border-gray-400 dark:border-white/20 overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-3xl'>
                     <a href="https://www.youtube.com/@kpmusic8604">
                        <Image alt='channel dp' src={assets.yt_dp}/>
                     </a>
                </div>

                {/* Channel Info */}
                <div className='flex-1 text-center sm:text-left flex flex-col items-center sm:items-start'>
                    <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'><a href="https://www.youtube.com/@kpmusic8604">KP Music (Youtube)</a></h3>
                    <p className='text-sm text-gray-600 dark:text-white/80 font-ovo leading-relaxed mb-4'>
                        Check out my channel where I document my musical journey through different song 
                        covers and other stuff that I find interesting!
                    </p>
                    <a href="https://www.youtube.com/@kpmusic8604" target="_blank" rel="noopener noreferrer" 
                       className='inline-flex items-center gap-2 text-sm font-medium border border-gray-400 dark:border-white/30 rounded-full py-2 px-6
                       hover:bg-lime-300 dark:hover:bg-darkHover transition-colors duration-300 text-gray-700 dark:text-white'>
                        Subscribe
                        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-3' />
                    </a>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Interests