import React from 'react'
import { BestSellers } from '../../products'
import './BestSellers.css'

const bestSellers = () => {
  return <>
    <div className="container-xxl">
      <div className="row bestsellers-card mt-2">
        {BestSellers.map(product => (
          <div className="col" key={product.id}>
            <img src={product.image} alt="" className='bestsellers-img ' />
            <div className="bestsellers-card-details d-flex flex-column mt-2">
              <span className='product-name bestsellers-name'>{product.name}</span>
              <span className='product-price bestsellers-price'>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default bestSellers