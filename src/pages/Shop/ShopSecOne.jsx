import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  background: url(/src/assets/images/banner/shopbanner.jpg);
  height: 25vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 20vh;
  }

  @media (max-width: 575.97px) {
    height: 15vh;
  }
`
const Label = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 2.75rem;
  }
`

const ShopSecOne = () => {
  return <>
    <section>
      <Banner>
        <Label>運動鞋</Label>
      </Banner>
    </section>
  </>
}

export default ShopSecOne