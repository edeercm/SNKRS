import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const Container = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  svg {
    color: #0C0F0A;
    font-size: 2rem;
  }
`;

const Label = styled.span`
  color: #0C0F0A;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-position: under;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    color: #0C0F0A;
    font-size: 2.5rem;
  }
`;

const Hamburger = () => {

  const offcanvasRef = useRef(null);

  const closeOffcanvas = () => {
    if (offcanvasRef.current) {
      offcanvasRef.current.classList.remove('show'); // Quita la clase 'show' para cerrar el offcanvas
      const backdrop = document.querySelector('.offcanvas-backdrop'); // Reemplaza '.offcanvas-backdrop' con la clase correcta
      if (backdrop) {
        backdrop.remove(); // Elimina el fondo oscuro
      }
    }
  };

  return <>
    <Container>
      <div className="navbar-toggle"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <HiBars3BottomRight />
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasRightLabel" ref={offcanvasRef}>
        <div className="offcanvas-header d-flex justify-content-end">
          <button type="button" className="btn-close fs-4" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-around">
          <div className='d-flex flex-column text-center gap-3'>
            <Link to={'/'} onClick={closeOffcanvas}> <Label>Home</Label></Link>
            <Link to={'Shop'} onClick={closeOffcanvas}><Label>Shop</Label></Link>
            <Link to={'About'} onClick={closeOffcanvas}><Label>About</Label></Link>
            <Link to={'Contact'} onClick={closeOffcanvas}><Label>Contact</Label></Link>
          </div>
          <Icons>
            <a href="https://www.linkedin.com/in/edeercm/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/edeercm" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/edeercm/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram />
            </a>
          </Icons>
        </div>
      </div>
    </Container>

  </>
}

export default Hamburger