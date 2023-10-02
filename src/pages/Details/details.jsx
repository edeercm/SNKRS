import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../components/shopcontext'
import { Products } from '../../components/products'
import ProductDetails from '../../components/DetailsComponents/productDetails'

const details = () => {

  const { selectedProduct } = useContext(ShopContext);
  const selectedProductInfo = Products.find((product) => product.id === selectedProduct);

  return <>
    <section className='product-details'>
      <div className="container-xxl">
        {selectedProductInfo && <ProductDetails data={selectedProductInfo} />}
      </div>
    </section>
  </>
}

export default details