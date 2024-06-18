// import React from 'react'
import logo from '/logo.png'
import { useSidebar } from '../context/Sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faMessage, faGear, faCalendar, faPortrait, faSignOut } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {
    const { open } = useSidebar()

    return (
        <div className={`${open ? 'hidden' : 'grid'} grid-cols-1 justify-center bg-secondary text-light text-sm md:text-md h-screen w-2/3 md:w-20`}>
            <div className="grid justify-center">
                <img src={logo} alt="logo" className='w-64 md:w-auto' />
            </div>

            <ul className="grid *:flex *:md:block *:items-center *:ps-10 *:md:ps-0 text-center w-full *:gap-3 gap-2 *:w-full *:h-fit *:cursor-pointer">
                <li className="hover:border-s-4">
                    <FontAwesomeIcon icon={faHome} />
                    <span className='flex md:hidden'>Dashboard</span>
                </li>
                <li className="hover:border-s-4">
                    <FontAwesomeIcon icon={faMessage} />
                    <span className='flex md:hidden'>Messages</span>
                </li>
                <li className="hover:border-s-4">
                    <FontAwesomeIcon icon={faGear} />
                    <span className='flex md:hidden'>Settings</span>
                </li>
                <li className="hover:border-s-4">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className='flex md:hidden'>Calender</span>
                </li>
                <li className="hover:border-s-4">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className='flex md:hidden'>Calender</span>
                </li>
                <li className="hover:border-s-4">
                    <FontAwesomeIcon icon={faPortrait} />
                    <span className='flex md:hidden'>Profile</span>
                </li>
            </ul>

            <div className="flex justify-center text-center gap-2 items-end pb-5 *:cursor-pointer">
                <p className="flex md:block gap-3 items-center ps-10 md:ps-0 hover:border-s-4 h-fit w-full">
                    <FontAwesomeIcon icon={faSignOut} />
                    <span className='flex md:hidden'>Logout</span>
                </p>
            </div>
        </div>
    )
}

export default Sidebar
