import React from 'react'
import styled from 'styled-components'
import homeBanner from '../../assets/images/Home/homebanner.jpg'

const Banner = styled.div`
  width: 100%;
  height: 70vh;
  background: url(${homeBanner});
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