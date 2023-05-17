import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TfiAlignRight, TfiClose } from "react-icons/tfi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        // <header className='flex items-center justify-between py-5 px-3 xl:px-0 xl:container mx-auto relative'>
        //     <div>
        //         <Link to='/' className='font-bold text-2xl text-[#2a2a2e]'>Toy<span className='text-[#ffa200]'>Topia</span></Link>
        //     </div>
        //     <div className='overflow-hidden'>
        //         <div className={`bg-white md:static min-w-[180px] hidden md:flex items-center flex-row gap-4 font-medium text-[#2a2a2e] duration-300`}>
        //             <NavLink to='/' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Home</NavLink>
        //             <NavLink to='/blog' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Blog</NavLink>
        //             {
        //                 user ? <img className='w-8 h-8 object-cover rounded-full cursor-pointer' title={user.displayName} src={user.photoURL || 'https://media.licdn.com/dms/image/C5603AQEyNKnirxXA5w/profile-displayphoto-shrink_800_800/0/1632428106559?e=2147483647&v=beta&t=C2zGNkOkQTs6_ZkL3Sq22-KELUUGw9N9FlLSObMPfos'} alt="" />
        //                     : <>
        //                         <NavLink to='/login' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Login</NavLink>
        //                         <NavLink to='/register' className={({ isActive }) => isActive ? "text-[#ffa200]" : "" + `hover:text-[#ffa200]`}>Register</NavLink>
        //                     </>
        //             }
        //             {
        //                 user && <button>Logout</button>
        //             }
        //         </div>

        //         {/* Mobile Menu */}
        //         <div className='lg:hidden'>
        //             <button
        //                 title='Open Menu'
        //                 onClick={() => setMenuOpen(true)}
        //             >
        //                 <TfiAlignRight className='w-5 text-gray-600' />
        //             </button>
        //             {menuOpen && (
        //                 <div className='absolute top-0 w-full start-1/2 -translate-x-1/2 z-10 shadow-2xl'>
        //                     <div className='p-5 bg-white border rounded shadow-sm'>
        //                         {/* Logo and button Section */}
        //                         <div className='flex items-center justify-between mb-4'>
        //                             <div>
        //                                 <Link to='/' className='font-bold text-2xl text-[#2a2a2e]'>Khana<span className='text-[#ffa200]'>Pina</span></Link>
        //                             </div>
        //                             {/* Dropdown menu close Button */}
        //                             <div>
        //                                 <button
        //                                     aria-label='Close Menu'
        //                                     title='Close Menu'
        //                                     onClick={() => setMenuOpen(false)}
        //                                 >
        //                                     <TfiClose className='w-5 text-gray-600' />
        //                                 </button>
        //                             </div>
        //                         </div>
        //                         {/* Mobile Nav menu items sectin */}
        //                         <div className={`bg-white min-w-[180px] gap-4 font-medium text-[#2a2a2e] duration-300`}>
        //                             <NavLink to='/' className={({ isActive }) => isActive ? "text-[#ffa200] block mb-3" : "" + `hover:text-[#ffa200] block mb-3`}>Home</NavLink>
        //                             <NavLink to='/blog' className={({ isActive }) => isActive ? "text-[#ffa200] block mt-3" : "" + `hover:text-[#ffa200] block mb-3`}>Blog</NavLink>
        //                             {
        //                                 user ? <img className='w-8 h-8 object-cover rounded-full cursor-pointer mb-3' title={user.displayName} src={user.photoURL || 'https://media.licdn.com/dms/image/C5603AQEyNKnirxXA5w/profile-displayphoto-shrink_800_800/0/1632428106559?e=2147483647&v=beta&t=C2zGNkOkQTs6_ZkL3Sq22-KELUUGw9N9FlLSObMPfos'} alt="" />
        //                                     : <>
        //                                         <NavLink to='/login' className={({ isActive }) => isActive ? "text-[#ffa200] block mb-3" : "" + `hover:text-[#ffa200] block mb-3`}>Login</NavLink>
        //                                         <NavLink to='/register' className={({ isActive }) => isActive ? "text-[#ffa200] block mb-3" : "" + `hover:text-[#ffa200] block mb-3`}>Register</NavLink>
        //                                     </>
        //                             }
        //                             {
        //                                 user && <button>Logout</button>
        //                             }
        //                         </div>
        //                     </div>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        // </header>
        <div>
            <Link to='/' >Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register' >Signup</Link>
        </div>
    );
};

export default Header;