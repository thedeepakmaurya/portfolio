import React from 'react'
import Education from './Education'
import { INFO } from '../utils/config'

const EducationContainer = () => {

  const { education } = INFO;

  return (
    <div className='mt-14 '>
      <div className='flex items-center justify-between pl-2 pr-2'>
        <h1 className='text-sm' ><i className='bx bxs-school align-middle'></i> Education</h1>
        <p className='text-xs '><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a><i className='bx bx-link-external align-middle'></i></p>
      </div>
      <div className='flex flex-wrap '>
        {
          education.map(edu => <Education key={edu.id} education={edu} />)
        }
      </div>
    </div>
  )
}

export default EducationContainer;