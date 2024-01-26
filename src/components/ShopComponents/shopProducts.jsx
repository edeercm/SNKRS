import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ShopContext } from '../shopcontext'
import '../ShopComponents/ShopProducts.css'

const Container = styled.div`
  height: 50vh;
`

const Btn = styled.button`
  display: none;
  padding: 0.25rem 3.5rem;
  width: 100%;
  text-align: center;
  background-color: #131313;
  border: none;
  color: #fff;
  z-index: 1;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;

    ${Btn} {
      display: block;
    }
  }
`

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;

`

const shopProducts = (props) => {

  const { id, image, name, price } = props.data
  const { viewProductDetails } = useContext(ShopContext)

  const handleViewDetails = () => {
    viewProductDetails(id);
  };

  return <>
    <Container className="col-3" key={id}>
      <Card>
        <Img src={image} alt="Product" />
        <Link to={'/details'}>
          <Btn onClick={handleViewDetails}>
            View Details
          </Btn>
        </Link>
        <div className="d-flex flex-column mt-3">
          <span className='fw-bold'>{name}</span>
          <span>${price}</span>
        </div>
      </Card>
    </Container>
  </>
}

export default shopProducts
