import React, { useContext } from 'react'
import { INFO } from '../utils/config'
import Stack from './Stack';
import userContext from '../utils/userContext';

const StackContainer = () => {

    const { stack } = INFO;
    const { stackdesc } = useContext(userContext)

    return (
        <div className='py-4 w-full'>
            <div className='flex items-center justify-between pl-2 pr-2'>
                <h1 className='text-md font-medium' ><i className='bx bx-laptop align-middle'></i> Tech Stack</h1>
                <p className='text-sm font-medium underline decoration-dotted'><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a></p>
            </div>
            <div className='pt-5 '>
            <p className='text-md'>{stackdesc.description}</p>
            <br/>
            <p className='text-md'>{stackdesc.description2}</p>
            </div>
            <div className='flex flex-wrap '>
                {
                    stack.map(stk => <Stack key={stk.id} stack={stk} />)
                }
            </div>
        </div>
    )
}

export default StackContainer;