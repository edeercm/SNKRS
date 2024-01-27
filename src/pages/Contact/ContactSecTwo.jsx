import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContactForm from '../../components/ContactComponents/contactform'

const Container = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 80%;
  }

  @media (max-width: 575.97px) {
    width: 85%;
  }
`

const ContactSecTwo = () => {
  return <>
    <section>
      <Container className='container-xxl'>
        <div className="row">
          <div className="col-12">
            <div className='d-flex flex-column '>
              <h3 className='fw-bold'>Contact Us</h3>
              <span className='mt-2'>For any questions you may have, our Customer Service team is ready to assist you during business hours Monday to Friday from 9am-6pm EST. </span>
            </div>
          </div>
          <div className="col-12">
            <ContactForm />
          </div>
          <hr />
          <div className="col-12">
            <div className="d-flex flex-column mt-3">
              <span className='fs-5 fw-bold text-uppercase'>Customers</span>
              <span>US: (000) 123-4567 | MX: +52 12 3456 78900</span>
              <Link><span className='span-email'>support@snkrs.com</span></Link>
            </div>
            <div className="d-flex flex-column mt-4">
              <span className='fs-5 fw-bold text-uppercase'>Consignors</span>
              <span>For questions about consigning or your consigned inventory</span>
              <Link><span className='span-email'>market@snkrs.com</span></Link>
            </div>
            <div className="d-flex flex-column mt-4">
              <span className='fs-5 fw-bold text-uppercase'>Press</span>
              <span>For press inquiries</span>
              <Link><span className='span-email'>press@snkrs.com</span></Link>
            </div>
          </div>
        </div>
      </Container>

    </section>
  </>
}

export default ContactSecTwo