import React from 'react'
import { INFO } from '../utils/config'
import Certification from './Certification';

const CertificationContainer = () => {

  const { certification } = INFO;

  return (
    <div className='mt-16 sm:w-[90%] w-[43%]'>
      <div className='flex items-center justify-between pl-2 pr-2'>
        <h1 className='text-sm font-medium' ><i className='bx bxs-notepad align-middle'></i> Certification</h1>
        <p className='text-xs font-medium underline decoration-dotted'><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a></p>
      </div>
      <div className='flex flex-wrap  '>
        {
          certification.map(cer => <Certification key={cer.id} certification={cer} />)
        }
      </div>
    </div>
  )
}

export default CertificationContainer;