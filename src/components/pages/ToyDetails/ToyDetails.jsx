import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { id } = useParams();
    const [toy, setToy] = useState([]);
    const { toyName, toyPhoto, toyPrice, toyQuantity, toyRating, toyCategory, toyDesc, sellerName, sellerEmail } = toy;

    useEffect(() => {
        fetch(`http://localhost:5000/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data);
            })
    }, [])

    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
            <div className='flex flex-col-reverse items-center gap-10'>
                <div className='flex-grow'>
                    <h2 className='text-p font-bold text-3xl md:text-5xl'>{toyName}</h2>
                    <div className='text-sm text-s leading-tight font-bold'>
                        <span className='block'>Seller Name: {sellerName}</span>
                        <span className='block'>Seller Email: {sellerEmail}</span>
                    </div>
                    <div className='flex gap-10 mt-5 text-xl text-s'>
                        <span className=''>Price: ${toyPrice}</span>
                        <span className=''>Quantity: {toyQuantity}</span>
                    </div>
                    <span className='block text-xl mb-5'>Category: <span>{toyCategory}</span></span>
                    <p className='text-gray-500'>{toyDesc}</p>
                </div>
                <img className='w-full md:w-96 rounded-xl' src={toyPhoto} alt="" />
            </div>
        </section>
    );
};

export default ToyDetails;