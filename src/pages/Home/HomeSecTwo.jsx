import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BestSellers from '../../components/HomeComponents/BestSellers'

const Label = styled.span`
  text-transform: uppercase;
  font-size: 0.825rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-position: under;
`

const HomeSecTwo = () => {
  return <>
    <section>
      <div className="container-xxl mt-4">
        <div className="row">
          <div className="col-12">
            <div className='d-flex justify-content-between mt-5'>
              <h4 className='text-uppercase fw-bold'>Best sellers</h4>
              <Link to={'/shop'}>
                <Label>Shop All Now</Label>
              </Link>
            </div>
          </div>
          <div className="col-12">
            <BestSellers />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default HomeSecTwo