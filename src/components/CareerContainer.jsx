import React from 'react'
import Career from './Career'
import { INFO } from '../utils/config'

const CareerContainer = () => {

  const { career } = INFO;

  return (
    <div className='mt-6 '>
      <div className='flex items-center justify-between pl-2 pr-2'>
        <h1 className='text-sm' ><i className='bx bxs-briefcase align-middle'></i> Career</h1>
        <p className='text-xs '><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a><i className='bx bx-link-external align-middle'></i></p>
      </div>
      <div className='flex flex-wrap '>
        {
          career.map(job => <Career key={job.id} career={job} />)
        }
      </div>
    </div>
  )
}

export default CareerContainer;