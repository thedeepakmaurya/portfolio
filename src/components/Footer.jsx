import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-16 sm:w-[90%] md:w-[70%] w-[43%]'>
      <p className='text-sm'>&copy; {currentYear} <a className='font-bold' href="/">Deepak Maurya</a> - All rights reserved</p>
    </div>
  )
}

export default Footer