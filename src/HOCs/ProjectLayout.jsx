import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { MenuBar, SideBar } from '../components/Global'
import { ModalCreateTask } from '../components/Home';
const ProjectLayout = (props) => {
    const { activeMenu } = useSelector(state => state.reducer);
    let myClass = '';
    if (activeMenu) myClass = 'pl-[320px]'
    else myClass = 'pl-[130px]'
    return (
        <div>
            <SideBar />
            <ModalCreateTask />
            <div className='dark:bg-third-dark'>
                <MenuBar />
                <div className={`w-full p-5 ${myClass}`}>
                    {props.children}
                </div>
            </div>

        </div>
    )
}

export default ProjectLayout