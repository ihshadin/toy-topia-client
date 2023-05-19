import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesToy = () => {
    const [activeTab, setActiveTab] = useState("Goal Getter's Paradise")
    const [categoryToy, setCategoryToy] = useState([])

    const handleToyFilterBtn = e => {
        const btn = e.target;
        const btnText = e.target.innerText;
        setActiveTab(btnText);

        const buttons = Array.from(btn.parentNode.children);
        buttons.forEach((button) => {
            if (button !== btn) {
                button.classList.remove('bg-p', 'text-white');
            }
        });

        btn.classList.add('bg-p', 'text-white');
        // console.log(btn);
    }

    useEffect(() => {
        fetch(`https://toy-topia-server-theta.vercel.app/all-toys/${activeTab}`)
            .then(res => res.json())
            .then(result => {
                setCategoryToy(result)
            })
    }, [activeTab])
    // console.log(activeTab);

    return (
        <>
            <div onClick={handleToyFilterBtn} className='flex gap-1 flex-wrap'>
                <button className='py-3 px-6 flex-grow block bg-white bg-p text-white'>Goal Getter's Paradise</button>
                <button className='py-3 px-6 flex-grow block bg-white'>Cricket Carnival</button>
                <button className='py-3 px-6 flex-grow block bg-white'>Basketball Toys</button>
                <button className='py-3 px-6 flex-grow block bg-white'>Splash Zone</button>
                <button className='py-3 px-6 flex-grow block bg-white'>Baseball Toys</button>
                <button className='py-3 px-6 flex-grow block bg-white'>Golf Toys</button>
            </div>
            <div className='grid md:grid-cols-3 gap-6 mt-10'>
                {
                    categoryToy.map(toy => (
                        <div key={toy._id} className='bg-slate-50 rounded-2xl shadow-xl'>
                            <img className='rounded-xl w-full h-96 object-cover' src={toy.toyPhoto} alt="" />
                            <div className='px-4 py-5'>
                                <h3 className='text-2xl font-bold leading-5 text-p'>{toy.toyName}</h3>
                                <div className='flex gap-4 mt-5 text-s'>
                                    <span className=''>Price: ${toy.toyPrice}</span>
                                    <span className=''>Rating: {toy.toyRating}</span>
                                </div>
                                <Link className='bg-p text-white block w-full mt-4 text-center py-3 rounded-full'>View Details</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default CategoriesToy;