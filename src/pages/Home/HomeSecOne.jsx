import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  display: block;
  width: 100%;
  height: 70vh;
  background: url(/src/assets/images/banner/homebanner.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 50vh;
  }

  @media (max-width: 575.97px) {
    height: 57.5vh;
  }
`

const HomeSecOne = () => {
  return <>
    <section>
      <Banner></Banner>
    </section>
  </>
}

export default HomeSecOne