import React from 'react'
import { SBIOne } from '../../ProductsImages/ShopByIconImgs'
import { Img, Name, Brand } from './SBIGloblalStyles'

const shopByIcon = () => {
  return <>
    <div className="row">
      {SBIOne.map(product => (
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-5" key={product.id}>
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