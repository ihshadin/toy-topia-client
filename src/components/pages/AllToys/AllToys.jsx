import React, { useEffect, useState } from 'react';
import ToyCard from '../../shared-comp/ToyCard/ToyCard';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("")
    const { totalToys } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(totalToys / itemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Search btn
    const handleSearch = () => {

        fetch(`http://localhost:5000/search/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/all-toys?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                setToys(result)
            })
    }, [currentPage, itemsPerPage])

    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
            <div className='mb-12'>
                <h2 className='text-2xl md:text-4xl font-bold text-center'>Unleash the power of play with sports toys</h2>
                <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto'>
                    Play, learn, and conquer the field with sports toys that ignite passion, nurture skills, and turn dreams into victories. Embrace the thrill of the game and unleash your inner champion with every play.
                </p>
            </div>
            <div className='py-10'>
                <div className='mb-3 max-w-sm mx-auto text-center'>
                    <label htmlFor="search_box" className='block text-2xl font-bold mb-2'>Find Toy Using Name</label>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" name="search_box" id="search_box" className='block w-full bg-teal-50 px-5 py-3 rounded-md' placeholder='Write toy name' required />
                </div>
                <button onClick={handleSearch} className='block w-full md:w-auto mx-auto px-12 py-3 bg-p mt-3 text-white font-semibold uppercase'>Search Toy</button>
            </div>
            {/* <div className='grid md:grid-cols-3 gap-6'>
                {
                    toys.map(toy => <ToyCard toy={toy} key={toy._id} />)
                }
            </div> */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='bg-p text-white'></th>
                            <th className='bg-p text-white'>Seller Name</th>
                            <th className='bg-p text-white'>Toy Name</th>
                            <th className='bg-p text-white'>Price</th>
                            <th className='bg-p text-white'>Quantity</th>
                            <th className='bg-p text-white'>Category</th>
                            <th className='bg-p text-white text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, i) => (
                                <tr key={i}>
                                    <th>{((currentPage - 1) * itemsPerPage) + (i + 1)}</th>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.toyName}</td>
                                    <td>${toy.toyPrice}</td>
                                    <td>{toy.toyQuantity}</td>
                                    <td>{toy.toyCategory}</td>
                                    <td className='text-center'>
                                        <Link to={`/toy/${toy._id}`} className='cursor-pointer text-white px-5 bg-p'>View Details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className='flex gap-2 mt-10 justify-center flex-wrap'>
                {
                    pageNumbers.map(number => (
                        <span
                            key={number}
                            onClick={() => setCurrentPage(number)}
                            className={`cursor-pointer py-2 px-10 bg-p hover:bg-[#06283D] font-bold text-[20px] text-white ${currentPage === number ? 'bg-s' : ''}`}
                        >{number}</span>
                    ))
                }
            </div>
        </section>
    );
};

export default AllToys;