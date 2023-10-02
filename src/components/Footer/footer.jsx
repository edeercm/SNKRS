import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import NewsletterSignup from '../Inputs/newsletter'
import stripe from '../../assets/images/pay/stripe.png'
import '../Footer/Footer.css'


const onEmailAccept = (email) => {
  // Esta función realiza la lógica cuando el usuario acepta el boletín
  console.log(`User accepted newsletter with email: ${email}`);
  // Puedes realizar aquí cualquier acción relacionada con la suscripción al boletín.
};

const footer = () => {
  return <>
    <footer className='p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="footer-content d-flex mt-4 mb-4">
            <div className="col-lg-3 col-md-3 footer-details ">
              <div className="social-icons">
                <Link to={'https://www.linkedin.com/in/edeercm/'} target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='fs-4' /></Link>
                <Link to={'https://github.com/edeercm'} target="_blank" rel="noopener noreferrer"><AiFillGithub className='fs-4' /></Link>
                <Link to={'https://www.instagram.com/edeercm/'} target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className='fs-4' /></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h5 className='footer-label-details mb-2 fs-5'>Company</h5>
              <div className="footer-details d-flex flex-column">
                <Link className='mb-1'>Store</Link>
                <Link className='mb-1'>Delivery</Link>
                <Link className='mb-1'>Shop & Pick Up</Link>
                <Link className='mb-1'>Exclusive Comunnity</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 ">
              <h5 className='footer-label-details mb-2 fs-5'>Support</h5>
              <div className="footer-details d-flex flex-column">
              <Link className='mb-1'>FAQs</Link>
                <Link className='mb-1'>Billing</Link>
                <Link className='mb-1'>Privacy Policy</Link>
                <Link className='mb-1'>Customer Service</Link>
                <Link className='mb-1'>Terms & Conditions</Link>
                <Link className='mb-1'>Exchange & Returns </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 ">
              <h5 className='footer-label-details mb-2 fs-5'>Newsletter</h5>
              <div className="footer-details d-flex flex-column">
                <NewsletterSignup onEmailAccept={onEmailAccept} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='additional-footer-info d-flex align-items-center justify-content-between mt-5'>
        <p className='fs-6'>&copy; Developed by Eder CM | TROPPY</p>
        <img src={stripe} alt="" className='payment' />
      </div>
    </footer>
  </>
}

export default footer