import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginComponents/loginform'
import '../Login/Login.css'

const login = () => {
  return <>
    <section className='loginform mt-5 mb-5'>
      <div className="container-xxl">
        <div className=" d-flex flex-column align-items-center">
          <div className='text-start'>
            <h3 className='welcome-to'>Welcome to Snkrs Labs</h3>
            <div className='mt-4'>
              <LoginForm />
            </div>
            <div className='mt-4 mb-5'>
              <Link to={'/resetpassword'}><span className='forgot-password'>Forgot Password?</span></Link>
              <span className='m-2'>|</span>
              <Link to={'/createaccount'}><span className='create-account'>Create an Account</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default login