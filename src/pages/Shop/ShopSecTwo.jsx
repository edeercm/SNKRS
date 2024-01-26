import React, { useState } from 'react'
import PriceSelForm from '../../components/ShopComponents/PriceSelForm'
import ProductsCards from '../../components/ShopComponents/ProductsCards'
import { Products } from '../../components/products';

const ShopSecTwo = () => {

  const [sortedProducts, setSortedProducts] = useState([...Products]);

  const handleChange = (value) => {
    let newSortedProducts;

    if (value === 20) {
      newSortedProducts = [...Products].sort((a, b) => b.price - a.price);
    } else if (value === 30) {
      newSortedProducts = [...Products].sort((a, b) => a.price - b.price);
    } else if (value === 10) {
      newSortedProducts = [...Products].sort(() => Math.random() - 0.5);
    } else {
      newSortedProducts = [...Products];
    }

    setSortedProducts(newSortedProducts);
  };

  return <>
    <section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between mt-5 mb-4">
              <span className='fs-3 fw-bold'>Sneakers</span>
              <PriceSelForm onChange={handleChange} />
            </div>
            <hr />
          </div>
          <div className="col-12">
            <div className="row">
              {sortedProducts.map((product) => (
                <ProductsCards key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default ShopSecTwo