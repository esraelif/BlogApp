import React from 'react';
import { Link } from 'react-router-dom';
import talktogetherLogo from '../../assets/talktogether.png';
import { nav } from '../../data/Data';
import { useState } from 'react';
import { useEffect } from 'react';
import Auth from './Auth/Auth';
import { Blog } from '../../Context/Context';

const EntryHeader = () => {
    const [isActive, setIsActive] = useState(false);
    const { authModel, setAuthModel } = Blog();

    useEffect(() => {
        const scrollMe = () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
        };
        window.addEventListener("scroll", scrollMe);
    }, []);
    return (
        <header
            className={`border-b border-black sticky h-[100px] top-0 z-50 
    ${isActive ? "bg-white" : "bg-banner"}
    transition-all duration-500`}>
            <div className="size h-[100px] flex items-center justify-between">
                <Link to={"/"}>
                    <img
                        className="h-[4rem]"
                        src={talktogetherLogo}
                        alt="logo"
                    />
                </Link>
                <div className="flex items-center gap-5">
                    <div className="hidden text-sm sm:flex items-center gap-5">
                        {nav.map((link, i) => (
                            <Link key={i} to={link.path}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => setAuthModel(true)}
                            className="hidden text-sm sm:flex items-center gap-5">
                            Sign In
                        </button>
                        <Auth modal={authModel} setModal={setAuthModel} />
                    </div>
                    <button
                        onClick={() => setAuthModel(true)}
                        className={`text-white rounded-full px-3 p-2 text-sm font-medium
            ${isActive ? "bg-green-700" : "bg-black"}
            `}>
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default EntryHeader;
