import React from 'react'
import { MenuBar,SideBar } from '../components/Global'

const ProjectLayout = (props) => {
    return (
        <div>
            <SideBar />
            <MenuBar />
            {props.children}
        </div>
    )
}

export default ProjectLayout