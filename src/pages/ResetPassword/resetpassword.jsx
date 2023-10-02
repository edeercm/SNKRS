import React from 'react'
import { Link } from 'react-router-dom'
import ResetPasswordForm from '../../components/ResetPassComponents/resetpasswordform'

const resetpassword = () => {
  return <>
    <section className='loginform mt-5 mb-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <div className='text-start'>
              <h3 className='welcome-to'>Forgot Your Password?</h3>
              <div className='mt-3'>
                <span>Please enter your email address below. You will receive a link to <br />reset your password.</span>
              </div>
              <div className='mt-4'>
                <ResetPasswordForm />
              </div>
              <div className='mt-4 mb-5'>
                <Link to={'/login'}><span className='forgot-password'>Back to Login Form</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default resetpassword


