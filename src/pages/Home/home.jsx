import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'

import BestSellers from '../../components/HomeComponents/BestSellers/bestSellers'
import NewArrivals from '../../components/HomeComponents/NewArrivals/newArrivals'
import ShopByIcon from '../../components/HomeComponents/ShopByIcon/shopByIcon'
import ShopByIcon2 from '../../components/HomeComponents/ShopByIcon/shopByIcon2'

import apparel1 from '../../assets/images/apparel/apparel1.jpg'
import apparel2 from '../../assets/images/apparel/apparel2.jpg'

const home = () => {
  return <>

    <section className='banner'>
      <div className="container-fluid">
        <div className="row">
          <div className="banner"></div>
        </div>
      </div>
    </section>

    <section className='best-sellers mt-4'>
      <div className="container-xxl">
        <div className="row">
          <div className='d-flex justify-content-between mt-5'>
            <h4 className='best-sellers text-uppercase'>Best Sellers</h4>
            <Link to={'/shop'}><span className='text-uppercase shop-now-label'>Shop All Now</span></Link>
          </div>
          <BestSellers />
        </div>
      </div>
    </section>

    {/* <section className='apparel mt-5'>
      <div className="container-xxl">
        <div className="row">
          <div className='mt-5'>
            <h4 className='apparel text-center'>APPAREL</h4>
          </div>
          <div className="d-flex gap-4 mt-4">
            <div>
              <img src={apparel1} alt="" className='apparel1-img' />
            </div>
            <div>
              <img src={apparel2} alt="" className='apparel2-img' />
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className='shopbyicon mt-5'>
      <div className="container-xxl">
        <div className="row">
          <div className='mt-5'>
            <h4 className='shopbyicon'>SHOP BY ICON</h4>
          </div>
          <ShopByIcon />
          <ShopByIcon2 />
        </div>
      </div>
    </section>

    <section className='newarrivals mt-5'>
      <div className="container-xxl">
        <div className="row">
          <div className='d-flex align-items-center justify-content-between mt-5'>
            <h4 className='newarrivals'>NEW ARRIVALS</h4>
            <Link to={'/shop'}><span className='text-uppercase shop-now-label'>Shop All Now</span></Link>
          </div>
          <NewArrivals />
        </div>
      </div>
    </section>

    {/* <section className='shopbyicon mt-5'>
      <div className="container-xxl">
        <div className="row">
          <div className='mt-5'>
            <h4 className='shopbyicon'>SHOP BY ICON</h4>
          </div>
          <ShopByIcon />
          <ShopByIcon2 />
        </div>
      </div>
    </section> */}

    <section className='store mt-5'>
      <div className="container-fluid">
        <div className="row">
          <div className="store-details mt-5 d-flex flex-column align-items-center justify-content-center">
            <div className='text-center'>
              <h1 className='store-name'>SNKRS LABS</h1>
              <span className='store-ubi'>Bugis Junction, Singapore</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
}

export default home