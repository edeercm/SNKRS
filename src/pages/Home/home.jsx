import React from 'react'
import styled from 'styled-components'


import HomeSecOne from './HomeSecOne'
import HomeSecTwo from './HomeSecTwo'
import HomeSecThree from './HomeSecThree'
import HomeSecFour from './HomeSecFour'
import HomeSecFive from './HomeSecFive'


const BannerIntro = styled.div`
  background: url(/src/assets/images/banner/homebanner.jpg);
  min-height: 70vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Label = styled.span`
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-position: under;
`

const BannerOutro = styled.div`
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

const LabelTwo = styled.span`
  color: white;
  font-size: 1.875rem;
`

const Home = () => {
  return <>
    <HomeSecOne />
    <HomeSecTwo />
    <HomeSecThree />
    <HomeSecFour />
    <HomeSecFive />
  </>
}

export default Home