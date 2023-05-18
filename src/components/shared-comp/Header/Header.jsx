import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { AuthContext } from '../../../routes/AuthProvider';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useContext(AuthContext);



    // Logo Area for navbar
    const logoArea = <>
        <Link to='/' className='font-bold text-2xl text-s uppercase'>Toy<span className='text-p'>Topia</span></Link>
    </>
    // Nav Menu Items 
    const navItems = <>
        <NavLink to='/' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Home</NavLink>
        <NavLink to='/blog' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Blog</NavLink>
        {
            user ? <img className='w-8 h-8 object-cover rounded-full cursor-pointer' title={user.displayName} src={user.photoURL || 'https://media.licdn.com/dms/image/C5603AQEyNKnirxXA5w/profile-displayphoto-shrink_800_800/0/1632428106559?e=2147483647&v=beta&t=C2zGNkOkQTs6_ZkL3Sq22-KELUUGw9N9FlLSObMPfos'} alt="" />
                : <>
                    <NavLink to='/login' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Login</NavLink>
                    <NavLink to='/register' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Register</NavLink>
                </>
        }
        {
            user && <span>Logout</span>
        }
    </>
    return (
        <header className='flex items-center justify-between py-5 px-3 xl:px-0 xl:container mx-auto relative'>
            <div>
                {logoArea}
            </div>
            <div className='overflow-hidden'>
                <div className={`md:static min-w-[180px] hidden md:flex items-center flex-row gap-4 font-medium text-[#2a2a2e] duration-300`}>
                    {navItems}
                </div>

                {/* Mobile Menu */}
                <div className='lg:hidden'>
                    <button
                        title='Open Menu'
                        onClick={() => setMenuOpen(true)}
                    >
                        <TfiAlignRight className='w-5 text-gray-600' />
                    </button>
                    {menuOpen && (
                        <div className='absolute top-3 w-full start-1/2 -translate-x-1/2 z-10 shadow-2xl'>
                            <div className='p-5 bg-white border rounded shadow-sm w-11/12 mx-auto'>
                                {/* Logo and button Section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        {logoArea}
                                    </div>
                                    {/* Dropdown menu close Button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <TfiClose className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav menu items sectin */}
                                <div className={`bg-white min-w-[180px] font-medium text-[#2a2a2e] duration-300 flex flex-col gap-4`}>
                                    {navItems}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;