import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'


import NewsletterSignup from '../Inputs/newsletter'
import stripe from '../../assets/images/pay/stripe.png'
import '../Footer/Footer.css'


import FooterSecOne from './FooterSecOne'
import FooterSecTwo from './FooterSecTwo'
import FooterSecThree from './FooterSecThree'



const Footer = styled.footer`
  width: 100%;
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0C0F0A;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`


const onEmailAccept = (email) => {
  // Esta función realiza la lógica cuando el usuario acepta el boletín
  console.log(`User accepted newsletter with email: ${email}`);
  // Puedes realizar aquí cualquier acción relacionada con la suscripción al boletín.
};

const footer = () => {
  return <>
    <Footer >
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-3 col-xl-3">
            <FooterSecOne />
          </div>
          <div className="col-md-12 col-lg-3 col-xl-3">
            <FooterSecTwo />
          </div>
          <div className="col-md-12 col-lg-3 col-xl-3">
            <FooterSecThree />
          </div>

          <div className="col-md-12 col-lg-3 col-xl-3">
            <h5 className='footer-label-details mb-2 fs-5'>Newsletter</h5>
            <div className="footer-details d-flex flex-column">
              <NewsletterSignup onEmailAccept={onEmailAccept} />
            </div>
          </div>
          <div className='col-12'>
            <div className='d-flex align-items-center justify-content-between'>
              <p className='fs-6'>&copy; Developed by Eder CM | TROPPY</p>
              <img src={stripe} alt="" className='payment' />
            </div>
          </div>

        </div>
      </div>

    </Footer>
  </>
}

export default footer