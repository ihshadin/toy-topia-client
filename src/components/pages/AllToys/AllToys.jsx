import React, { useEffect, useState } from 'react';
import ToyCard from '../../shared-comp/ToyCard/ToyCard';

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-topia-server-theta.vercel.app/all-toys')
            .then(res => res.json())
            .then(result => setToys(result))
    }, [])
    // console.log(toys);
    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
            <div className='mb-12'>
                <h2 className='text-2xl md:text-4xl font-bold text-center'>Unleash the power of play with sports toys</h2>
                <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto'>
                    Play, learn, and conquer the field with sports toys that ignite passion, nurture skills, and turn dreams into victories. Embrace the thrill of the game and unleash your inner champion with every play.
                </p>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    toys.map(toy => <ToyCard toy={toy} key={toy._id} />)
                }
            </div>
        </section>
    );
};

export default AllToys;