import React from 'react'
import { SBITwo } from '../../ProductsImages/ShopByIconImgs'
import { Img, Name, Brand } from './SBIGloblalStyles'

const shopByIcon2 = () => {
  return <>
    <div className="row">
      {SBITwo.map(product => (
        <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-sm mt-5" key={product.id}>
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