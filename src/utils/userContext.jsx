import { createContext } from "react";

const userContext = createContext({
    profile: {
        name: 'Deepak Maurya',
        summary: 'React JS enthusiast with a sharp attention to detail and a passion for developing smooth web applications. Eager to immerse myself in front-end development, I am actively seeking an internship opportunity to further explore and hone my skills in this exciting field.',
    },
    stackdesc: {
        description: 'My proficiency lies in harnessing the power of JavaScript, specifically ES6 and beyond, to build robust applications. Leveraging the React.js library, I specialize in creating reusable and modular components that enhance code maintainability and scalability. ',
        description2: 'In my toolkit, version control is managed seamlessly with Git, ensuring collaborative development and efficient code management. My preferred development environment is VSCode, where I harness the power of extensions and integrated tools to boost productivity.'
    }
})

export default userContext;