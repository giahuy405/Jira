import { CheckOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Header } from '../components/Home'
const Home = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Header />
      {/* linear bg */}
      <section className='bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 py-24 mt-12'>
        <div className='max-w-[880px] mx-auto md:flex justify-between  gap-20 text-white'>
          <div className='md:w-1/2 px-3 '>
            <h3 className='text-4xl font-semibold '>The #1 software development tool used by agile teams</h3>
            <p className='text-md font-bold mt-7 mb-5'>EACH PRODUCT ON A FREE PLAN:</p>
            <ul>
              <li className='flex items-center gap-4 my-2'><CheckOutlined /> Supports up to 10 users</li>
              <li className='flex items-center gap-4 my-2'><CheckOutlined /> Includes 2 GB storage</li>
              <li className='flex items-center gap-4 my-2'><CheckOutlined /> Offers Community support</li>
              <li className='flex items-center gap-4 my-2'><CheckOutlined /> Is always free, no credit card needed</li>
            </ul>
          </div>
          <div className='md:w-1/2 pt-10'>
            <div className='bg-white rounded shadow-lg text-black px-5 py-8 text-center'>
              <h3 className='text-4xl font-semibold '>Get started</h3>
              <p className='mt-1 mb-4'> Free for up to 10 users</p>
              <NavLink to='/signup' className="self-center px-5 py-2 font-semibold rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-200">SIGN UP NOW</NavLink>
              <div className='mt-6 '>
                <svg
                  className="h-4  mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 532.119 66.025"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:#2684ff;}.cls-3{fill:#0052cc;}",
                      }}
                    />
                    <linearGradient
                      id="linear-gradient"
                      x1="28.121"
                      y1="35.051"
                      x2="11.239"
                      y2="64.292"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#0052cc" />
                      <stop offset="0.923" stopColor="#2684ff" />
                    </linearGradient>
                  </defs>
                  <title>Atlassian-horizontal-blue-rgb</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Blue">
                      <path
                        className="cls-1"
                        d="M19.354,30.115a1.856,1.856,0,0,0-3.157.343L.2,62.442a1.912,1.912,0,0,0,1.71,2.767H24.185a1.843,1.843,0,0,0,1.71-1.057C30.7,54.223,27.788,39.126,19.354,30.115Z"
                      />
                      <path
                        className="cls-2"
                        d="M31.087,1.024a42.188,42.188,0,0,0-2.463,41.65L39.363,64.152a1.912,1.912,0,0,0,1.71,1.057H63.344a1.912,1.912,0,0,0,1.71-2.767S35.092,2.511,34.339,1.012A1.806,1.806,0,0,0,31.087,1.024Z"
                      />
                      <path
                        className="cls-3"
                        d="M292.314,26.669c0,7.92,3.674,14.208,18.045,16.984,8.574,1.8,10.37,3.184,10.37,6.042,0,2.776-1.8,4.573-7.839,4.573a44.236,44.236,0,0,1-20.821-5.634v12.9c4.328,2.123,10.043,4.491,20.658,4.491,15.024,0,20.985-6.7,20.985-16.657m0,0c0-9.39-4.981-13.8-19.025-16.82-7.757-1.715-9.635-3.429-9.635-5.879,0-3.1,2.776-4.409,7.92-4.409,6.206,0,12.33,1.878,18.127,4.491V14.421a40.97,40.97,0,0,0-17.719-3.674c-13.881,0-21.066,6.042-21.066,15.922"
                      />
                      <polygon
                        className="cls-3"
                        points="485.332 11.563 485.332 65.209 496.763 65.209 496.763 24.301 501.581 35.16 517.748 65.209 532.119 65.209 532.119 11.563 520.688 11.563 520.688 46.184 516.36 36.14 503.377 11.563 485.332 11.563"
                      />
                      <rect
                        className="cls-3"
                        x="400.133"
                        y="11.563"
                        width="12.493"
                        height="53.646"
                      />
                      <path
                        className="cls-3"
                        d="M385.718,49.368c0-9.39-4.981-13.8-19.025-16.82-7.757-1.715-9.635-3.429-9.635-5.879,0-3.1,2.776-4.409,7.92-4.409,6.206,0,12.33,1.878,18.127,4.491V14.421a40.97,40.97,0,0,0-17.719-3.674c-13.881,0-21.066,6.042-21.066,15.922,0,7.92,3.674,14.208,18.045,16.984,8.574,1.8,10.37,3.184,10.37,6.042,0,2.776-1.8,4.573-7.839,4.573a44.236,44.236,0,0,1-20.821-5.634v12.9c4.328,2.123,10.043,4.491,20.658,4.491,15.024,0,20.985-6.7,20.985-16.657"
                      />
                      <polygon
                        className="cls-3"
                        points="195.265 11.563 195.265 65.209 220.943 65.209 224.986 53.614 207.839 53.614 207.839 11.563 195.265 11.563"
                      />
                      <polygon
                        className="cls-3"
                        points="144.533 11.563 144.533 23.157 158.414 23.157 158.414 65.209 170.988 65.209 170.988 23.157 185.849 23.157 185.849 11.563 144.533 11.563"
                      />
                      <path
                        className="cls-3"
                        d="M126.3,11.563H109.821L91.114,65.209H105.4l2.652-9.035a35.508,35.508,0,0,0,20.008,0l2.652,9.035h14.289ZM118.06,46.5a24.4,24.4,0,0,1-6.875-.989L118.06,22.1l6.875,23.419A24.4,24.4,0,0,1,118.06,46.5Z"
                      />
                      <path
                        className="cls-3"
                        d="M265.211,11.563H248.733L230.026,65.209h14.289l2.652-9.035a35.508,35.508,0,0,0,20.008,0l2.652,9.035h14.289ZM256.972,46.5a24.4,24.4,0,0,1-6.875-.989L256.972,22.1l6.875,23.419A24.4,24.4,0,0,1,256.972,46.5Z"
                      />
                      <path
                        className="cls-3"
                        d="M457.644,11.563H441.166L422.459,65.209h14.289l2.652-9.035a35.508,35.508,0,0,0,20.008,0l2.652,9.035H476.35ZM449.4,46.5a24.4,24.4,0,0,1-6.875-.989L449.4,22.1l6.875,23.419A24.4,24.4,0,0,1,449.4,46.5Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* introduce */}
      <section className='text-center pt-10 bg-gradient-to-b from-white via-gray-100 to-gray-200 mb-10'>
        <h3 className='text-4xl font-semibold text-gray-600'>Jira your way</h3>
        <p className='text-xl text-gray-500 my-6'>Easily customize your workflows by turning on (or off) tons of powerful features with a single click.</p>
        <div className='max-w-[600px] mx-auto ' >
          <img id="84435c58" alt="Screenshot of toggling features" className="component__image" src="https://wac-cdn.atlassian.com/dam/jcr:720d8ce3-ab0c-4eb9-bb9b-515ac674e160/01_Scrnshot_jira-configuration-static.png?cdnVersion=892" loading="auto" />
        </div>
      </section>
      <section className='shadow-lg'>
        <div className='text-center max-w-[750px] mx-auto pb-10 '>
          <p className='text-xl text-gray-500 font-semibold'> “We grew to 30 projects with lots of plans and branches under each, which means 50 running builds at the same time. Considering the number of projects, we couldn’t have survived without Atlassian.”</p>
          <span className='text-slate-900 text-xs mt-4'>Scott Carpenter
            Work Program Manager, Fugro Roames</span>
        </div>
      </section>
      <section>
        <div className='md:flex justify-between max-w-[900px] my-6 gap-14 items-center mx-auto px-2'>
          <div className='md:w-1/3'>
            <h3 className='font-bold text-2xl mb-2'>Unfunk your workflow</h3>
            <p>Set up, clean up, and easily manage even the most hectic project workflows.</p>
          </div>
          <div className='md:w-2/3'>
            <img id="fc934c13" alt="Screenshot of Next-gen board" className="component__image" src="https://wac-cdn.atlassian.com/dam/jcr:999ace66-3f06-4675-916b-c8dfaffc0795/Unfunk-JSW-PSD-2x.png?cdnVersion=892" loading="auto" />
          </div>
        </div>
        <div className='md:flex justify-between max-w-[900px] my-6 gap-14 items-center mx-auto px-2'>
          <div className='md:w-2/3'>
            <img id="c7a6c6d5" alt="Screenshot of Jira roadmap" className="component__image" src="https://wac-cdn.atlassian.com/dam/jcr:8f84e087-3d18-46a1-9453-ce370c45dbc1/Stay-JSW-PSD-2x.png?cdnVersion=892" loading="auto" />
          </div>
          <div className='md:w-1/3'>
            <h3 className='font-bold text-2xl mb-2'>Unfunk your workflow</h3>
            <p>Set up, clean up, and easily manage even the most hectic project workflows.</p>
          </div>
        </div>
        <div className='md:flex px-3 justify-between max-w-[900px] my-6 gap-14 items-center mx-auto'>
          <div className='md:w-1/3'>
            <h3 className='font-bold text-2xl mb-2'>Unfunk your workflow</h3>
            <p>Set up, clean up, and easily manage even the most hectic project workflows.</p>
          </div>
          <div className='md:w-2/3'>
            <img id="45e0c729" alt="Screenshot of Jira ticket" className="component__image" src="https://wac-cdn.atlassian.com/dam/jcr:7e2d0ac1-3631-4e1e-a5c5-4c106c323aee/Ditch-JSW-PSD-2x.png?cdnVersion=892" loading="auto" />
          </div>
        </div>
      </section>
      <section className='bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 py-12 mt-12'>
        <div className='max-w-[880px] mx-auto text-center text-white'>
          <h3 className='text-4xl font-semibold'>Concept to launch in record time.</h3>
          <button
            className='bg-yellow-500 py-2 px-5 rounded text-black mt-6'
          >Get it free</button>
        </div>
      </section>
      <section className='text-center max-w-[900px] mx-auto py-14'>
        <h3 className='text-2xl font-semibold'> Trusted by over 100,000 customers world-wide</h3>
        <div className='flex gap-6 justify-center mt-6 flex-col md:flex-row'>
          <img id="e3be2884" alt="Square logo" className="component__image" style={{ height: 45 }} src="https://wac-cdn.atlassian.com/dam/jcr:4cba45db-e328-4abd-88ea-bfe276355cb5/Square%20Logo.svg?cdnVersion=892" loading="auto" />
          <img id="408adcd5" alt="ebay logo" className="component__image" style={{ height: 45 }} src="https://wac-cdn.atlassian.com/dam/jcr:db51d228-2145-498b-ab73-064aa651770d/ebay%20logo.svg?cdnVersion=892" loading="auto" />
          <img id="254ea3eb" alt="Spotify logo" className="component__image" style={{ height: 45 }} src="https://wac-cdn.atlassian.com/dam/jcr:7db3e103-186c-4413-950d-dea2f2a5755c/Spotify%20logo.svg?cdnVersion=892" loading="auto" />
          <img id="e3be2884" alt="Square logo" className="component__image" style={{ height: 45 }} src="https://wac-cdn.atlassian.com/dam/jcr:4cba45db-e328-4abd-88ea-bfe276355cb5/Square%20Logo.svg?cdnVersion=892" loading="auto" />
        </div>
      </section>
      <footer className='py-10 bg-gray-200 px-2'>
        <div className='max-w-[1000px] flex justify-around mx-auto '>
          <div>
            <ul>
              <li><h3 className='text-lg mb-3 font-semibold'>PRODUCTS</h3></li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><h3 className='text-lg mb-3 font-semibold'>PRODUCTS</h3></li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><h3 className='text-lg mb-3 font-semibold'>PRODUCTS</h3></li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><h3 className='text-lg mb-3 font-semibold'>PRODUCTS</h3></li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
              <li>Some link</li>
            </ul>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Home