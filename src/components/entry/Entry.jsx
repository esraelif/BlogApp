import React from 'react';
import Banner from './Banner';
import Trending from './Auth/Trending';
import Posts from '../Common/posts/Posts';
import Discover from './Auth/Discover';

const Entry = () => {
    return (
        <>

            <Banner />
            <Trending />
            <div className='size py-7 flex flex-col-reserve md:flex-row gap-[7em]'>
                <div className='flex-[1.5]'>
                    <Posts />
                </div>
                <div className='flex-[1]  relative'>
                    <Discover />
                </div>

            </div>

        </>
    );
}

export default Entry;
