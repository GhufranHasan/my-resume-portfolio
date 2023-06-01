import React from 'react'
import Image from "next/image";
import MySkill from './myskill';

export const Skills = () => {
  return (
    <div className='font-content'>
        <div className='items-center max-w-7xl mx-auto leading-8 mb-10' id='skills'>
            <div className='px-10 mt-32 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-4xl text-white mb-10'>Skills</h1>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-20'>
                        {/* skill 1 starts */}
                        <MySkill iconUrl='/images/icons/html-5.png' alterText='html5' text='HTML' />
                        {/* skill 1 ends */}
                        {/* skill 2 starts */}
                        <MySkill iconUrl='/images/icons/css-3.png' alterText='css3' text='CSS' />
                        {/* skill 2 ends */}
                        {/* skill 3 starts */}
                        <MySkill iconUrl='/images/icons/js.png' alterText='javascript' text='Javascript' />
                        {/* skill 3 ends */}
                        {/* skill 4 starts */}
                        <MySkill iconUrl='/images/icons/Typescript.png' alterText='typescript' text='Typescript' />
                        
                        {/* skill 4 ends */}
                        {/* skill 5 starts */}
                        <MySkill iconUrl='/images/icons/angular.png' alterText='angular' text='Angular 13+' />
                        {/* skill 5 ends */}
                        {/* skill 6 starts */}
                        <MySkill iconUrl='/images/icons/nextjs.png' alterText='nextjs' text='Next 12+' />
                        {/* skill 6 ends */}
                        {/* skill 7 starts */}
                        <MySkill iconUrl='/images/icons/react.png' alterText='react' text='React' />
                        {/* skill 7 ends */}
                        {/* skill 8 starts */}
                        <MySkill iconUrl='/images/icons/chakra-ui.png' alterText='chakraui' text='ChakraUI' />
                        {/* skill 8 ends */}
                        {/* skill 9 starts */}
                        <MySkill iconUrl='/images/icons/tailwind-css.png' alterText='tailwindcss' text='Tailwind' />
                        {/* skill 9 ends */}
                        {/* skill 10 starts */}
                        <MySkill iconUrl='/images/icons/postman.png' alterText='postman' text='Postman' />
                        {/* skill 10 ends */}
                        {/* skill 11 starts */}
                        <MySkill iconUrl='/images/icons/postgresql.png' alterText='postgresql' text='PostgreSQL' />
                        {/* skill 11 ends */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}