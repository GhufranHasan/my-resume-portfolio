import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className='items-center max-w-7xl mx-auto leading-8 mb-10' id='contact'>
        <div className='px-10 mt-32 mx-auto'>
          <div className='text-center text-white'>
            <h1 className='text-4xl mb-10'>Contact</h1>
            <p className='text-xl my-5'>Get in touch with me</p>
            <form action="https://formbold.com/s/oejXp" method='POST'>
              <div>
                <input className='p-2 w-80 bg-transparent border-4 rounded-md focus:outline-none' type="text" placeholder='Full Name' name='name' required />
              </div>
              <div className='my-5'>
                <input className='p-2 w-80 bg-transparent border-4 rounded-md focus:outline-none' type="email" placeholder='Email' name='email' required />
              </div>
              <div>
                <textarea className='p-2 w-80 bg-transparent border-4 rounded-md focus:outline-none' placeholder='Your message' rows={6} name='message' required />
              </div>
              <button className='bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-black hover:to-amber-950 py-2 px-4 rounded-lg' type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
