import React from 'react'
import styled from 'styled-components'
import storeBanner from '../../assets/images/Home/storebanner.jpg'

const Banner = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
  background: url(${storeBanner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    height: 100vh;
  }
`
const Name = styled.h1`
  line-height: 0.75;
  color: white;
  font-size: 6rem;
  font-weight: bold;
`
const Label = styled.span`
  color: white;
  font-size: 1.875rem;
`

const HomeSecFive = () => {
  return <>
    <section>
      <Banner>
        <div className='d-flex flex-column text-center'>
          <Name>snkrs</Name>
          <Label>Bugis Junction, Singapore</Label>
        </div>
      </Banner>
    </section>
  </>
}

export default HomeSecFive