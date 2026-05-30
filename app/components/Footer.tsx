import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

type DarkModeProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer: React.FC<DarkModeProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.kp_logo_dark : assets.kp_logo} alt='' className='w-26 mx-auto mb-2' />
            
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                krishnabpatil2003@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>Krishna Patil</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/kp-19">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/krishna-patil-574a50256/">LinkedIn</a></li>
                <li><a target='_blank' href="https://www.instagram.com/krishnabpatil2003/">Instagram</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer