import React from 'react';
import Modal from '../../../utils/Modal';
import { MdClose } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Button = ({ icon, text, click }) => {
    return (
        <button
            className='flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full'
            onClick={click}
        >
            {icon}{text}
        </button>
    )
}
const Auth = ({ modal, setModal }) => {
    const [createUser, setCreateUser] = useState(false);
    const [signReq, setSignReq] = useState("");

    const hidden = `modal ? "visible opacity-100" : "invisible opacity-0"}
   `

    return (
        <>
            <Modal modal={modal} setModal={setModal} hidden={hidden}>
                <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows  transition-all duration-700
                ${hidden}`}>
                    <button
                        onClick={() => setModal(false)}
                    ><MdClose className='absolute top-8 right-8 text-2xl hover:opacity-50' /></button>
                    <div className='flex flex-col justify-center items-center gap-[3rem]'>
                        {signReq === "" ? (<>
                            <h2 className='text-2xl pt-[5rem]'>{createUser ? "Join Us" : "Welcome Back"}</h2>
                            <div className='flex flex-col gap-2 w-fit mx-auto '>
                                <Button icon={<FcGoogle className='text-xl' />} text={`${createUser ? "Sign Up" : "Sign In"} With Google`} />
                                <Button

                                    icon={<MdFacebook className='text-xl text-blue-600' />} text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`} />
                                <Button
                                    click={() => setSignReq(createUser ? "sign-up" : "sign-in")
                                    }
                                    icon={<AiOutlineMail />} text={`${createUser ? "Sign Up" : "Sign In"} With Email`} />
                            </div>
                            <p>{createUser ? "Already have an account" : "No Account"}
                                <button
                                    onClick={() => setCreateUser(!createUser)}
                                    className='text-green-600 hover:text-green-700 font-bold ml-1'>{createUser ? "Sign In" : "Create One"}</button></p>
                        </>) : signReq === "sign-in" ? (<SignIn setSignReq={setSignReq} />) : signReq === "sign-up" ? (<SignUp setSignReq={setSignReq} />) : null}
                        <p className='md:w-[30rem] mx-auto text-center text-sm mb-[3rem]'>
                            Click "Sign In" to agree to TalkTogether's Terms of Service and acknowledge that TalkTogether's Privacy Policy applies to you.
                        </p>
                    </div>
                </section>
            </Modal>
        </>

    );
}

export default Auth;
