import Link from 'next/link'
import { useState } from 'react'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    const handleLinkClick = () => {
        setShowSidebar(false)
    }

    return (
        <>
            {showSidebar ? (
                <button
                    className='flex text-4xl text-white items-center cursor-pointer fixed right-5 top-2 z-50'
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className='fixed z-30 flex items-center cursor-pointer right-10 top-6'
                    fill='#6D28D9'
                    viewBox='0 0 100 80'
                    width='40'
                    height='40'
                >
                    <rect width='100' height='10'></rect>
                    <rect y='30' width='100' height='10'></rect>
                    <rect y='60' width='100' height='10'></rect>
                </svg>
            )}

            <div
                className={`top-0 right-0 w-2/5 bg-violet-400 pl-3 pt-24 text-white fixed h-full z-40 ease-in-out duration-300 ${
                    showSidebar ? 'translate-x-0 ' : 'translate-x-full'
                }`}
            >
                <ul className='items-center space-y-6 justify-between font-bold text-base pt-4'>
                    <li>
                        <Link
                            className='hover:text-primary-violet'
                            href='/welcome'
                            onClick={handleLinkClick}
                        >
                            A propos de moi
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='hover:text-primary-violet'
                            href='/resume'
                            onClick={handleLinkClick}
                        >
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='hover:text-primary-violet'
                            href='/projects'
                            onClick={handleLinkClick}
                        >
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link
                            className='hover:text-primary-violet'
                            href='/contact'
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
