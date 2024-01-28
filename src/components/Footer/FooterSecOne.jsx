import React from 'react'
import styled from 'styled-components'
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    color: #fff;
    font-size: 2.25rem;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const FooterSecOne = () => {
  return <>
    <Container>
      <a to={'https://www.linkedin.com/in/edeercm/'} target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin />
      </a>
      <a to={'https://github.com/edeercm'} target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </a>
      <a to={'https://www.instagram.com/edeercm/'} target="_blank" rel="noopener noreferrer">
        <AiOutlineInstagram />
      </a>
    </Container>
  </>
}

export default FooterSecOne