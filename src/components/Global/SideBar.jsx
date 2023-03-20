import { GithubOutlined } from '@ant-design/icons';
import React, { useState, useRef, useEffect } from 'react'
import Button from './Button'


const SideBar = () => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [isVisible, setIsVisible] = useState(false);
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
            <div className='sideBar'>
                <div className='sideBarLogo'>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.76 75.76" width={28}><defs><linearGradient id="linear-gradient" x1="34.64" y1="15.35" x2={19} y2="30.99" gradientUnits="userSpaceOnUse"><stop offset="0.18" stopColor="rgba(0, 82, 204, 0.2)" /><stop offset={1} stopColor="#DEEBFE" /></linearGradient><linearGradient id="linear-gradient-2" x1="38.78" y1="60.28" x2="54.39" y2="44.67" xlinkHref="#linear-gradient" /></defs><title>Jira Software-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue"><path d="M72.4,35.76,39.8,3.16,36.64,0h0L12.1,24.54h0L.88,35.76A3,3,0,0,0,.88,40L23.3,62.42,36.64,75.76,61.18,51.22l.38-.38L72.4,40A3,3,0,0,0,72.4,35.76ZM36.64,49.08l-11.2-11.2,11.2-11.2,11.2,11.2Z" style={{ fill: 'rgb(222, 235, 254)' }} /><path d="M36.64,26.68A18.86,18.86,0,0,1,36.56.09L12.05,24.59,25.39,37.93,36.64,26.68Z" style={{ fill: 'url("#linear-gradient")' }} /><path d="M47.87,37.85,36.64,49.08a18.86,18.86,0,0,1,0,26.68h0L61.21,51.19Z" style={{ fill: 'url("#linear-gradient-2")' }} /></g></g></svg>
                    </div>
                </div>
                <div className='sideBar-link'>
                    <div className="sideBar-linkInside">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="{1.5}" stroke="currentColor" className='text-white' style={{ width: '30px' }}>
                            <path strokelinecap="round" strokelinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <div className='sideBar-title'>
                        SEARCH ISSUE
                    </div>
                </div>
                <div className='sideBar-link'>
                    <div className="sideBar-linkInside ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="{1.5}" stroke="currentColor" className='text-white' style={{ width: '30px' }}>
                            <path strokelinecap="round" strokelinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className='sideBar-title'>
                        CREATE ISSUE
                    </div>
                </div>
                <div className='absolute bottom-9 w-full'>
                    <div className='sideBar-link'

                        onClick={() => setIsVisible(true)}
                    >
                        <div className="sideBar-linkInside ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='text-white' style={{ width: '30px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                        </div>
                        <div className='sideBar-title'>
                            ABOUT
                        </div>
                    </div>
                </div>
            </div>
            {isVisible &&
                <div ref={wrapperRef} className='font-light fixed bottom-16 left-52 max-w-[280px] text-black text-sm bg-white rounded p-6 shadow-xl border border-color'>
                    <img className='w-[140px] mx-auto mb-4' src="https://jira.ivorreic.com/feedback-6db192ab3ed372d1de19e207a9c46fd6.png" alt="1" />
                    <p>This simplified Jira clone is built with React on the front-end.</p>
                    <br />
                    <p>Read more on my website or reach out via <a href="https://github.com/giahuy405/Jira">Jira@giahuy405</a></p>
                    <div className='flex gap-3 mt-2'>
                        <a href='https://github.com/giahuy405/Jira' className='flex hover:bg-blue-700 bg-blue-600 duration-300 items-center px-2 py-1.5 rounded gap-1 text-white'>
                            Visit Website
                        </a>
                        <a href='https://github.com/giahuy405/Jira' className='flex hover:bg-gray-200 bg-gray-100 duration-300 items-center px-2 py-1.5 rounded gap-1 text-gray-600'>
                            <GithubOutlined />
                            Github Repo
                        </a>
                    </div>
                </div>
            }
        </>
    )

}

export default SideBar