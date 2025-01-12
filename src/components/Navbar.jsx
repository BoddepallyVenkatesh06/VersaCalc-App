import React, { useContext, useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { AppContext } from '../context/AppContext';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';



const Navbar = () => {

    const { darkMode, setDarkMode } = useContext(AppContext);
    const [toggleMenu, setToggleMenu] = useState(false);

    const menuRef = useRef(null);

    // when menu bar is open in small devices and user click outside then menu will close
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target))
                setToggleMenu(false);
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])


    return (
        <nav className={`w-full absolute top-0 z-[100] flex justify-between items-center shadow-xl  
          py-4 px-4 sm:px-24  `} style={{ zIndex: '999' }}>
            <div>
                <Link to='/home'  >
                    <h2 className='text-lg sm:text-4xl font-bold gradient-text-logo py-3 px-4 rounded-xl
                     text-slate-100 duration-300 '>
                        VersaCalc
                    </h2>
                </Link>
            </div>

            <div className='hidden sm:flex'>
                <ul className='flex justify-between items-center gap-10 dark:text-slate-100 '>

                    <NavLink to='/math-calculator' >
                        <li className='text-xl font-bold p-2 px-3   rounded-xl duration-300 cursor-pointer'>
                            Math Calculator
                        </li>
                    </NavLink>

                    <NavLink to='/stopwatch'  >
                        <li className='text-xl font-bold p-2 px-3 rounded-xl duration-300 cursor-pointer'>
                            StopWatch
                        </li>
                    </NavLink>

                    <NavLink to='/age-calculator'  >
                        <li className='text-xl font-bold p-2 px-3  rounded-xl duration-300 cursor-pointer'>
                            Age Calculator
                        </li>
                    </NavLink>

                    {/* <NavLink to='/calendar' >
                        <li className='text-xl font-bold p-2 px-3 rounded-xl duration-300 cursor-pointer'>
                            Calendar
                        </li>
                    </NavLink> */}
                </ul>
            </div>



            {/* for mobile devices */}
            <div
                onClick={() => setDarkMode(!darkMode)}
                className='flex gap-3 text-xl font-bold py-3 px-3 rounded-xl duration-300 
                outline-none select-none cursor-pointer 
                text-black dark:text-slate-100 sm:hover:bg-slate-200 sm:dark:hover:text-black '
            >
                <p className="font-bold tracking-widest">{darkMode ? 'Light' : 'Dark'}</p>
                <p className="text-2xl duration-300 animate-bounce ">
                    {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </p>
            </div>



            <div className='sm:hidden '>
                <div onClick={() => setToggleMenu(prev => !prev)}
                    className='xs:ml-4 cursor-pointer'>
                    {
                        toggleMenu
                            ? <RiCloseLine color="#fff" size={37} />
                            : <RiMenu3Line color="#fff" size={37} />
                    }
                </div>

                {
                    toggleMenu && (
                        <div ref={menuRef}
                            className="flex flex-col bg-transparent  p-1 rounded-xl shadow absolute 
                            right-[2rem] top-16 mt-6 min-w-[170px] mobile-menu-bg scale-forward ">


                            <ul className='flex flex-col justify-between items-start gap-3 dark:text-slate-100 '>

                                <Link to='/math-calculator' onClick={() => setToggleMenu(false)}>
                                    <li className='text-xl font-bold p-2 px-3 hover:bg-slate-200 dark:hover:text-black rounded-xl duration-300 cursor-pointer'>
                                        Math Calculator
                                    </li>
                                </Link>

                                <Link to='/stopwatch'  onClick={() => setToggleMenu(false)}>
                                    <li className='text-xl font-bold p-2 px-3 hover:bg-slate-200 dark:hover:text-black rounded-xl duration-300 cursor-pointer'>
                                        StopWatch
                                    </li>
                                </Link>

                                <Link to='/age-calculator' onClick={() => setToggleMenu(false)}>
                                    <li className='text-xl font-bold p-2 px-3 hover:bg-slate-200 dark:hover:text-black rounded-xl duration-300 cursor-pointer'>
                                        Age Calculator
                                    </li>
                                </Link>

                                {/* <Link to='/calendar' onClick={() => setToggleMenu(false)}>
                                    <li className='text-xl font-bold p-2 px-3 hover:bg-slate-200 dark:hover:text-black rounded-xl duration-300 cursor-pointer'>
                                        Calendar
                                    </li>
                                </Link> */}
                            </ul>
                        </div>
                    )
                }
            </div>


        </nav>
    )
}

export default Navbar
