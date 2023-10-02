import React from 'react'
import { NewArrivals } from '../../products'
import './NewArrivals.css'

const newArrivals = () => {
  return <>
    <div className="container-xxl">
      <div className="row newarrivals-card mt-2">
        {NewArrivals.map(product => (
          <div className="col" key={product.id}>
            <img src={product.image} alt="" className='newarrivals-img' />
            <div className="newarrivals-card-details d-flex flex-column mt-2">
              <span className='product-name newarrivals-name'>{product.name}</span>
              <span className='product-price newarrivals-price'>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default newArrivals