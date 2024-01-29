import React from 'react'
import styled from 'styled-components'
import FooterInput from './FooterInput'
import stripe from '../../assets/images/pay/stripe.png'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const Footer = styled.footer`
  width: 100%;
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0C0F0A;

  h5, span {
    color: #fff;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const IconsCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    color: #fff;
    font-size: 2rem;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const LabelsCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    cursor: pointer;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Img = styled.img`
  width: 5%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const footer = () => {
  return <>
    <Footer >
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-12 col-lg-3 col-xl-3">
            <IconsCont>
              <a to={'https://www.linkedin.com/in/edeercm/'} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a to={'https://github.com/edeercm'} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a to={'https://www.instagram.com/edeercm/'} target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram />
              </a>
            </IconsCont>
          </div>
          <div className="col-md-12 col-lg-3 col-xl-3">
            <LabelsCont>
              <h5 className='text-uppercase fw-bold fs-5'>Company</h5>
              <div className="d-flex flex-column gap-2">
                <span>Store</span>
                <span>Delivery</span>
                <span>Shop & Pick Up</span>
                <span>Exclusive Comunnity</span>
              </div>
            </LabelsCont>
          </div>
          <div className="col-md-12 col-lg-3 col-xl-3">
            <LabelsCont>
              <h5 className='text-uppercase fw-bold fs-5'>Support</h5>
              <div className="d-flex flex-column gap-2">
                <span>FAQs</span>
                <span>Billing</span>
                <span>Privacy Policy</span>
                <span>Customer Service</span>
                <span>Terms & Conditions</span>
                <span>Exchange & Returns </span>
              </div>
            </LabelsCont>
          </div>
          <div className="col-md-12 col-lg-3 col-xl-3">
            <div className='d-flex flex-column gap-2'>
              <h5 className='text-uppercase fw-bold fs-5'>Newsletter</h5>
              <FooterInput />
            </div>
          </div>
          <div className='col-12 mt-5'>
            <div className='d-flex align-items-center justify-content-between'>
              <span className='fs-6'>&copy; Developed by Eder CM | TROPPY</span>
              <Img src={stripe} alt="Payment" />
            </div>
          </div>

        </div>
      </div>

    </Footer>
  </>
}

export default footer