import { GithubOutlined, LogoutOutlined, PlusOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../redux/actions/Auth/actions';
import { getAllProjKeywordAction, OpenModalTaskAction } from '../../redux/actions/Home/ProjectActions';
import { Modal  } from 'antd';
import {WarningOutlined} from '@ant-design/icons'



const SideBar = () => {
    const wrapperRef = useRef(null);
    const dispatch = useDispatch()
    const  Navigate = useNavigate()
    useOutsideAlerter(wrapperRef);
    const [open,setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const handleCancel=()=>{
        setOpen(false)
    }
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    return (
        <>
            <div className='sideBar dark:bg-primary-dark'>
                <div className='sideBarLogo'>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.76 75.76" width={28}><defs><linearGradient id="linear-gradient" x1="34.64" y1="15.35" x2={19} y2="30.99" gradientUnits="userSpaceOnUse"><stop offset="0.18" stopColor="rgba(0, 82, 204, 0.2)" /><stop offset={1} stopColor="#DEEBFE" /></linearGradient><linearGradient id="linear-gradient-2" x1="38.78" y1="60.28" x2="54.39" y2="44.67" xlinkHref="#linear-gradient" /></defs><title>Jira Software-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue"><path d="M72.4,35.76,39.8,3.16,36.64,0h0L12.1,24.54h0L.88,35.76A3,3,0,0,0,.88,40L23.3,62.42,36.64,75.76,61.18,51.22l.38-.38L72.4,40A3,3,0,0,0,72.4,35.76ZM36.64,49.08l-11.2-11.2,11.2-11.2,11.2,11.2Z" style={{ fill: 'rgb(222, 235, 254)' }} /><path d="M36.64,26.68A18.86,18.86,0,0,1,36.56.09L12.05,24.59,25.39,37.93,36.64,26.68Z" style={{ fill: 'url("#linear-gradient")' }} /><path d="M47.87,37.85,36.64,49.08a18.86,18.86,0,0,1,0,26.68h0L61.21,51.19Z" style={{ fill: 'url("#linear-gradient-2")' }} /></g></g></svg>
                    </div>
                </div>
                <div className='sideBar-link cursor-not-allowed' style={{ cursor: 'not-allowed' }}>
                    <div className="sideBar-linkInside ursor-not-allowed">
                        <SearchOutlined className='text-2xl align-top' style={{ lineHeight: '22px' }} />
                    </div>
                    <div className='sideBar-title ursor-not-allowed'>
                        SEARCH ISSUE
                    </div>
                </div>
                <div className='sideBar-link'
                    onClick={() => {
                        dispatch(OpenModalTaskAction)
                    }}>
                    <div className="sideBar-linkInside ">
                        <PlusOutlined className='text-2xl align-top' style={{ lineHeight: '22px' }} />
                    </div>
                    <div className='sideBar-title'>
                        CREATE ISSUE
                    </div>
                </div>
                <div className='absolute bottom-20 w-full' onClick={()=>{Navigate('/project/profile')}}>
                    <div className='sideBar-link'
                    >
                        <div className="sideBar-linkInside ">
                            <UserOutlined className='text-2xl align-top' style={{ lineHeight: '22px' }} />
                        </div>
                        <div className='sideBar-title'>
                            INFO USER
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-9 w-full' onClick={()=>{setOpen(true)}}>
                    <div className='sideBar-link'
                    // onClick={() => setIsVisible(true)}
                    >
                        <div className="sideBar-linkInside ">
                            <LogoutOutlined className='text-2xl align-top' style={{ lineHeight: '22px' }} />
                        </div>
                        <div className='sideBar-title'>
                            LOG OUT
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={open}  onCancel={handleCancel} footer={null}>
        <div className="flex items-center">
        <WarningOutlined className="text-red-500 text-3xl pr-3 mb-2" />
        <h2 >Log Out </h2>
        </div>
        <h2 className="py-5">Do you want to log out ?</h2>
        <div className="flex gap-2 justify-end">
            <button className="text-white bg-red-500 p-1 rounded-md px-2 hover:bg-red-600 duration-500" onClick={()=>{
                 dispatch(logOutUser(Navigate));
                 setOpen(false)
            }}>Log Out</button>
            <button className="hover:bg-gray-300 p-1 px-2 rounded-md duration-500" onClick={()=>{setOpen(false)}}>Cancel</button>
        </div>
      
      </Modal>

        </>
    )

}

export default SideBar