import { useField } from 'formik';
import React from 'react';
const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const normalClass = 'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 ';
    const errorClass = 'bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2';
    return (
        <>
            <label className='cursor-pointer text-sm font-extralight'  htmlFor={props.id}>{label}</label>
            <select
                {...field}
                {...props}
                className={
                    meta.touched && meta.error ?
                        errorClass : normalClass}
            />
            {meta.touched && meta.error &&
                <span className='text-xs text-red-500'>{meta.error}</span>}
        </>
    );
};

export default CustomSelect;