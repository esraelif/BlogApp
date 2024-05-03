// import React from 'react';
// import Modal from '../../../utils/Modal';
// import { MdClose } from "react-icons/md";
// import { FcGoogle } from "react-icons/fc";
// import { MdFacebook } from "react-icons/md";
// import { AiOutlineMail } from "react-icons/ai";
// import { useState } from 'react';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import { signInWithPopup } from "firebase/auth"
// import { auth, db, provider } from '../../../firebase/firebase';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";

// const Button = ({ icon, text, click }) => {
//     return (
//         <button
//             className='flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full'
//             onClick={click}
//         >
//             {icon}{text}
//         </button>
//     )
// }
// const Auth = ({ modal, setModal }) => {
//     const [createUser, setCreateUser] = useState(false);
//     const [signReq, setSignReq] = useState("");
//     const navigate = useNavigate()

//     const hidden = `modal ? "visible opacity-100" : "invisible opacity-0"}
//    `
//     const googleAuth = async () => {
//         try {
//             const createUser = await signInWithPopup(auth, provider)
//             const newUser = createUser.user.providerData[0];
//             const ref = doc(db, "users", user.uid)
//             const userDoc = await getDoc(ref)
//             console.log(userDoc)

//             if (!userDoc.exists()) {
//                 await setDoc(ref, {
//                     userId: user.uid,
//                     username: newUser.displayName,
//                     email: newUser.email,
//                     userImg: newUser.photoURL,
//                     bio: "",
//                 })

//             }
//             else {
//                 navigate("/")
//                 toast.success("User have been Signed in")
//                 setModal(false);
//             }

//         }
//         catch (error) {
//             toast.error(error.message)
//         }
//     }
//     return (
//         <>
//             <Modal modal={modal} setModal={setModal} hidden={hidden}>
//                 <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows  transition-all duration-700
//                 ${hidden}`}>
//                     <button
//                         onClick={() => setModal(false)}
//                     ><MdClose className='absolute top-8 right-8 text-2xl hover:opacity-50' /></button>
//                     <div className='flex flex-col justify-center items-center gap-[3rem]'>
//                         {signReq === "" ? (<>
//                             <h2 className='text-2xl pt-[5rem]'>{createUser ? "Join Us" : "Welcome Back"}</h2>
//                             <div className='flex flex-col gap-2 w-fit mx-auto '>
//                                 <Button
//                                     click={googleAuth}
//                                     icon={<FcGoogle className='text-xl' />} text={`${createUser ? "Sign Up" : "Sign In"} With Google`} />
//                                 <Button

//                                     icon={<MdFacebook className='text-xl text-blue-600' />} text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`} />
//                                 <Button
//                                     click={() => setSignReq(createUser ? "sign-up" : "sign-in")
//                                     }
//                                     icon={<AiOutlineMail />} text={`${createUser ? "Sign Up" : "Sign In"} With Email`} />
//                             </div>
//                             <p>{createUser ? "Already have an account" : "No Account"}
//                                 <button
//                                     onClick={() => setCreateUser(!createUser)}
//                                     className='text-green-600 hover:text-green-700 font-bold ml-1'>{createUser ? "Sign In" : "Create One"}</button></p>
//                         </>) : signReq === "sign-in" ? (<SignIn setModal={setModal} setSignReq={setSignReq} />) : signReq === "sign-up" ? (<SignUp setModal={setModal} setSignReq={setSignReq} />) : null}
//                         <p className='md:w-[30rem] mx-auto text-center text-sm mb-[3rem]'>
//                             Click "Sign In" to agree to TalkTogether's Terms of Service and acknowledge that TalkTogether's Privacy Policy applies to you.
//                         </p>
//                     </div>
//                 </section>
//             </Modal>
//         </>

//     );
// }

// export default Auth;
import React from 'react';
import Modal from '../../../utils/Modal';
import { MdClose } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { signInWithPopup, signOut } from "firebase/auth"; // Ekledik
import { auth, db, provider } from '../../../firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

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
    const navigate = useNavigate()

    const hidden = `modal ? "visible opacity-100" : "invisible opacity-0"}`;

    const googleAuth = async () => {
        try {
            const createUser = await signInWithPopup(auth, provider)
            const newUser = createUser.user.providerData[0];
            const ref = doc(db, "users", user.uid)
            const userDoc = await getDoc(ref)
            console.log(userDoc)

            if (!userDoc.exists()) {
                await setDoc(ref, {
                    userId: user.uid,
                    username: newUser.displayName,
                    email: newUser.email,
                    userImg: newUser.photoURL,
                    bio: "",
                })

            }
            else {
                navigate("/")
                toast.success("User have been Signed in")
                setModal(false);
            }

        }
        catch (error) {
            toast.error(error.message)
        }
    }
    console.log(signReq)



    return (
        <>
            <Modal modal={modal} setModal={setModal} hidden={hidden}>
                {/* Modal içeriği */}
                <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows  transition-all duration-700 ${hidden}`}>
                    <button onClick={() => setModal(false)}><MdClose className='absolute top-8 right-8 text-2xl hover:opacity-50' /></button>
                    <div className='flex flex-col justify-center items-center gap-[3rem]'>
                        {/* Auth bileşeninin içeriği */}
                        {signReq === "" ? (
                            <>
                                {/* Auth metni ve butonları */}
                                <h2 className='text-2xl pt-[5rem]'>{createUser ? "Join Us" : "Welcome Back"}</h2>
                                <div className='flex flex-col gap-2 w-fit mx-auto '>
                                    {/* Google, Facebook ve Email ile giriş butonları */}
                                    <Button click={googleAuth} icon={<FcGoogle className='text-xl' />} text={`${createUser ? "Sign Up" : "Sign In"} With Google`} />
                                    <Button icon={<MdFacebook className='text-xl text-blue-600' />} text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`} />
                                    <Button click={() => setSignReq(createUser ? "sign-up" : "sign-in")} icon={<AiOutlineMail />} text={`${createUser ? "Sign Up" : "Sign In"} With Email`} />
                                </div>
                                {/* "Already have an account" metni ve butonu */}
                                <p>{createUser ? "Already have an account" : "No Account"}<button onClick={() => setCreateUser(!createUser)} className='text-green-600 hover:text-green-700 font-bold ml-1'>{createUser ? "Sign In" : "Create One"}</button></p>
                            </>
                        ) : (
                            // Sign in veya Sign up bileşenleri
                            signReq === "sign-in" ? <SignIn setModal={setModal} setSignReq={setSignReq} /> : signReq === "sign-up" ? <SignUp setModal={setModal} setSignReq={setSignReq} /> : null
                        )}
                        {/* Kullanım Şartları metni */}
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


