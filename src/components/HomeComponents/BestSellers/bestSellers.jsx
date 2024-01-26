import React from 'react'
import styled from 'styled-components'
import { BestSellers } from '../../products'

const Img = styled.img`
  width: 100%;
  transition: .3s ease-in-out;

  &:hover {
    transform: scale(1.075);
  }
`

const bestSellers = () => {
  return <>
    <div className="row">
      {BestSellers.map(product => (
        <div className="col-3" key={product.id}>
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

export default bestSellers