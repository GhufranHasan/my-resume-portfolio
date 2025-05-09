import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub, FaMedium, FaTwitter } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className='top-[40vh] fixed font-content'>
        <Link href={'https://www.linkedin.com/in/ghufranhasan/'} target={'_blank'}>
            <div className='ml-[-91px] hover:ml-0 duration-500 flex text-lg justify-between items-center fixed text-white bg-orange-800 w-36 py-3 px-5 rounded-r-lg'>LinkedIn <FaLinkedin size={30} /></div>
        </Link>
        <Link href={'https://github.com/GhufranHasan'} target={'_blank'}>
            <div className='my-16 ml-[-91px] hover:ml-0 duration-500 flex text-lg justify-between items-center fixed text-white bg-orange-800 w-36 py-3 px-5 rounded-r-lg'>Github <FaGithub size={30} /></div>
        </Link>
        <Link href={'https://medium.com/@ghufran.aims'} target={'_blank'}>
            <div className='my-32 ml-[-91px] hover:ml-0 duration-500 flex text-lg justify-between items-center fixed text-white bg-orange-800 w-36 py-3 px-5 rounded-r-lg'>Medium <FaMedium size={30} /></div>
        </Link>
        <Link href={'https://twitter.com/Ghufran_Hasan'} target={'_blank'}>
            <div className='my-48 ml-[-91px] hover:ml-0 duration-500 flex text-lg justify-between items-center fixed text-white bg-orange-800 w-36 py-3 px-5 rounded-r-lg'>Twitter <FaTwitter size={30} /></div>
        </Link>
    </div>
  )
}

export default SocialIcons