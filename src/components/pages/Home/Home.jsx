import React from 'react';
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'
import banner3 from '../../../assets/images/banner3.jpg'
import Gallery from '../../shared-comp/Gallery/Gallery';

const Home = () => {
    return (
        <>
            <section className='banner-toytopia'>
                <div className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto grid items-center grid-cols-1 md:grid-cols-2'>
                    <div className=''>
                        <h4 className='text-xl md:text-2xl font-semibol text-p'>Where Imagination Comes to Life!</h4>
                        <h2 className='text-2xl md:text-4xl uppercase font-bold text-white'>Welcome to Toytopia <br /> A Wonderland of Fun and Adventure</h2>
                        <p className='w-full mt-4 text-zinc-200 text-base'>
                            Step into Toytopia, where dreams take flight and playtime knows no bounds. Discover an enchanting collection of toys that inspire creativity, ignite laughter, and create cherished memories that will last a lifetime. Come, let the magic begin!
                        </p>
                    </div>
                    <div>
                        <img className='w-full md:w-10/12 md:ms-auto' src={banner1} alt="" />
                    </div>
                </div>
            </section>
            {/* Gallery Section */}
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
                <div className='mb-10'>
                    <h2 className='text-center text-2xl md:text-5xl font-bold'>Explore Our Gallery</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto'>
                        Discover a wide variety of captivating images showcasing our diverse collection of toys. Immerse yourself in a world of fun and wonder.
                    </p>
                </div>
                <Gallery />
            </section>
        </>
    );
};

export default Home;