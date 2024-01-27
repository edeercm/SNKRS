import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PiPlugsConnected } from 'react-icons/pi'
import snkrsvideo from '../../assets/videos/snkrsvideo.mp4'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 45vh;
  }

  @media (max-width: 575.97px) {
    height: 100vh;
  }
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`
const Card = styled.div`
  position: absolute;
  width: 28rem;
  height: 10rem;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 30rem;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 575.97px) {
    width: 20rem;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const AboutSecOne = () => {
  return <>
    <section>
      <Container>
        <Video muted autoPlay loop>
          <source src={snkrsvideo} type='video/mp4' />
        </Video>
        <Card>
          <div className='flex flex-column p-4'>
            <div className='d-flex flex-column'>
              <span className='text-uppercase'>About snkrs labs</span>
              <span className='fw-bold fs-4 mt-2'>A History of Culture and Community</span>
            </div>
            <div className='d-flex flex-row align-items-center mt-2'>
              <Link>
                <span><PiPlugsConnected className='fs-4' /></span>
                <span>Connect with Us</span>
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </section>

  </>
}

export default AboutSecOne
