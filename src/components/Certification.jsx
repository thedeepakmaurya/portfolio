import React from 'react'

const Certificaion = ({ certification }) => {

    const { url, institute, qualification, img } = certification;

    return (
        <div className='w-1/2 flex gap-2 sm:gap-0 mt-8'>
            <div className='w-1/6 sm:w-1/3'>
                <a href={url} ><img className='w-[46px] h-[46px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} /></a>
            </div>
            <div className='w-5/6 sm:w-2/3'>
                <h1 className='text-lg font-medium'>{institute}</h1>
                <p className='text-md pb-1'>{qualification}</p>
            </div>
        </div>
    )
}

export default Certificaion