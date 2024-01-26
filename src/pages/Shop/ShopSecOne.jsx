import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  background: url(/src/assets/images/banner/shopbanner.jpg);
  min-height: 25vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Label = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
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