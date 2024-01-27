import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../shopcontext'
import styled from 'styled-components'

const Container = styled.div`
  height: 50vh;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: 30vh;
  }

  @media (max-width: 575.97px) {
    height: 40vh;
  }
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

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    display: block;
    padding: 0.25rem 1.5rem;
  }

  @media (max-width: 575.97px) {
    display: block;
    padding: 0.25rem 1.5rem;
  }
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

const ProductsCards = (props) => {

  const { id, image, name, price } = props.data
  const { viewProductDetails } = useContext(ShopContext)

  const handleViewDetails = () => {
    viewProductDetails(id);
  };

  return <>
    <Container className="col-6 col-md-3 col-lg-3 col-xl-3" key={id}>
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

export default ProductsCards
