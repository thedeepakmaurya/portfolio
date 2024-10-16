import { createContext } from "react";


const userContext = createContext()

export const UserProvider = ({ children }) => {

    const info = {
        profile: {
            name: 'Deepak Maurya',
            summary: 'Passionate React.js developer crafting dynamic user experiences with seamless performance. I thrive on turning complex problems into elegant, intuitive solutions.',
        },
        stackdesc: {
            description: 'My proficiency lies in harnessing the power of JavaScript, specifically ES6 and beyond, to build robust applications. Leveraging the React.js library, I specialize in creating reusable and modular components that enhance code maintainability and scalability. ',
            description2: 'In my toolkit, version control is managed seamlessly with Git, ensuring collaborative development and efficient code management. My preferred development environment is VSCode, where I harness the power of extensions and integrated tools to boost productivity.'
        }
    }

    return (
        <userContext.Provider value={info}>
            {children}
        </userContext.Provider>
    )

}

export default userContext;