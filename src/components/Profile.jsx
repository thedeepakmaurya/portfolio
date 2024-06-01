import React, { useContext } from 'react'
import logo from '../assets/img/profile.png'
import userContext from '../utils/userContext'

const Profile = () => {

    const { profile } = useContext(userContext);

    return (
        <>
        <h1 className='sm:flex sm:items-center sm:justify-center sm:p-5 sm:font-bold sm:text-rose-400 xl:hidden'>Site is under development</h1>
        <div className='flex gap-5'>
            <div>
                <img className='w-60 sm:w-[500px] rounded-full border border-white shadow-black shadow-md' alt='profile-img' src={logo} />
            </div>
            <div>
                <a href='/'><h1 className='font-bold text-md'>{profile.name}</h1></a>
                <p className='text-sm mb-2'>{profile.summary}</p>
                <div className='flex gap-1'>
                    <a href='https://linkedin.com/in/thedeepakmaurya'><i className='bx bx-border bxl-linkedin hover:-translate-y-[1px] transition-all'></i></a>
                    <a href='https://github.com/thedeepakmaurya'><i className='bx bx-border bxl-github hover:-translate-y-[1px] transition-all' ></i></a>
                    <a href='https://discord.com/users/deepakstack'><i className='bx bx-border bxl-discord-alt hover:-translate-y-[1px] transition-all' ></i></a>
                    <a href='mailto:deipakmaurya@gmail.com'><i className='bx bx-border bxl-gmail hover:-translate-y-[1px] transition-all' ></i></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;