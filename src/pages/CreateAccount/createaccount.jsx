import React from 'react'
import { Link } from 'react-router-dom'
import CreateAccountForm from '../../components/CreateAccountComponents/createaccountform'
import '../CreateAccount/CreateAccount.css'

const createaccount = () => {
  return <> 
  <section className='loginform mt-5 mb-5'>
    <div className="container-xxl">
      {/* <div className=""> */}
        <div className="d-flex flex-column align-items-center">
          <div className='text-start'>
            <h3 className='welcome-to'>Looks like you’re new here.<br></br>We need some info.</h3>
            <div className='mt-4'>
              <CreateAccountForm />
            </div>
            <div className='mt-3 mb-5'>
              <Link to={'/login'}><span className='already-registered'>Already Registered?</span></Link>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  </section>
  </>
}

export default createaccount