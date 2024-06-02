import { INFO } from '../utils/config'
import Project from './Project';

const ProjectContainer = () => {

    const { projects } = INFO;

    return (
        <div className='mt-14 '>
            <div className='flex items-center justify-between pl-2 pr-2'>
                <h1 className='text-sm' ><i className='bx bx-code-alt align-middle'></i> Project</h1>
                <p className='text-xs '><a href='https://github.com/thedeepakmaurya'>View all </a><i className='bx bx-link-external align-middle'></i></p>
            </div>
            <div className='flex flex-wrap '>
                {
                    projects.map(project => <Project key={project.id} project={project} />)
                }
            </div>
        </div>
    )
}

export default ProjectContainer;