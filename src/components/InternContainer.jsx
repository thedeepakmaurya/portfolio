import { INFO } from '../utils/config'
import Intern from '../components/Intern'

const InternContainer = () => {

    const { interns } = INFO;

    return (
        <div className='mt-16 sm:w-[90%] md:w-[70%] w-[43%]'>
            <div className='flex items-center justify-between pl-2 pr-2'>
                <h1 className='text-sm font-medium' ><i className='bx bxs-graduation align-middle'></i> Internship</h1>
                <p className='font-medium text-xs underline decoration-dotted'><a href='https://linkedin.com/in/thedeepakmaurya'>View all </a></p>
                </div>
            <div className='flex flex-wrap '>
                {
                    interns.map(intern => <Intern key={intern.id} intern={intern} />)
                }
            </div>
        </div>
    )
}

export default InternContainer;