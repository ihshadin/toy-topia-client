import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('')
    }, [])
    return (
        <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto'>
            <div className='mb-12'>
                <h2 className='text-2xl md:text-5xl font-bold text-center'>Unleash the power of play with sports toys</h2>
                <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto'>
                    Play, learn, and conquer the field with sports toys that ignite passion, nurture skills, and turn dreams into victories. Embrace the thrill of the game and unleash your inner champion with every play.
                </p>
            </div>

        </section>
    );
};

export default AllToys;