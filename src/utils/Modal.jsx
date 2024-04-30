import React from 'react';

const Modal = ({ children, modal, setModal, hidden }) => {
    return (
        <>
            <div
                onClick={() => setModal(false)}
                className={`bg-white/50 fixed inset-0 z-10
            ${modal ? "visible opacity-100" : "invisible opacity-0"}
            ${hidden}
            transition-all duration-500
                    `}>
                {children}
            </div>

        </>
    );
}

export default Modal;
