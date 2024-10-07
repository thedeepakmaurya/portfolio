import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='pt-10 w-full'>
      <p className='text-md'>&copy; {currentYear} <a className='font-bold' href="/">Deepak Maurya</a> - All rights reserved</p>
    </div>
  )
}

export default Footer