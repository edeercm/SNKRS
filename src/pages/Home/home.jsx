import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BestSellers from '../../components/HomeComponents/BestSellers/bestSellers'
import NewArrivals from '../../components/HomeComponents/NewArrivals/newArrivals'
import ShopByIcon from '../../components/HomeComponents/ShopByIcon/shopByIcon'
import ShopByIcon2 from '../../components/HomeComponents/ShopByIcon/shopByIcon2'


const BannerIntro = styled.div`
  background: url(/src/assets/images/banner/homebanner.jpg);
  min-height: 70vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Label = styled.span`
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-position: under;
`

const BannerOutro = styled.div`
  min-height: 75vh;
  background: url(/src/assets/images/store/store1.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled.h1`
  line-height: 0.75;
  color: white;
  font-size: 6rem;
  font-weight: bold;
`

const LabelTwo = styled.span`
  color: white;
  font-size: 1.875rem;
`

const Home = () => {
  return <>
    <section className='secone-intro'>
      <BannerIntro></BannerIntro>
    </section>
    <section className='sectwo-bestsellers mt-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12 col-xl-12">
            <div className='d-flex justify-content-between mt-5'>
              <h4 className='text-uppercase fw-bold'>Best sellers</h4>
              <Link to={'/shop'}>
                <Label>Shop All Now</Label>
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-xl-12">
            <BestSellers />
          </div>
        </div>
      </div>
    </section>
    <section className='secthree-shopbyicon mt-5'>
      <div className="container-xxl">
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
    <section className='secfour-newarrivals mt-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between mt-5'>
              <h4 className='text-uppercase fw-bold'>NEW ARRIVALS</h4>
              <Link to={'/shop'}>
                <Label>Shop All Now</Label>
              </Link>
            </div>
          </div>
          <div className="col-12">
            <NewArrivals />
          </div>
        </div>
      </div>
    </section>
    <section className='secfive-outro mt-5'>
      <BannerOutro>
        <div className='d-flex flex-column text-center'>
          <Name>snkrs</Name>
          <LabelTwo>Bugis Junction, Singapore</LabelTwo>
        </div>
      </BannerOutro>
    </section>
  </>
}

export default Home