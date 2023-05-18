import React from 'react';
import banner1 from '../../../assets/images/banner2.png'

const Home = () => {
    return (
        <>
            <div className='banner-toytopia'>
                <div className='px-3 xl:px-0 xl:container mx-auto min-h-[70vh] grid items-center grid-cols-1 md:grid-cols-2'>
                    <div className=''>
                        <h4 className='text-2xl font-semibol text-p'>Where Imagination Comes to Life!</h4>
                        <h2 className='text-2xl md:text-4xl uppercase font-bold text-white'>Welcome to Toytopia <br /> A Wonderland of Fun and Adventure</h2>
                        <p className='w-full mt-4 text-zinc-200 text-base'>
                            Step into Toytopia, where dreams take flight and playtime knows no bounds. Discover an enchanting collection of toys that inspire creativity, ignite laughter, and create cherished memories that will last a lifetime. Come, let the magic begin!
                        </p>
                    </div>
                    <div>
                        <img className='w-full md:w-10/12 md:ms-auto' src={banner1} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;