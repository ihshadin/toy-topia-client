import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../routes/AuthProvider';

const ToyCard = ({ toy }) => {
    const { toyName, toyPhoto, toyPrice, toyQuantity, toyCategory } = toy;
    const { user } = useContext(AuthContext);

    return (
        <div className='bg-slate-50 rounded-xl shadow-xl'>
            <img className='rounded-xl w-full h-96 object-cover' src={toyPhoto} alt="" />
            <div className='px-4 py-5'>
                <h3 className='text-2xl font-bold leading-5 text-p'>{toyName}</h3>
                <h5 className='text-sm text-gray-400'>{user?.displayName}</h5>
                <div className='flex gap-4 mt-5 text-s'>
                    <span className=''>Price: ${toyPrice}</span>
                    <span className=''>Quantity: {toyQuantity}</span>
                </div>
                <span className='mr-3 text-lg'>Category: <span>{toyCategory}</span></span>
                <Link className='bg-p text-white block w-full mt-4 text-center py-3 rounded-full'>View Details</Link>
            </div>
        </div>
    );
};

export default ToyCard;