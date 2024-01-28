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

const FooterSecTwo = () => {
  return <>
    <Container>
      <h5 className='text-uppercase fw-bold fs-5'>Company</h5>
      <div className="d-flex flex-column gap-2">
        <span>Store</span>
        <span>Delivery</span>
        <span>Shop & Pick Up</span>
        <span>Exclusive Comunnity</span>
      </div>
    </Container>
  </>
}

export default FooterSecTwo