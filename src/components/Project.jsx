import React from 'react'

const Project = ({ project }) => {

    const { name, description, stack=[], url, img } = project;

    return (
        <div className='w-1/2 flex gap-2 sm:gap-0 mt-8'>
            <div className='w-1/6 sm:w-1/3'>
                <a alt='thumbnail' href={url}><img className='w-[46px] h-[46px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} /></a>
            </div>
            <div className='w-5/6 sm:w-2/3'>
                <h1 className='text-md font-medium'>{name}</h1>
                <p className='text-sm pb-1'>{stack.join(', ')}</p>
                <p className='text-sm pb-1'>{description}</p>
            </div>
        </div>
    )
}

export default Project