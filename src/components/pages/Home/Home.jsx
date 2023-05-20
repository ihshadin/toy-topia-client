import React, { useEffect } from 'react';
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'
import banner3 from '../../../assets/images/banner3.jpg'
import Gallery from '../../shared-comp/Gallery/Gallery';
import Testimonial from '../../shared-comp/Testimonial/Testimonial';
import Contact from '../../shared-comp/Contact/Contact';
import CategoriesToy from '../../shared-comp/CategoriesToy/CategoriesToy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useDynamicTitle from '../../../hooks/useDynamicTitle';

const Home = () => {
    useDynamicTitle()
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1500,
        });
    }, [])

    return (
        <>
            <section className='banner-toytopia overflow-hidden'>
                <div className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto grid items-center grid-cols-1 md:grid-cols-2'>
                    <div className='' data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                        <h4 className='text-xl md:text-2xl font-semibol text-p'>Where Imagination Comes to Life!</h4>
                        <h2 className='text-2xl md:text-4xl uppercase font-bold text-white'>Welcome to Toytopia <br /> A Wonderland of Fun and Adventure</h2>
                        <p className='w-full mt-4 text-zinc-200 text-base'>
                            Step into Toytopia, where dreams take flight and playtime knows no bounds. Discover an enchanting collection of toys that inspire creativity, ignite laughter, and create cherished memories that will last a lifetime. Come, let the magic begin!
                        </p>
                    </div>
                    <div>
                        <img className='w-full md:w-10/12 md:ms-auto' src={banner1} alt="" data-aos="fade-left" data-aos-anchor-placement="top-bottom" />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto overflow-hidden'>
                <div className='mb-10'>
                    <h2 className='text-center text-3xl md:text-5xl font-bold' data-aos="zoom-in" data-aos-anchor-placement="top-bottom" >Explore Our Gallery</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto' data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" >
                        Discover a wide variety of captivating images showcasing our diverse collection of toys. Immerse yourself in a world of fun and wonder.
                    </p>
                </div>
                {/* images components */}
                <Gallery />
            </section>

            {/* Shop by category */}
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto overflow-hidden'>
                <div className='mb-12'>
                    <h2 className='text-center text-3xl md:text-5xl font-bold' data-aos="zoom-in" data-aos-anchor-placement="top-bottom">Discover Toy Collections</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto' data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                        Discover a diverse range of toys in various categories. From educational toys to outdoor games, action figures to dolls, we have something for every child. Explore our categories and find the perfect toy to inspire imagination and create lasting memories.
                    </p>
                </div>
                {/* category toys loaded */}
                <CategoriesToy />
            </section>

            {/* testimonial section */}
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto overflow-hidden'>
                <div className='mb-12'>
                    <h2 className='text-center text-2xl md:text-5xl font-bold' data-aos="zoom-in" data-aos-anchor-placement="top-bottom">What Our Customers Say</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto' data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                        Read what our valued customers have to say about their experience with our toys. From endless joy to cherished memories, their testimonials reflect the quality and delight our toys bring into their lives. Join our community of happy customers today!
                    </p>
                </div>
                {/* testimonia components */}
                <Testimonial />
            </section>

            {/* Contact Us Section */}
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
                <div className='mb-12'>
                    <h2 className='text-center text-3xl md:text-5xl font-bold' data-aos="zoom-in" data-aos-anchor-placement="top-bottom">Get in Touch</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto' data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                        Have any questions or feedback? We'd love to hear from you! Reach out to us through the contact form below or contact our friendly customer support team directly. We're here to assist you and provide the best toy shopping experience possible.
                    </p>
                </div>
                {/* contact form components */}
                <Contact />
            </section>
        </>
    );
};

export default Home;