import React from 'react'

const Stack = ({ stack }) => {

    const {  description, name, img } = stack;

    console.log(stack)

    return (
        <div className='w-1/2 flex gap-2 mt-8'>
            <div>
                <img className='w-[46px] h-[46px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} />
            </div>
            <div className=''>
                <h1 className='text-md font-medium'>{name}</h1>
                <p className='text-sm pb-1'>{description}</p>
            </div>
        </div>
    )
}

export default Stack