import React from 'react'
import { useSelector } from 'react-redux'

const BreadCrumd = (props) => {
    const { activeMenu } = useSelector(state => state.reducer);
    let myClass = '';
    if (activeMenu) myClass = ''
    else myClass = 'pl-7'
    return (
        <div className={`text-sm text-gray-500  ${myClass}`}>
            {props.children}
        </div>
    )
}

export default BreadCrumd