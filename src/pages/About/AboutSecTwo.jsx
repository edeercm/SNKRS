import React from 'react'
import styled from 'styled-components'
import mission from '../../assets/images/about/mission.jpg'
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

const AboutSecTwo = () => {
  return <>
    <Section>
      <div className='container-xxl position-relative'>
        <div className="row">
          <div className="col-12">
            <Img src={mission} alt="Mission banner" />
            <Card>
              <div className='d-flex flex-column justify-content-center'>
                <span className='fw-bold fs-4 text-uppercase'>Culture</span>
                <span>Sneakers mean more than business to us; they're our way of life. We deeply grasp that your attire tells a story of identity, experiences, and aspirations, rooted in our own journey as part of this vibrant community from the start.</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default AboutSecTwo