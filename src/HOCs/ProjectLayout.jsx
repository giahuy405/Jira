import React from 'react'
import { MenuBar, SideBar } from '../components/Global'

const ProjectLayout = (props) => {
    return (
        <div>
            <SideBar />
            <div className='flex'>
                <div className='hidden md:block'>
                    <MenuBar />
                </div>
                <div className='px-6 pt-5 ml-[65px] md:ml-0 w-full'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ProjectLayout