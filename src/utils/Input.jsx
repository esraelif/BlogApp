import React from 'react';

const Input = ({ typ, title }) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className=''>{title}</label>
            <input className='text-center border-b border-black outline-none' type={typ} name={title} />
        </div>
    );
}

export default Input;
