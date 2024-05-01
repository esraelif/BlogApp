import React from 'react';

const Input = ({ typ, title, form, setForm }) => {
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className='flex flex-col gap-2'>
            <label className=''>{title}</label>
            <input
                className='text-center border-b border-black outline-none' type={typ}
                name={title}
                onChange={handleChange}
            />
        </div>
    );
}

export default Input;
