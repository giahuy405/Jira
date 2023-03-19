import React from 'react';


const Button = ({ icon, text, myClass, type,onclick }) => {

    return (
        <button
            onClick={onclick}
            type={type}
            className={` ${myClass} hover:drop-shadow-xl hover:bg-blue-700 bg-blue-500 text-white duration-200 rounded`}
        >
            {icon} {text}
        </button>
    );
};

export default Button;