import { createContext } from "react";

export const info = {
    profile: {
        name: 'Deepak Maurya',
        summary: 'React JS enthusiast with a sharp attention to detail and a passion for developing smooth web applications. Eager to immerse myself in web development, As an Intern at Unified Mentor, I am currently working on two key projects: the Student-Teacher Booking Appointment system and the Catering Reservation and Ordering System.',
    },
    careerdesc: {
        description: 'As a Project Delivery Executive played a pivotal role in overseeing and ensuring the successful delivery of projects. ',
        description2: 'My duties often span various aspects of project management, including demonstration, planning, execution, monitoring, and closure, with a particular focus on meeting project objectives within the constraints of scope and time.',
    },
    stackdesc: {
        description: 'My proficiency lies in harnessing the power of JavaScript, specifically ES6 and beyond, to build robust applications. Leveraging the React.js library, I specialize in creating reusable and modular components that enhance code maintainability and scalability. ',
        description2: 'In my toolkit, version control is managed seamlessly with Git, ensuring collaborative development and efficient code management. My preferred development environment is VSCode, where I harness the power of extensions and integrated tools to boost productivity.'
    }
}

const userContext = createContext()

export default userContext;