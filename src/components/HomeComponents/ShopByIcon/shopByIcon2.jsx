import React from 'react'
import { ShopByIcon2 } from '../../products'
import { Img, Name, Brand } from './SBIGloblalStyles'

const shopByIcon2 = () => {
  return <>
    <div className="row">
      {ShopByIcon2.map(product => (
        <div className="col-4 col-sm mt-5" key={product.id}>
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

export default shopByIcon2