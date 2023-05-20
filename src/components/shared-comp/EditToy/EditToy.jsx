import { Result } from 'postcss';
import React, { useEffect, useState } from 'react';
import useDynamicTitle from '../../../hooks/useDynamicTitle';

const EditToy = ({ toy, handleUpdateToy }) => {
    useDynamicTitle()
    // const [toy, setToy] = useState([])
    const {
        _id,
        toyName,
        toyPhoto,
        toyPrice,
        toyQuantity,
        toyRating,
        toyCategory,
        toyDesc,
    } = toy;

    // const handleUpdateToy = () => {
    //     const form = e.target;
    //     const toyName = form.toy_name.value;
    //     const toyPhoto = form.toy_photo.value;
    //     const toyPrice = form.toy_price.value;
    //     const toyQuantity = form.toy_quantity.value;
    //     const toyRating = form.toy_rating.value;
    //     const toyCategory = form.toy_cat.value;
    //     const toyDesc = form.toy_desc.value;

    //     const updatedToy = {
    //         toyName,
    //         toyPhoto,
    //         toyPrice,
    //         toyQuantity,
    //         toyRating,
    //         toyCategory,
    //         toyDesc,
    //         userEmail: user?.email,
    //         userName: user?.displayName,
    //     };
    //     fetch(`http://localhost:5000/update/${id}`, {
    //         method: 'PUT',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(updatedToy)
    //     })
    //         .then(res => res.json())
    //         .then(data => { })
    // }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/toy/${_id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // setToy(data)
    //         })
    // }, [])

    return (
        <div className="modal">
            <div className="modal-box max-w-none w-11/12 md:w-2/3 relative md:py-10">
                <label htmlFor={`my-modal-${toy._id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h2 className='text-center text-2xl md:text-5xl font-bold mb-7 md:mb-10'>Update the Toy</h2>
                <form onSubmit={handleUpdateToy} className='order-2 md:order-1'>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className='mb-6'>
                            <label htmlFor="toy_name" className='block font-medium mb-2'>Toy Name</label>
                            <input type="text" defaultValue={toyName} name="toy_name" id="toy_name" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Write toy name' required />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="toy_photo" className='block font-medium mb-2'>Toy Photo URL</label>
                            <input type="text" defaultValue={toyPhoto} name="toy_photo" id="toy_photo" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy photo URL' required />
                        </div>
                        <div className='mb-6 hidden'>
                            <label htmlFor="toy_u_id" className='block font-medium mb-2'>ID</label>
                            <input type="text" defaultValue={_id} name="toy_id" id="toy_id" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy photo URL' />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 gap-5'>
                        <div className='mb-6'>
                            <label htmlFor="toy_price" className='block font-medium mb-2'>Toy Price</label>
                            <input type="text" defaultValue={toyPrice} name="toy_price" id="toy_price" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy price' required />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="toy_quantity" className='block font-medium mb-2'>Quantity</label>
                            <input type="number" defaultValue={toyQuantity} name="toy_quantity" id="toy_quantity" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy quantity' required />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="toy_rating" className='block font-medium mb-2'>Rating</label>
                            <input type="text" defaultValue={toyRating} name="toy_rating" id="toy_rating" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy rating' required />
                        </div>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="toy_cat" className='block font-medium mb-2'>Subject</label>
                        <select name="toy_cat" id="toy_cat" className='block w-full bg-teal-50 px-5 py-3 rounded-md' defaultValue={toyCategory}>
                            <option disabled value='Select toy category'>Select toy Category</option>
                            <option value="Goal Getter's Paradise">Goal Getter's Paradise</option>
                            <option value="Cricket Carnival">Cricket Carnival</option>
                            <option value="Basketball Toys">Basketball Toys</option>
                            <option value="Splash Zone">Splash Zone</option>
                            <option value="Baseball Toys">Baseball Toys</option>
                            <option value="Golf Toys">Golf Toys</option>
                        </select>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="toy_desc" className='block font-medium mb-2'>Toy Description</label>
                        <textarea defaultValue={toyDesc} name="toy_desc" id="toy_desc" cols="1" rows="5" className='block w-full bg-teal-50 px-5 py-4 rounded-md' placeholder='Write something about the Toy'></textarea>
                    </div>
                    <button className='block w-full md:w-auto md:ms-auto px-12 py-4 bg-p mt-3 text-white font-semibold uppercase'>Update Toy</button>
                </form>
            </div>
        </div>
    );
};

export default EditToy;