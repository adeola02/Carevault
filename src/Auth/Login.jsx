import React from 'react'
import '../AuthCss/Login.css'
import { useNavigate } from 'react-router-dom'
import img from '../assets/vector.svg'
import logo from '../assets/Logo.svg'

const Login = () => {

const nav = useNavigate()
  return (
    <div className='Login'>
      <form action="" className='login-form'>
        <div className='logo'>
        <img src={logo} alt="" />
        <img src={img} alt='' className='cancel'/>
        </div>
        <div className='login-header-text'>
          <h3>Welcome back</h3>
          <p>Log in to view, manage and access your secured medical information all the time</p>
        </div>
        <div className='login-input-div'>
          <input type="email"  placeholder='Email' required/>
          <input type="password"  placeholder='Password' required/>
          <span style={{alignSelf:"flex-end"}} onClick={()=>nav('/forgotpassword')}>Forgot Password?</span>
          <button>Login</button>
          <p>Dont have an account  <span onClick={()=>nav('/')}>Sign Up</span></p>
        </div>

      </form>

    </div>
  )
}

export default Login