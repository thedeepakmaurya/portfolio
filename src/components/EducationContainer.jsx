import React from 'react'
import Education from './Education'
import { INFO } from '../utils/config'

const EducationContainer = () => {

  const { education } = INFO;

  return (
    <div className='py-6 w-full'>
      <div className='flex items-center justify-between pl-2 pr-2'>
        <h1 className='text-md font-medium' ><i className='bx bxs-school align-middle'></i> Education</h1>
        <p className='text-sm font-medium underline decoration-dotted'><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a></p>
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