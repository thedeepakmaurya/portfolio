import React from 'react'
import Education from './Education'
import { INFO } from '../utils/config'

const EducationContainer = () => {

  const { education } = INFO;

  return (
    <div className='mt-16 sm:w-[90%] w-[43%]'>
      <div className='flex items-center justify-between pl-2 pr-2'>
        <h1 className='text-sm font-medium' ><i className='bx bxs-school align-middle'></i> Education</h1>
        <p className='text-xs font-medium underline decoration-dotted'><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a></p>
      </div>
      <div className='flex flex-wrap sm:flex-col '>
        {
          education.map(edu => <Education key={edu.id} education={edu} />)
        }
      </div>
    </div>
  )
}

export default EducationContainer;