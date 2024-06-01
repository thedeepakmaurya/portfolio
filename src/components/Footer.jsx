import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className='mt-5 mb-5 fixed bottom-0'>
        <p className='text-sm'>&copy; {currentYear} <a className='font-bold' href="/">Deepak Maurya</a> - All rights reserved</p>
    </div>
  )
}

export default Footer