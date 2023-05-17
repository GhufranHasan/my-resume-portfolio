import React from 'react'

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
                            <img src="/images/icons/html-5.png" alt="html5" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>HTML</p>
                        </div>
                        {/* skill 1 ends */}
                        {/* skill 2 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/css-3.png" alt="css3" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>CSS</p>
                        </div>
                        {/* skill 2 ends */}
                        {/* skill 3 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/js.png" alt="javascript" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Javascript</p>
                        </div>
                        {/* skill 3 ends */}
                        {/* skill 4 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/Typescript.png" alt="typescript" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Typescript</p>
                        </div>
                        {/* skill 4 ends */}
                        {/* skill 5 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/angular.png" alt="angular" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Angular 13+</p>
                        </div>
                        {/* skill 5 ends */}
                        {/* skill 6 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/nextjs.png" alt="nextjs" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Next 12+</p>
                        </div>
                        {/* skill 6 ends */}
                        {/* skill 7 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/react.png" alt="react" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>React</p>
                        </div>
                        {/* skill 7 ends */}
                        {/* skill 8 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/chakra-ui.png" alt="chakraui" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>ChakraUI</p>
                        </div>
                        {/* skill 8 ends */}
                        {/* skill 9 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/tailwind-css.png" alt="tailwindcss" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Tailwind</p>
                        </div>
                        {/* skill 9 ends */}
                        {/* skill 10 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/postman.png" alt="postman" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
                            <p className='text-white text-center mt-4'>Postman</p>
                        </div>
                        {/* skill 10 ends */}
                        {/* skill 11 starts */}
                        <div className='p-5'>
                            <img src="/images/icons/postgresql.png" alt="postgresql" className='w-20 h-20 mx-auto object-contain hover:-transalate-y-2 hover:scale-110 duration-700' />
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