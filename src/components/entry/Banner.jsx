import React from 'react';

const Banner = () => {
    return (
        <div className="bg-banner border-b border-black">
            <div className="size py-[5rem] flex flex-col items-start gap-[1rem]">
                <h1 className="font-title text-[3rem] sm:text-[4rem] md:text-[6rem] font-normal">
                    Unleash your thoughts,one post at a time.
                </h1>
                <p className="w-full md:w-[31rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7">
                    Where every word finds its digital home...
                </p>
                <button className="btn bg-black1 rounded-full text-white !text-[1.2rem] !px-6 !mt-[2.5rem]">
                    Read,write and connect in the world of words.
                </button>
            </div>
        </div>
    );
};

export default Banner;
