import React, { useContext, useState, useRef } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { RiSearchLine } from 'react-icons/ri'
import { PiUserBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { ShopContext } from '../shopcontext'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import logo from '../../assets/images/snkrslabs.png'
import '../Header/Header.css'


const Header = () => {

  const { getTotalCartProducts } = useContext(ShopContext)
  const totalProducts = getTotalCartProducts()

  const [isOpen, setIsOpen] = useState(false);

  const offcanvasRef = useRef(null);

  // const closeOffcanvas = () => {
  //   if (offcanvasRef.current) {
  //     offcanvasRef.current.classList.remove('show'); // Cierra el offcanvas
  //   }
  // };

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
    <div className="announcement d-flex align-items-center justify-content-center">
      <span className='free-label'>¡Free Shipping on all orders!</span>
    </div>
    <header className='shadow'>
      <div className="container-xxl d-flex align-items-center justify-content-between">
        <Link to='/'><img src={logo} alt="" className='img-fluid logo' /></Link>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to={'/'}>Home</Link>
          <Link to={'shop'}>Shop</Link>
          <Link to={'about'}>About</Link>
          <Link to={'contact'}>Contact</Link>
        </div>
        <div className="d-flex " style={{ gap: window.innerWidth <= 480 ? '0.75rem' : '1rem' }}>
          <div>
            <Link
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <RiSearchLine className='text-dark fs-4' />
            </Link>
            <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" >
              <div className="offcanvas-header">
                <div></div>
                <Link to='/'><img src={logo} alt="" className='img-fluid logo' /></Link>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <form className='form-search-control'>
                    <input
                      type="text"
                      id="search"
                      className='form-control'
                      placeholder='Search'
                    />
                    <div className='d-flex flex-row justify-content-evenly mt-4'>
                      <Link to={'/shop'} className='snkrs-brands'>Nike</Link>
                      <Link to={'/shop'} className='snkrs-brands'>Puma</Link>
                      <Link to={'/shop'} className='snkrs-brands'>Adidas</Link>
                      <Link to={'/shop'} className='snkrs-brands'>New Balance</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Link to={'login'}><PiUserBold className='text-dark fs-4' /></Link>
          <Link
            to={'cart'}>
            <FiShoppingCart className='text-dark fs-4' />
            {totalProducts > 0 && `(${totalProducts})`}
          </Link>
        </div>
        <div className="navbar-toggle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#newOffcanvasRight"
          aria-controls="newOffcanvasRight"
        >
          <HiBars3BottomRight className={`icon ${isOpen ? 'active' : ''}`} />
        </div>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="newOffcanvasRight" aria-labelledby="offcanvasRightLabel" ref={offcanvasRef}>
          <div className="offcanvas-header">
            <div></div>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column align-items-center justify-content-center">
            <div className='offcanvas-menu d-flex flex-column text-center'>
              <Link to={'/'} onClick={closeOffcanvas}>Home</Link>
              <Link to={'shop'} onClick={closeOffcanvas}>Shop</Link>
              <Link to={'about'} onClick={closeOffcanvas}>About</Link>
              <Link to={'contact'} onClick={closeOffcanvas}>Contact</Link>
            </div>
            <div className="offcanvas-social-icons d-flex  justify-content-center">
              <Link to={'https://www.linkedin.com/in/edeercm/'} target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></Link>
              <Link to={'https://github.com/edeercm'} target="_blank" rel="noopener noreferrer"><AiFillGithub /></Link>
              <Link to={'https://www.instagram.com/edeercm/'} target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
}

export default Header


