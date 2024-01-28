import React, { useContext } from 'react'
import { ShopContext } from '../shopcontext'
import styled from 'styled-components'
import Search from './Search'
import Hamburger from './Hamburger'
import logo from '../../assets/images/snkrslabs.png'
import { FiShoppingCart } from 'react-icons/fi'
import { PiUserBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'


const Promo = styled.div`
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0C0F0A;

  span {
    color: #fff;
    font-size: 1.015rem;
  }
`;

const NavBar = styled.header`
  position: sticky;
  top: 0;
  padding: 20px;
  z-index: 99;
  background-color: #FFFFFF;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.25);
`;

const Img = styled.img`
  width: 40%;
  object-fit: contain;
  object-position: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`

const RWDOne = styled.div`
  display: block;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    display: block;
  }

  @media (max-width: 575.97px) {
    display: none!important;
  }
`

const Label = styled.span`
  font-size: 1.075rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #131313;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const RWDTwo = styled.div`
  display: none;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    display: none;
  }

  @media (max-width: 575.97px) {
    display: block;
  }
`

const Header = () => {

  const { getTotalCartProducts } = useContext(ShopContext)
  const totalProducts = getTotalCartProducts()

  return <>
    <Promo >
      <span>¡Free Shipping on all orders!</span>
    </Promo>
    <NavBar >
      <div className="container-xxl">
        <div className="row">
          <div className='col-4 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-start'>
            <Link to={'/'}>
              <Img src={logo} alt="Logo" />
            </Link>
          </div>
          <RWDOne className='col-4 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center'>
            <div className='d-flex flex-row gap-3'>
              <Link to={'/'}><Label>Home</Label></Link>
              <Link to={'Shop'}><Label>Shop</Label></Link>
              <Link to={'About'}><Label>About</Label></Link>
              <Link to={'Contact'}><Label>Contact</Label></Link>
            </div>
          </RWDOne>
          <div className='col-5 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-end'>
            <div className="d-flex flex-row gap-2">
              <Search />
              <Link to={'login'}>
                <PiUserBold className='text-dark fs-4' />
              </Link>
              <Link to={'cart'}>
                <FiShoppingCart className='text-dark fs-4' />
                {totalProducts > 0 && `(${totalProducts})`}
              </Link>
            </div>
          </div>
          <RWDTwo className="col-3">
            <Hamburger />
          </RWDTwo>
        </div>
      </div>
    </NavBar>
  </>
}

export default Header


