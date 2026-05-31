import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { motion } from "motion/react"

type DarkModeProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<DarkModeProps> = ({ isDarkMode, setIsDarkMode }) => {
    const titles = useMemo(
        () => [
            "Software Engineer.",
            "IIT Jodhpur Graduate.",
            "Researcher.",
            // "Aspiring Musician."
        ],
        []
    );
    const [titleIndex, setTitleIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = titles[titleIndex];
        const isComplete = typedText === fullText;
        const isEmpty = typedText.length === 0;

        const delay = isComplete && !isDeleting ? 1500 : isDeleting ? 40 : 70;

        const timer = setTimeout(() => {
            if (isComplete && !isDeleting) {
                setIsDeleting(true);
                return;
            }

            if (isEmpty && isDeleting) {
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % titles.length);
                return;
            }

            const nextText = isDeleting
                ? fullText.slice(0, typedText.length - 1)
                : fullText.slice(0, typedText.length + 1);
            setTypedText(nextText);
        }, delay);

        return () => clearTimeout(timer);
    }, [isDeleting, titleIndex, titles, typedText]);

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
            className='mt-5'
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        >
            <Image src={assets.kp_profile_img} alt='' className='rounded-full w-32'/>
        </motion.div>

        <motion.h3 className='flex items-end gap-2 text-xl md:text-2xl mb-1 font-ovo'
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
        >
        Hi! I am Krishna Patil <Image src={assets.hand_icon} alt='' className='w-6 mb-2'/></motion.h3>

        <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'
            initial={{y: -30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}
        >
            <span aria-live='polite'>
                {typedText}
            </span>
            <span className='inline-block w-[0.08em] h-[0.9em] ml-1 align-[-0.1em] bg-current animate-pulse' />
        </motion.h1>

        <motion.p className='max-w-2xl mx-auto font-ovo lg:text-[18px]'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
        >
            Passionate about solving complex problems, building impactful software, and continuously learning new technologies.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black
             text-white flex items-center gap-2 dark:bg-transparent'
            
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            >
                Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
            <motion.a href="https://drive.google.com/file/d/16R8KZlrnncV8e8c1O_GhfoZ9DTwfh5wo/view?usp=sharing" download 
               className='px-10 py-3 border rounded-full
             border-gray-500 flex items-center gap-2 bg-white dark:text-black'

            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}} 
            >
                My Resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </div>
  )
}

export default Header