import React, { useState } from 'react'
import styled from 'styled-components'
import ShopItems from '../../components/ShopComponents/shopItems'
import SelectSmall from '../../components/ShopComponents/FilterProducts/filterProducts'
import Pagination from '@mui/material/Pagination';
import '../Shop/Shop.css'

const BannerIntro = styled.div`
  background: url(/src/assets/images/banner/shopbanner.jpg);
  min-height: 25vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
`

const shop = () => {

  const [sortBy, setSortBy] = React.useState(''); // Cambiar useState

  const handleChange = (value) => {
    setSortBy(value);
  };

  return <>
    <section>
      <BannerIntro >
        <Label>運動鞋</Label>
      </BannerIntro>
    </section>
    <section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between mt-5 mb-4">
              <span className='fs-3 fw-bold'>Sneakers</span>
              <SelectSmall onChange={handleChange} />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container-xxl">
        <ShopItems sortBy={sortBy} />
      </div>
    </section>
    <section>
      <div className="container-xxl">
        <div className="d-flex justify-content-center mt-5 mb-5">
          <a href="#"><Pagination count={10} shape="rounded" /></a>
        </div>
      </div>
    </section>
  </>
}

export default shop