import React from 'react'
import styled from 'styled-components'
import contactBanner from '../../assets/images/Contact/contactbanner.jpg'

const Banner = styled.div`
  width: 100%;
  height: 25vh;
  background: url(${contactBanner});
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