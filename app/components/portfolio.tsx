import React from 'react'
import Image from "next/image";

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
            <div className='shadow-md shadow-orange-900 h-60 hover:scale-105 duration-75 bg-black'>
              <div>
                <Image src="/images/portfolio/1.jpg" alt="" className='w-full h-40 rounded-t-md' width={800} height={800} />
              </div>
              <div className='flex justify-between px-5 text-white'>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Demo</a>
                </button>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Code</a>
                </button>
              </div>
            </div>
            {/* card 1 ends  */}
            {/* card 2 starts  */}
            <div className='shadow-md shadow-orange-900 h-60 hover:scale-105 duration-75 bg-black'>
              <div>
                <Image src="/images/portfolio/1.jpg" alt="" className='w-full h-40 rounded-t-md' width={800} height={800} />
              </div>
              <div className='flex justify-between px-5 text-white'>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Demo</a>
                </button>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Code</a>
                </button>
              </div>
            </div>
            {/* card 2 ends  */}
            {/* card 3 starts  */}
            <div className='shadow-md shadow-orange-900 h-60 hover:scale-105 duration-75 bg-black'>
              <div>
                <Image src="/images/portfolio/1.jpg" alt="" className='w-full h-40 rounded-t-md' width={800} height={800} />
              </div>
              <div className='flex justify-between px-5 text-white'>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Demo</a>
                </button>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Code</a>
                </button>
              </div>
            </div>
            {/* card 3 ends  */}
            {/* card 4 starts  */}
            <div className='shadow-md shadow-orange-900 h-60 hover:scale-105 duration-75 bg-black'>
              <div>
                <Image src="/images/portfolio/1.jpg" alt="" className='w-full h-40 rounded-t-md' width={800} height={800} />
              </div>
              <div className='flex justify-between px-5 text-white'>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Demo</a>
                </button>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Code</a>
                </button>
              </div>
            </div>
            {/* card 4 ends  */}
            {/* card 5 starts  */}
            <div className='shadow-md shadow-orange-900 h-60 hover:scale-105 duration-75 bg-black'>
              <div>
                <Image src="/images/portfolio/1.jpg" alt="" className='w-full h-40 rounded-t-md' width={800} height={800} />
              </div>
              <div className='flex justify-between px-5 text-white'>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Demo</a>
                </button>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Code</a>
                </button>
              </div>
            </div>
            {/* card 5 ends  */}
            {/* card 6 starts  */}
            <div className='shadow-md shadow-orange-900 h-60 hover:scale-105 duration-75 bg-black'>
              <div>
                <Image src="/images/portfolio/1.jpg" alt="" className='w-full h-40 rounded-t-md' width={800} height={800} />
              </div>
              <div className='flex justify-between px-5 text-white'>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Demo</a>
                </button>
                <button className='p-4 hover:scale-105 duration-200'>
                  <a href="https://google.com" target='_blank'>Code</a>
                </button>
              </div>
            </div>
            {/* card 6 ends  */}
          </div>
      </div>
    </div>
  ) 
}