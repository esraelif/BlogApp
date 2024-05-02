import React from 'react';
import { FcMindMap } from "react-icons/fc";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import Search from './Search';
import { CgProfile } from "react-icons/cg";
import Modal from '../../../utils/Modal';
import { useState } from 'react';
import UserModal from './UserModal';

const HomeHeader = () => {
    const [modal, setModal] = useState(false)
    return (
        <header className='border-b border-gray-200'>
            <div className='size h-[60px] flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <Link to={"/"}>
                        <span className='text-5xl'> <FcMindMap /></span>

                    </Link>
                    <Search
                    />
                </div>
                <div className='flex items-center gap-3 sm:gap-7'>
                    <Link to="/write" className='hidden md:flex items-center gap-1 text-gray-500'>
                        <span className='text-3xl'>
                            <LiaEditSolid />
                        </span>
                        <span className='text-sm mt-2'>
                            Write
                        </span>
                    </Link>
                    <span className='text-3xl text-gray-500 cursor-pointer'>
                        <IoMdNotificationsOutline /></span>
                    <div className='flex items-center relative'>
                        <span className='text-3xl cursor-pointer}'>
                            <CgProfile onClick={() => setModal(true)} />
                        </span>
                        <span className='text-gray-500 cursor-pointer'><MdKeyboardArrowDown /></span>
                        <Modal modal={modal} setModal={setModal}>
                            <div className={`${modal ? "visible opacity-100%" : "invisible opacity-0"}
                            transition-all duration-100
                            `}>
                                <UserModal />
                            </div>
                        </Modal>


                    </div>
                </div>

            </div>
        </header>
    );
}

export default HomeHeader;
