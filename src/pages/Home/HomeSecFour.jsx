import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NewArrivals from '../../components/HomeComponents/NewArrivals'

const Label = styled.span`
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-position: under;
`

const HomeSecFour = () => {
  return <>
    <section>
      <div className="container-xxl mt-5">
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
  </>
}

export default HomeSecFour