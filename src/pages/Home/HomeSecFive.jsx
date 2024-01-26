import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  margin-top: 6rem;
  min-height: 75vh;
  background: url(/src/assets/images/store/store1.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
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