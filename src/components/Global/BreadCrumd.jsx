import React from 'react'
import { useSelector } from 'react-redux'

const BreadCrumd = (props) => {
    return (
        <div className={`text-sm text-gray-500 mb-2`}>
            {props.children}
        </div>
    )
}

export default BreadCrumd