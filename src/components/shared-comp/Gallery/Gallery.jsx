import React, { useEffect } from 'react';
import image2 from '../../../assets/images/banner2.png';
import image3 from '../../../assets/images/banner3.jpg';
import image4 from '../../../assets/images/banner4.jpg';
import image5 from '../../../assets/images/banner5.jpg';
import image6 from '../../../assets/images/banner6.jpg';
import image7 from '../../../assets/images/banner7.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {
    const images = [
        image2, image3, image4, image5, image6, image7
    ]
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1500,
        });
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3  justify-center gap-5' data-aos="zoom-in">
            {
                images.map((image, i) =>
                    <div className='rounded-lg bg-white shadow-xl hover:opacity-80' key={i} >
                        <img className='w-full h-60 object-cover rounded-lg cursor-pointer' src={image} alt="" />
                    </div>
                )
            }
        </div>
    );
};

export default Gallery;