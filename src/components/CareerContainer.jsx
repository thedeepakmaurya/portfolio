import React from 'react'
import Career from './Career'
import { INFO } from '../utils/config'

const CareerContainer = () => {

  const { career } = INFO;

  return (
    <div className='py-6 w-full'>
      <div className='flex items-center justify-between pl-2 pr-2'>
        <h1 className='font-medium text-md' ><i className='bx bxs-briefcase align-middle'></i> Career</h1>
        <p className='font-medium text-sm underline decoration-dotted'><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a></p>
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