import React from 'react';
import { Link } from 'react-router-dom';
import talktogetherLogo from '../../assets/talktogether.png';
import { nav } from '../../data/Data';
import { useState } from 'react';
import { useEffect } from 'react';
import Auth from './auth/Auth';

const EntryHeader = () => {
    const [isActive, setIsActive] = useState(false)
    const [modal, setModal] = useState(false)
    useEffect(() => {
        const scrollMe = () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
        };
        window.addEventListener("scroll", scrollMe)
    }, [])
    return (
        <header
            className={`border-b border-black p-5 sticky top-0 z-50
        ${isActive ? "bg-white" : "bg-banner"}
        transition-all duration-500`
            }>
            <div className='size h-[90px] flex item-center justify-between'>
                <Link to="/">
                    <img className='h-[4rem] ' src={talktogetherLogo} alt="logo" />
                </Link>
                <div className='flex items-center gap-5'>
                    <div className='hidden text-lg font-medium sm:flex items-center gap-5'>
                        {nav.map((link, i) => (
                            <Link key={i} to={link.path}>{link.title}</Link>
                        ))}
                    </div>
                    <div className='relative'>
                        <button
                            onClick={() => setModal(true)}
                            className='hidden text-lg sm:flex font-medium items-center gap-5'>Sign In</button>
                        <Auth modal={modal} setModal={setModal} />
                    </div>
                    <button
                        onClick={() => setModal(true)}
                        className={`bg-black text-white rounded-full px-3 p-2 text-lg font-medium
                    ${isActive ? "bg-[#54c847]" : "bg-black"}`}>Get Started</button>
                </div>

            </div>

        </header>
    );
}

export default EntryHeader;
