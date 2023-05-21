import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDynamicTitle from '../../../hooks/useDynamicTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    useDynamicTitle();
    const { id } = useParams();
    const [toy, setToy] = useState([]);
    const { toyName, toyPhoto, toyPrice, toyQuantity, toyRating, toyCategory, toyDesc, sellerName, sellerEmail } = toy;

    useEffect(() => {
        fetch(`https://toy-topia-server-theta.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToy(data);
            })
    }, [])

    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
            <div className='flex flex-col-reverse  gap-10'>
                <div className='flex-grow'>
                    <h2 className='text-p font-bold text-3xl md:text-5xl'>{toyName}</h2>
                    <div className='text-sm text-s leading-tight font-bold'>
                        <span className='block'>Seller Name: {sellerName}</span>
                        <span className='block'>Seller Email: {sellerEmail}</span>
                    </div>
                    <div className='my-7 text-xl text-s'>
                        <span className='block'>Price: ${toyPrice}</span>
                        <span className='block'>Quantity: {toyQuantity}</span>
                        <span className='block '>Category: <span>{toyCategory}</span></span>
                        <span className='flex text-2xl font-bold items-center gap-3'>
                            Rating:
                            <Rating
                                style={{ maxWidth: 150, marginBottom: '5px' }}
                                readOnly
                                orientation="horizontal"
                                value={toyRating}
                            />
                            {toyRating}
                        </span>
                    </div>
                    <p className='text-gray-500'>{toyDesc}</p>
                </div>
                <img className='w-full md:w-96 rounded-xl mx-auto' src={toyPhoto} alt="" />
            </div>
        </section>
    );
};

export default ToyDetails;