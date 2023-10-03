import React, { useContext } from 'react'
import { ShopContext } from '../../components/shopcontext'
import { Products } from '../../components/products'
import { Link } from 'react-router-dom'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { BsTruck, BsArrowCounterclockwise } from 'react-icons/bs'
import CartItems from '../../components/CartComponents/cartitems'
import '../Cart/Cart.css'

const Cart = () => {

  const { getTotalCartAmount, addToCart, cartItems, clearCart, getTotalCartProducts } = useContext(ShopContext)

  const TotalAmount = getTotalCartAmount();

  return <>
    {TotalAmount > 0 ?
      <section className="container-xxl mt-5 mb-5">
        <div className='mt-4 text-center'>
          <span className='fw-bold fs-3'>Shopping Cart</span>
        </div>
        <div className="row">
          <div className="col-lg-8 ">
            {[...Products].map((product) => {
              if (cartItems[product.id] !== 0) {
                return (
                  <CartItems
                    key={product.id}
                    data={product}
                  />
                )
              }
            })}
          </div>
          <div className="col-lg-4  order-summary">
            <div className="total-card ">
              <h4 className='fs-5 text-uppercase'>Order Summary</h4>
              <div className='mt-3 d-flex justify-content-between'>
                <span className=''>Estimated Shipping:</span>
                <span className=''>Free Shipping</span>
              </div>
              <div className=' d-flex justify-content-between'>
                <span className='text-uppercase fw-bold'>Total:</span>
                {/* <span>{totalProducts}</span> */}
                <span className='fw-bold'>${TotalAmount}</span>
              </div>
              <div className='text-end'>
                <span className=''>(Duties & taxes included)</span>
              </div>
            </div>
            <button
              className='checkout-btn mt-4 mb-2'
              data-bs-toggle="modal"
              data-bs-target="#checkoutModal"
            >
              CHECKOUT
            </button>
            <div className="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title fs-5" id="exampleModalLabel">Upps :|</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <span>It looks like our service is taking a short breather to recharge. We'll be back in the blink of an eye. Thanks for your patience.</span>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="modal-btn" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex gap-2'>
              <Link to={'/shop'} className='continue-btn mb-5'>Continue Shopping</Link>
              <Link
                onClick={() => clearCart(id)}
                className='clear-btn mb-5'>
                Clear Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
      :
      <section className='cart-empty'>
        <div className="container-fluid shopping-cart-empty">
          <div className="text-center">
            <h2 className='fw-bold'>Your shopping cart is empty</h2>
            <div className='mt-4'>
              <span className='fs-5'>Explore our popular categories:</span>
              <div className='d-flex flex-column mt-3'>
                <Link to={'/shop'} className='snkrs-brands'>Nike</Link>
                <Link to={'/shop'} className='snkrs-brands'>Puma</Link>
                <Link to={'/shop'} className='snkrs-brands'>Adidas</Link>
                <Link to={'/shop'} className='snkrs-brands'>New Balance</Link>
              </div>
            </div>
            <Link to={'/shop'}><button className='shopnow-btn fw-bold mt-4 mb-4'>SHOP NOW</button></Link>
          </div>
          <div className='row label-info d-flex align-items-center justify-content-around'>
            <div className='col-4 label-content d-flex flex-column'>
              <span className="fw-bold mb-2"><MdOutlineVerifiedUser className='fs-3' />   AUTHENTICITY</span>
              <span>Authenticity is the foundation of our business, and every item we sell is inspected by our expert team.</span>
            </div>
            <div className='col-4 label-content d-flex flex-column'>
              <span className="fw-bold mb-2"><BsTruck className='fs-3' />   IN STOCK & READY TO SHIP</span>
              <span>We hold and authenticate inventory on site. Processing and order verification typically occur 1-3 business days prior to shipping.</span>
            </div>
            <div className='col-4 label-content d-flex flex-column'>
              <span className="fw-bold mb-2"><BsArrowCounterclockwise className='fs-3' />   RETURNS ACCEPTED</span>
              <span>We offer free global returns for all eligible and full-priced items. Please see <Link className='policy'>return policy</Link> for further details!</span>
            </div>
          </div>
        </div>

      </section>
    }
  </>
}

export default Cart