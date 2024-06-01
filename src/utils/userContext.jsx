import { createContext } from "react";

const userContext = createContext({
    profile: {
        name: 'Deepak Maurya',
        summary: 'React JS enthusiast with a sharp attention to detail and a passion for developing smooth web applications. Eager to immerse myself in front-end development, I am actively seeking an internship opportunity to further explore and hone my skills in this exciting field.',
    }
})

export default userContext;