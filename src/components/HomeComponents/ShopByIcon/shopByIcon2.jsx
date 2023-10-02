import React from 'react'
import { ShopByIcon2 } from '../../products'
import './ShopByIcon.css'

const shopByIcon2 = () => {
  return <>
    <div className="container-xxl">
      <div className="row">
        {ShopByIcon2.map(product => (
          <div className="col-12 col-sm" key={product.id}>
            <div className="sbi2-card border-0 mt-5">
              <img src={product.image} alt="" className='shopbyicon-img' />
              <div className="sbi2-card-details d-flex flex-column mt-2">
                <span className='sbi-name'>{product.name}</span>
                <span className='sbi-brand'>{product.brand}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default shopByIcon2