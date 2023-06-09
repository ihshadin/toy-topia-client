import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../routes/AuthProvider';
import Swal from 'sweetalert2';
import useDynamicTitle from '../../../hooks/useDynamicTitle';
import { Link } from 'react-router-dom';

const MyToys = () => {
    useDynamicTitle();
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [isAscending, setIsAscending] = useState(true);
    const [sortType, setSortType] = useState('ascending')

    // Delete button function
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
                fetch(`https://toy-topia-server-theta.vercel.app/toys/${id}`, {
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

    const handleSortBtn = (isAsc) => {
        setIsAscending(isAsc);
    }

    // console.log(isAscending, sortType);

    useEffect(() => {
        // Update sortType
        setSortType(isAscending ? 'descending' : 'ascending');

        // Fetch data
        fetch(`https://toy-topia-server-theta.vercel.app/my-toys/${user?.email}?sort=${sortType}`)
            .then(res => res.json())
            .then(data => {
                // console.log(sortType, data);
                setMyToys(data);
            })
    }, [isAscending])



    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
            <div className='mb-5'>
                <h2 className='text-2xl md:text-4xl font-bold text-center text-s'>My Toys</h2>
                <p className='text-center text-xl text-gray-600'>{isAscending ? 'Explore Toys with Ascending Price Order' : 'Explore Toys with Descending Price Order'}</p>
            </div>
            <div className='flex gap-2 justify-center md:justify-start mb-5'>
                <button className={`md:w-auto px-9 md:px-12 py-3 text-white font-semibold uppercase ${isAscending ? 'bg-s' : 'bg-p'}`} onClick={() => handleSortBtn(true)}>Ascending</button>
                <button className={`md:w-auto px-9 md:px-12 py-3 text-white font-semibold uppercase ${isAscending ? 'bg-p' : 'bg-s'}`} onClick={() => handleSortBtn(false)}>Descending</button>
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
                                <th className='bg-p text-white text-center'>Edit</th>
                                <th className='bg-p text-white text-center'>Action</th>
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
                                        <td className='text-center'>
                                            <Link to={`/update-toy/${toy._id}`} className="cursor-pointer text-white px-5 bg-p">Update</Link>
                                        </td>
                                        <td className='text-center'><button className='cursor-pointer text-white px-5 bg-p' onClick={() => handleDelete(toy._id)} >Delete</button></td>
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