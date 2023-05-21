import React from 'react';
import useDynamicTitle from '../../../hooks/useDynamicTitle';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdateToy = () => {
    // useDynamicTitle()
    const { id } = useParams();
    const toy = useLoaderData();
    const { toyPrice, toyQuantity, toyDesc } = toy;
    const pageTitle = `ToyTopia | Updating the ${toy.toyName}`

    const handleUpdateToy = (e) => {
        e.preventDefault();

        const form = e.target;
        const toyPrice = form.toy_price.value;
        const toyQuantity = form.toy_quantity.value;
        const toyDesc = form.toy_desc.value;

        const updatedToy = {
            toyPrice,
            toyQuantity,
            toyDesc
        };
        // console.log(updatedToy);

        fetch(`https://toy-topia-server-theta.vercel.app/update-toy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
                <div>
                    <h2 className='text-center text-2xl md:text-5xl font-bold mb-7 md:mb-10'>Update the Toy</h2>
                    <form onSubmit={handleUpdateToy} className='order-2 md:order-1'>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className='mb-6'>
                                <label htmlFor="toy_price" className='block font-medium mb-2'>Toy Price</label>
                                <input type="text" defaultValue={toyPrice} name="toy_price" id="toy_price" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy price' required />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="toy_quantity" className='block font-medium mb-2'>Quantity</label>
                                <input type="number" defaultValue={toyQuantity} name="toy_quantity" id="toy_quantity" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Input toy quantity' required />
                            </div>
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="toy_desc" className='block font-medium mb-2'>Toy Description</label>
                            <textarea defaultValue={toyDesc} name="toy_desc" id="toy_desc" cols="1" rows="5" className='block w-full bg-teal-50 px-5 py-4 rounded-md' placeholder='Write something about the Toy'></textarea>
                        </div>
                        <button className='block w-full md:w-auto md:ms-auto px-12 py-4 bg-p mt-3 text-white font-semibold uppercase'>Update Toy</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default UpdateToy;