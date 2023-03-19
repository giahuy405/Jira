import React from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../components/Home'
const Home = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Header />
      <button
      onClick={()=>{
        dispatch({
          type:'GET_API'
        })
      }}
      >
        test
      </button>
    </div>
  )
}

export default Home