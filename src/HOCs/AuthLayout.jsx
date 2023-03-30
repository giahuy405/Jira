import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthLayout = (props) => {
    return (
        <div>
            {props.children}
            <NavLink to='/' className='fixed top-3 left-5 text-white hover:text-blue-500' >Back to home page</NavLink>
        </div>
    )
}

export default AuthLayout