import React, { useState } from 'react'
import '../Shop/Shop.css'
import ShopItems from '../../components/ShopComponents/shopItems'
import SelectSmall from '../../components/ShopComponents/FilterProducts/filterProducts'
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';

const shop = () => {

  const [sortBy, setSortBy] = React.useState(''); // Cambiar useState

  const handleChange = (value) => {
    setSortBy(value);
  };

  return <>
    <section className='banner-shop'>
      <div className="container-fluid">
        <div className="row">
          <div className="banner-shop-details d-flex flex-column align-items-center justify-content-center">
            <h2 className='banner-shop-title text-white'>運動鞋</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="shop-products ">
      <div className="container-xxl">
        <div className="d-flex align-items-center justify-content-between mt-5 mb-4">
          <span className='fs-3 fw-bold'>Sneakers</span>
          <SelectSmall onChange={handleChange} />
        </div>
        <hr />
        <ShopItems sortBy={sortBy} />
      </div>
    </section>
    <div className="section-pagination">
      <div className="d-flex justify-content-center mt-5 mb-5">
        <a href="#"><Pagination count={10} shape="rounded" /></a>
      </div>
    </div>
  </>
}

export default shop