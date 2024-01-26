import React from 'react'
import ShopByIcon from '../../components/HomeComponents/ShopByIcon/shopByIcon'
import ShopByIcon2 from '../../components/HomeComponents/ShopByIcon/shopByIcon2'

const HomeSecThree = () => {
  return <>
    <section>
      <div className="container-xxl mt-5">
        <div className="row">
          <div className='col-12'>
            <h4 className='text-uppercase fw-bold mt-5'>Shop by icon</h4>
          </div>
          <div className="col-12">
            <ShopByIcon />
          </div>
          <div className="col-12">
            <ShopByIcon2 />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default HomeSecThree