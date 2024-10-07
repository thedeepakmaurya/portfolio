import React, { useContext } from 'react'
import Career from './Career'
import { INFO } from '../utils/config'
import userContext from '../utils/userContext';

const CareerContainer = () => {

  const { career } = INFO;
  const { careerdesc } = useContext(userContext);

  return (
    <div className='py-6 w-full'>
      <div className='flex items-center justify-between pl-2 pr-2'>
        <h1 className='font-medium text-sm' ><i className='bx bxs-briefcase align-middle'></i> Career</h1>
        <p className='font-medium text-xs underline decoration-dotted'><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a></p>
      </div>
      <div className='pt-5 '>
        <p className='text-sm'>{careerdesc.description}</p>
        <br />
        <p className='text-sm'>{careerdesc.description2}</p>
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