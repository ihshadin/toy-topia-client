import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../routes/AuthProvider';

const AddNewToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = e => {
        e.preventDefault();
        const form = e.target;
        const toyName = form.toy_name.value;
        const toyPhoto = form.toy_photo.value;
        const toyPrice = form.toy_price.value;
        const toyQuantity = form.toy_quantity.value;
        const toyRating = form.toy_rating.value;
        const toyCategory = form.toy_cat.value;
        const toyDesc = form.toy_desc.value;

        const newToy = {
            toyName,
            toyPhoto,
            toyPrice,
            toyQuantity,
            toyRating,
            toyCategory,
            toyDesc,
            userEmail: user?.email
        };
        console.log(newToy);

        fetch('https://toy-topia-server-ihshadin.vercel.app/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 max-w-6xl mx-auto'>
            <h2 className='text-center text-2xl md:text-5xl font-bold mb-7 md:mb-10'>Add New Toy</h2>
            <form onSubmit={handleAddToy} className='order-2 md:order-1'>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className='mb-6'>
                        <label htmlFor="toy_name" className='block font-medium mb-2'>Toy Name</label>
                        <input type="text" name="toy_name" id="toy_name" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Write toy name' required />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="toy_photo" className='block font-medium mb-2'>Toy Photo URL</label>
                        <input type="text" name="toy_photo" id="toy_photo" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy photo URL' required />
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='mb-6'>
                        <label htmlFor="toy_price" className='block font-medium mb-2'>Toy Price</label>
                        <input type="text" name="toy_price" id="toy_price" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy price' required />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="toy_quantity" className='block font-medium mb-2'>Quantity</label>
                        <input type="number" name="toy_quantity" id="toy_quantity" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy quantity' required />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="toy_rating" className='block font-medium mb-2'>Rating</label>
                        <input type="text" name="toy_rating" id="toy_rating" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy rating' required />
                    </div>
                </div>
                <div className='mb-6'>
                    <label htmlFor="toy_cat" className='block font-medium mb-2'>Subject</label>
                    <select name="toy_cat" id="toy_cat" className='block w-full bg-teal-50 px-5 py-3 rounded-md' defaultValue='Select toy category'>
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
                    <textarea name="toy_desc" id="toy_desc" cols="1" rows="5" className='block w-full bg-teal-50 px-5 py-4 rounded-md' placeholder='Write something about the Toy'></textarea>
                </div>
                <button className='block w-full md:w-auto md:ms-auto px-12 py-4 bg-p mt-3 text-white font-semibold uppercase'>Add New Toy</button>
            </form>
        </section>
    );
};

export default AddNewToy;