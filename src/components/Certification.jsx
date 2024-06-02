import React from 'react'

const Certificaion = ({ certification }) => {

    const { institute, qualification, img } = certification;

    return (
        <div className='w-1/2 flex gap-2 mt-8'>
            <div>
                <a href='https://linkedin.com/in/thedeepakmaurya' ><img className='w-[46px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} /></a>
            </div>
            <div className=''>
                <h1 className='text-md font-medium'>{institute}</h1>
                <p className='text-sm pb-1'>{qualification}</p>
            </div>
        </div>
    )
}

export default Certificaion