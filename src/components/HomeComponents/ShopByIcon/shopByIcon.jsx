import React from 'react'
import { ShopByIcon } from '../../products'
import { Img, Name, Brand } from './SBIGloblalStyles'

const shopByIcon = () => {
  return <>
    <div className="row">
      {ShopByIcon.map(product => (
        <div className="col-6 col-sm mt-5" key={product.id}>
          <Img src={product.image} alt="Product" />
          <div className="d-flex flex-column mt-2">
            <Name>{product.name}</Name>
            <Brand>{product.brand}</Brand>
          </div>
        </div>
      ))}
    </div>
  </>
}

export default shopByIcon