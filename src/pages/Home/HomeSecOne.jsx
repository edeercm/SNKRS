import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  background: url(/src/assets/images/banner/homebanner.jpg);
  min-height: 70vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const HomeSecOne = () => {
  return <>
    <section className='secone-intro'>
      <Banner></Banner>
    </section>
  </>
}

export default HomeSecOne