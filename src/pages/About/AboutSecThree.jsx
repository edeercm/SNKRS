import React from 'react'
import styled from 'styled-components'
import model from '../../assets/images/about/model.jpg'
import { Section, Img } from './AboutGloblalStyles'

const Card = styled.div`
  position: absolute;
  width: 32.75rem;
  height: 10rem;
  padding: 0.75rem 2rem;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 32.5rem;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 575.97px) {
    width: 20rem;
    height: auto;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const AboutSecThree = () => {
  return <>
    <Section>
      <div className='container-xxl position-relative'>
        <div className="row">
          <div className="col-12">
            <Img src={model} alt="Model banner" />
            <Card>
              <div className='d-flex flex-column justify-content-center'>
                <span className='fs-4 fw-bold text-uppercase'>Model</span>
                <span className=''>We specializing in sneakers that are no longer available at traditional retailers. We're the sole aftermarket with full authentication, guaranteeing product authenticity and condition unless noted otherwise.</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default AboutSecThree