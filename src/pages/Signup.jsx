import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <NavLink to="/login" className="hover:underline font-semibold text-blue-500"> Đăng ký</NavLink>.
    </div>
  )
}

export default Signup