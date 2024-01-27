import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { RiSearchLine as SearchIcon } from 'react-icons/ri'
import logo from '../../assets/images/snkrslabs.png'

const Img = styled.img`
  position: absolute;
  width: 15%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`
const Input = styled.input` 
  width: 35%;
  height: 2.5rem;
  border-radius: 0;
  border: 0.025rem solid rgba(0,0,0,0.25);

  &:focus {
    box-shadow: none;
    border-color: #0C0F0A;
  }

  &.is-invalid:focus {
    box-shadow: none;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`
const Label = styled.span`
  text-decoration: underline;
  text-underline-position: under;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Search = () => {
  return <>
    <Link
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasTopSearch"
      aria-controls="offcanvasTopSearch"
    >
      <SearchIcon className='text-dark fs-4' />
    </Link>
    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTopSearch" aria-labelledby="offcanvasTopLabel" >
      <div className="offcanvas-header position-relative">
        <Link to={'/'}>
          <Img src={logo} alt="Logo" />
        </Link>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column align-items-center justify-content-center">
        <Input
          type="text"
          id="search"
          placeholder='Search'
        />
        <div className='d-flex flex-row justify-content-evenly mt-4 gap-5'>
          <Link to={'/Shop'}><Label>Nike</Label></Link>
          <Link to={'/Shop'}><Label>Puma</Label></Link>
          <Link to={'/Shop'}><Label>Adidas</Label></Link>
          <Link to={'/Shop'}><Label>New Balance</Label></Link>
        </div>
      </div>
    </div>
  </>
}

export default Search