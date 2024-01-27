import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  height: 25vh;
  background-image: url(/src/assets/images/contact/contactus.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 575.98px) and (max-width: 991.98px) {

  }

  @media (max-width: 575.97px) {
    height: 20vh;
  }
`

const ContactSecOne = () => {
  return <>
      <section>
      <Banner></Banner>
    </section>

  </>
}

export default ContactSecOne