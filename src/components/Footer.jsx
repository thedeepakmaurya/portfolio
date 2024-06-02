import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-16 mb-5 '>
      <p className='text-sm pb-10'>You can view the older version of this website <a className='text-blue-500' href='https://thedeepakmaurya.github.io/portfolio/ ' target='blank'>here</a>.</p>
      <p className='text-sm'>&copy; {currentYear} <a className='font-bold' href="/">Deepak Maurya</a> - All rights reserved</p>
    </div>
  )
}

export default Footer