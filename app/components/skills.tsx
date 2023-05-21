import React from 'react'
import Image from "next/image"

export const Skills = () => {
  return (
    <div>
        <div className='items-center max-w-7xl mx-auto leading-8 mb-10' id='skills'>
            <div className='px-10 mt-32 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-4xl text-white mb-10'>Skills</h1>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-20'>
                        {/* skill 1 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/html-5.png" width={100} height={100} alt="html5" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>HTML</p>
                        </div>
                        {/* skill 1 ends */}
                        {/* skill 2 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/css-3.png" width={100} height={100} alt="css3" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>CSS</p>
                        </div>
                        {/* skill 2 ends */}
                        {/* skill 3 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/js.png" width={100} height={100} alt="javascript" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Javascript</p>
                        </div>
                        {/* skill 3 ends */}
                        {/* skill 4 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/Typescript.png" width={100} height={100} alt="typescript" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Typescript</p>
                        </div>
                        {/* skill 4 ends */}
                        {/* skill 5 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/angular.png" width={100} height={100} alt="angular" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Angular 13+</p>
                        </div>
                        {/* skill 5 ends */}
                        {/* skill 6 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/nextjs.png" width={100} height={100} alt="nextjs" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Next 12+</p>
                        </div>
                        {/* skill 6 ends */}
                        {/* skill 7 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/react.png" width={100} height={100} alt="react" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>React</p>
                        </div>
                        {/* skill 7 ends */}
                        {/* skill 8 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/chakra-ui.png" width={100} height={100} alt="chakraui" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>ChakraUI</p>
                        </div>
                        {/* skill 8 ends */}
                        {/* skill 9 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/tailwind-css.png" width={100} height={100} alt="tailwindcss" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Tailwind</p>
                        </div>
                        {/* skill 9 ends */}
                        {/* skill 10 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/postman.png" width={100} height={100} alt="postman" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Postman</p>
                        </div>
                        {/* skill 10 ends */}
                        {/* skill 11 starts */}
                        <div className='p-5'>
                            <Image src="/images/icons/postgresql.png" width={100} height={100} alt="postgresql" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>PostgreSQL</p>
                        </div>
                        {/* skill 11 ends */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}