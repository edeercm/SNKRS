import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactComponents/contactform'
import '../../pages/Contact/Contact.scss'


const contact = () => {
  return <>
    <div className="contactus-banner">
    </div>
    <div className="custom-container d-flex flex-column mt-5">
      <div className='d-flex flex-column '>
        <span className='fw-bold fs-4'>Contact Us</span>
        <span className='mt-2'>For any questions you may have, our Customer Service team is ready to assist you during business hours Monday to Friday from 9am-6pm EST. </span>
      </div>
      <section className='contactus-form'>
        <ContactForm />
      </section>
      <hr />
      <section className='information'>
        <div className="d-flex flex-column mt-4">
          <span className='fs-5 fw-bold text-uppercase'>Customers</span>
          <span>US: (000) 123-4567 | MX: +52 12 3456 78900</span>
          <Link><span className='span-email'>support@snkrs.com</span></Link>
        </div>
        <div className="d-flex flex-column mt-4">
          <span className='fs-5 fw-bold text-uppercase'>Consignors</span>
          <span>For questions about consigning or your consigned inventory</span>
          <Link><span className='span-email'>market@snkrs.com</span></Link>
        </div>
        <div className="d-flex flex-column mt-4 mb-5">
          <span className='fs-5 fw-bold text-uppercase'>Press</span>
          <span>For press inquiries</span>
          <Link><span className='span-email'>press@snkrs.com</span></Link>
        </div>
      </section>
    </div>
  </>
}

export default contact