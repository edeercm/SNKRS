import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';

const ShopSecThree = () => {
  return <>
    <section>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center mt-5 mb-5">
              <a href="#"><Pagination count={10} shape="rounded" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default ShopSecThree