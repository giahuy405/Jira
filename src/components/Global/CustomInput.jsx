import { useField } from 'formik';
import React from 'react';

const CustomInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    const normalClassInput = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 '
    const errorClassInput = "bg-red-50 border border-red-500 text-red-700 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-blue-500 block w-full p-1.5 ";
    return (
        <>
            <label className='cursor-pointer text-sm font-extralight' htmlFor={props.id}>{label}</label>
            <input
                {...field}
                {...props}
                className={meta.touched && meta.error ?
                    errorClassInput : normalClassInput}
            />
            {meta.touched && meta.error &&
                <span className='text-xs text-red-500' >{meta.error}</span>}
        </>
    );
};

export default CustomInput;