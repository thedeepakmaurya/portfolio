import React from 'react'

const Education = ({ education }) => {

    const { institute, qualification, img } = education;

    return (
        <div className='w-1/2 sm:w-auto flex gap-2 mt-8'>
            <div>
                <img className='w-[46px] h-[46px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} />
            </div>
            <div >
                <h1 className='text-md font-medium'>{institute}</h1>
                <p className='text-sm pb-1'>{qualification}</p>
            </div>
        </div>
    )
}

export default Education