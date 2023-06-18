import React from 'react'
import PortfolioCard from './portfoliocard';

export default function Portfolio() {
  return (
    <div className='font-content'>
      <div className='items-center max-w-7xl mx-auto leading-8 mb-10' id='portfolio'>
          <div className='px-10 mt-32 mx-auto'>
            <div className='text-center'>
              <h1 className='text-4xl text-white mb-10'>Portfolio</h1>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full '>
            {/* card 1 starts  */}
            <PortfolioCard imageUrl='/images/portfolio/todoappchakraui.png' demoUrl='https://todoapp-ten-dun.vercel.app/' codeUrl='https://github.com/GhufranHasan/todoapp' />
            {/* card 1 ends  */}
            {/* card 2 starts  */}
            <PortfolioCard imageUrl='/images/portfolio/pricinguiwithchakraui.png' demoUrl='https://github.com/GhufranHasan/pricinguichakra' codeUrl='https://pricinguichakra-ghufranhasan-piaic202492.vercel.app/' />
            {/* card 2 ends  */}
            {/* card 3 starts  */}
            <PortfolioCard imageUrl='/images/portfolio/panaversechakraui.png' demoUrl='https://github.com/GhufranHasan/panaverse-web' codeUrl='' />
            {/* card 3 ends  */}
            {/* card 4 starts  */}
            <PortfolioCard imageUrl='/images/portfolio/1.jpg' demoUrl='' codeUrl='' />
            {/* card 4 ends  */}
            {/* card 5 starts  */}
            <PortfolioCard imageUrl='/images/portfolio/1.jpg' demoUrl='' codeUrl='' />
            {/* card 5 ends  */}
            {/* card 6 starts  */}
            <PortfolioCard imageUrl='/images/portfolio/1.jpg' demoUrl='' codeUrl='' />
            {/* card 6 ends  */}
          </div>
      </div>
    </div>
  ) 
}