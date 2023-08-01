import React from 'react'

const Contact = () => {
  return (
    <div name="contact"  className="flex justify-center w-full py-10 px-8 mb-10 h-screen">
      <div className="flex flex-col justify-center w-full">
        <div>
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-gray-600 pb-8">Get in touch with me.</p>
        </div>
        <div className="w-full mx-auto flex justify-center">
          <form className='flex flex-col'>
            <input type="text" name='name' placeholder='Enter your name' className='py-1 px-2 bg-transparent border-2 border-cyan-500 rounded-md focus:outline-none my-2' />
            <input type="email" name='email' placeholder='Enter your email' className='py-1 px-2 bg-transparent border-2 border-cyan-500 rounded-md focus:outline-none my-2' />
            <textarea name="message" cols="30" rows="6" placeholder='Type your innovative idea...' className='md:cols-40 py-1 px-2 bg-transparent border-2 border-cyan-500 rounded-md focus:outline-none my-2'></textarea>
            <button type='submit' className='text-white px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300 my-2'>Send Idea</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact