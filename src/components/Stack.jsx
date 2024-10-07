import React from 'react'

const Stack = ({ stack }) => {

    const {  description, name, img } = stack;

    return (
        <div className='w-1/2 flex mt-8 gap-2 sm:gap-0'>
            <div className='w-1/6 sm:w-1/3'>
                <img className='w-[46px] h-[46px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} />
            </div>
            <div className='w-5/6 sm:w-2/3'>
                <h1 className='text-lg font-medium'>{name}</h1>
                <p className='text-md pb-1'>{description}</p>
            </div>
        </div>
    )
}

export default Stack