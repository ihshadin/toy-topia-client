import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../routes/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }


    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyToys(data);
            })
    }, [])
    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
            <div className='mb-12'>
                <h2 className='text-2xl md:text-4xl font-bold text-center'>My Toys</h2>
            </div>
            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-p text-white'></th>
                                <th className='bg-p text-white'>Toy Name</th>
                                <th className='bg-p text-white'>Price</th>
                                <th className='bg-p text-white'>Quantity</th>
                                <th className='bg-p text-white'>Category</th>
                                <th className='bg-p text-white'>Edit</th>
                                <th className='bg-p text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map((toy, i) => (
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{toy.toyName}</td>
                                        <td>${toy.toyPrice}</td>
                                        <td>{toy.toyQuantity}</td>
                                        <td>{toy.toyCategory}</td>
                                        <td><button className='cursor-pointer text-white px-5 bg-p'>Edit</button></td>
                                        <td><button className='cursor-pointer text-white px-5 bg-p' onClick={() => handleDelete(toy._id)} >Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyToys;