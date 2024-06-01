import React from 'react'

const Career = ({ career }) => {

    const { company, designation, img, jd } = career;

    return (
        <div className='w-1/2 flex gap-2 mt-5'>
            <div>
                <a href='https://linkedin.com/in/thedeepakmaurya' ><img className='w-[100px] border-white shadow-md shadow-black rounded-lg hover:grayscale' alt='thumbnail-img' src={img} /></a>
            </div>
            <div className=''>
                <h1 className='text-md font-medium'>{company} <span className='text-xs pb-1'>{designation}</span></h1>
                <p className='text-sm'>{jd}</p>
            </div>
        </div>
    )
}

export default Career