import React, { useContext, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ShopContext } from '../shopcontext';
import { Products } from '../products';
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { BsTruck, BsArrowCounterclockwise } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import OffcanvasItems from '../CartComponents/OffcanvasItems/offcanvasitems';
import './ProductsDetails.css'

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const ProductDetails = (props) => {

  const { data } = props;
  const { additionalImages, id, price, image } = data || {};
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id] || 0;
  const productInProducts = Products.find((product) => product.id === id);

  const productsInRange = Products.filter((product) => product.id >= 13 && product.id <= 36);
  const shuffledProductsInRange = shuffleArray(productsInRange);

  return <>
    <div className="row d-flex align-items-center ">
      <div className="col-lg-8 col-sm-12">
        {additionalImages && additionalImages.length > 0 && (
          <Carousel showThumbs={false} showStatus={false}>
            {additionalImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt="" className="img-fluid" />
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <div className="col-lg-4 col-sm-12 d-flex flex-column">
        {productInProducts && (
          <div className='d-flex flex-column'>
            <h2 className='fw-bold mt-4'>{productInProducts.name}</h2>
            <span className='fs-5'>${productInProducts.price}</span>
            <hr></hr>
            <Link to={'/cart'}
              onClick={() => addToCart(id)}
              className=' addtocart-button mt-3'
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Add To Cart
              {cartItemCount > 0 && ``}
            </Link>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title fw-bold" id="offcanvasRightLabel">Shopping Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <hr />
              <div className="offcanvas-body">
                <div className='text-center'>
                  <span>¡Free shipping on all orders!</span>
                </div>
                <div className="">
                  {[...Products].map((product) => {
                    if (cartItems[product.id] !== 0) {
                      return (
                        <OffcanvasItems
                          key={product.id}
                          data={product}
                        />
                      )
                    }
                  })}
                </div>
              </div>
              <div className='btns-box d-flex flex-column align-items-center justify-content-center '>
                <Link to={'/cart'} className='offcanvas-btn fw-bold mb-2'>Shopping Cart</Link>
                <Link to={'/shop'} className='continue-text '>Or continue shopping</Link>
              </div>
            </div>
            <div className='accordion-box mb-4'>
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <MdOutlineVerifiedUser className='fs-4' />AUTHENTICITY GUARANTEED
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Authenticity is the foundation of our business, and every item we sell is inspected by our expert team. Our authenticators are the most experienced and highly trained in the business. In addition, we source our products only from trusted suppliers.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <BsTruck className='fs-4 ml-3' />IN STOCK & READY TO SHIP
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">We hold and authenticate inventory on site so you don’t have to wait to receive product from a 3rd party seller. Processing and order verification typically occur 1-3 business days prior to shipping.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <BsArrowCounterclockwise className='fs-4 ml-3' />RETURNS ACCEPTED
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">We offer free global returns for all eligible and full-priced items. Final sale items will be noted on the product page. Please <Link className='fw-bold text-black'>see return policy</Link> for further details!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className='alsolike mt-5'>
      <span className='text-capitalize fw-bold fs-3'>You may also like</span>
      <div className="row alsolike-content">
        {shuffledProductsInRange.slice(0, 5).map(product => (
          <div className="col" key={product.id}>
            <div className="alsolike-card">
              <img src={product.image} alt="" className='alsolike-img' />
              <div className="text-center mt-1 mb-5">
                <span className='alsolike-product-name'>{product.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default ProductDetails
