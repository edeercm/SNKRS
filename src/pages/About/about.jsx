import React from 'react'
import { Link } from 'react-router-dom'
import { PiPlugsConnected } from 'react-icons/pi'
import snkrsvideo from '../../assets/videos/snkrsvideo.mp4'
import mission from '../../assets/images/about/mission.jpg'
import model from '../../assets/images/about/model.jpg'
import promise from '../../assets/images/about/promise.jpg'
import '../About/About.css'

const About = () => {
  return <>
    <section className='about'>
      <div className='hero'>
        <div className='video-container'>
          <video className='snkrsvideo' muted autoPlay loop>
            <source src={snkrsvideo} type='video/mp4' />
          </video>
        </div>
        <div className='about-card d-flex flex-column justify-content-center p-4'>
          <span className='text-uppercase'>About snkrs labs</span>
          <span className='fs-4 fw-bold mt-2'>A History of Culture and Community</span>
          <div className='d-flex flex-row align-items-center mt-2'>
            <Link>
              <span><PiPlugsConnected className='fs-4' /></span>
              <span>Connect with Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className='culture'>
      <div className='hero container-xxl'>
        <div className='img-container'>
          <img src={mission} alt="" className='culture-img' />
        </div>
        <div className='culture-card d-flex flex-column justify-content-center p-3'>
          <span className='fs-4 fw-bold text-uppercase'>Culture</span>
          <span className=''>Sneakers mean more than business to us; they're our way of life. We deeply grasp that your attire tells a story of identity, experiences, and aspirations, rooted in our own journey as part of this vibrant community from the start.</span>
        </div>
      </div>
    </section>
    <section className='model'>
      <div className='hero container-xxl'>
        <div className='img-container'>
          <img src={model} alt="" className='model-img' />
        </div>
        <div className='model-card d-flex flex-column justify-content-center p-3'>
          <span className='fs-4 fw-bold text-uppercase'>Model</span>
          <span className=''>We specializing in sneakers that are no longer available at traditional retailers. We're the sole aftermarket with full authentication, guaranteeing product authenticity and condition unless noted otherwise.</span>
        </div>
      </div>
    </section>
    <section className='community'>
      <div className='hero container-xxl'>
        <div className='img-container'>
          <img src={promise} alt="" className='community-img' />
        </div>
        <div className='community-card d-flex flex-column justify-content-center p-3'>
          <span className='fs-4 fw-bold text-uppercase'>Community</span>
          <span className=''>As sneaker fans, our goal is to treat you the way we want to be treated. Our founding mission is to create an aftermarket for both experts and novices to buy and sell merchandise in an open and authentic way.</span>
        </div>
      </div>
    </section>
  </>
}

export default About

