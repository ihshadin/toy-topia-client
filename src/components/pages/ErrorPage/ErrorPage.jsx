import React from 'react';
import img1 from '../../../assets/images/error1.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='px-3 pb-10 xl:px-0 xl:container mx-auto min-h-screen flex flex-col items-center justify-center'>
            <img className='w-full md:w-4/6 mx-auto' src={img1} alt="" />
            <Link className='bg-p py-3 px-12 md:px-20 font-bold text-white inline-block mt-10 text-xl' to='/' >Back to home</Link>
        </section>
    );
};

export default ErrorPage;