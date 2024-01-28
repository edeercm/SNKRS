import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h5, span {
    color: #fff;
  }

  span {
    cursor: pointer;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const FooterSecThree = () => {
  return <>
    <Container>
      <h5 className='text-uppercase fw-bold fs-5'>Support</h5>
      <div className="d-flex flex-column gap-2">
        <span>FAQs</span>
        <span>Billing</span>
        <span>Privacy Policy</span>
        <span>Customer Service</span>
        <span>Terms & Conditions</span>
        <span>Exchange & Returns </span>
      </div>
    </Container>
  </>
}

export default FooterSecThree