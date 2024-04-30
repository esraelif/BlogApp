import React from 'react';

const Banner = () => {
    return (
        <div className='bg-banner border-b border-black '>
            <div className='size py-[5rem] flex flex-col items-start gap-[1rem] ' >
                <h1 className='font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal'>Let's Talk and Discuss Together</h1>
                <p className='w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7'>Share and Discover your experiences,learnings and memories</p>
                <button className='btn bg-black rounded-full text-white !text-[1.2rem] !px-6 !mt-[2.5rem] '>Let's Discover</button>
            </div>
        </div>
    );
}

export default Banner;
