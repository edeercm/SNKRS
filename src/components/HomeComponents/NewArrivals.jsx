import React from 'react'
import styled from 'styled-components'
import { NewArrivals } from '../ProductsImages/NewArrivalsImgs'

const Img = styled.img`
  width: 100%;
  transition: .3s ease-in-out;

  &:hover {
    transform: scale(1.075);
  }
`

const newArrivals = () => {
  return <>
    <div className="row">
      {NewArrivals.map(product => (
        <div className="col-6 col-md-3 col-lg-3 col-xl-3" key={product.id}>
          <Img src={product.image} alt="Product" />
          <div className="d-flex flex-column text-center mt-2">
            <span>{product.name}</span>
            <span>${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  </>
}

export default newArrivals