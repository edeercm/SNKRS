import React from 'react'
import styled from 'styled-components'
import community from '../../assets/images/about/community.jpg'
import { Section, Img } from './AboutGloblalStyles'

const Card = styled.div`
  position: absolute;
  width: 32.75rem;
  height: 10rem;
  padding: 0.75rem 2rem;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`

const AboutSecFour = () => {
  return <>
    <Section>
      <div className='container-xxl position-relative'>
        <Img src={community} alt="Community banner" className='-img' />
        <Card>
          <div className='d-flex flex-column justify-content-center'>
            <span className='fs-4 fw-bold text-uppercase'>Community</span>
            <span className=''>As sneaker fans, our goal is to treat you the way we want to be treated. Our founding mission is to create an aftermarket for both experts and novices to buy and sell merchandise in an open and authentic way.</span>
          </div>
        </Card>
      </div>
    </Section>
  </>
}

export default AboutSecFour