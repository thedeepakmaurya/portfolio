import React from 'react'

const Education = ({ education }) => {

    const { institute, qualification, img } = education;

    return (
        <div className='w-1/2 sm:w-full flex gap-2 sm:gap-0 mt-8'>
            <div className='w-1/6 '>
                <img className='w-[46px] h-[46px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} />
            </div>
            <div className='w-5/6'>
                <h1 className='text-lg font-medium text-inherit'>{institute}</h1>
                <p className='text-md pb-1'>{qualification}</p>
            </div>
        </div>
    )
}

export default Education