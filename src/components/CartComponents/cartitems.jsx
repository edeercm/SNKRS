import React, { useContext } from 'react'
import { ShopContext } from '../shopcontext'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import '../CartComponents/CartItems.css'

const CartItems = (props) => {

  const { id, image, name, price, } = props.data

  const {  addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext)

  return <>
    <section className="cart-items">
      <hr />
      <div key={id}>
        <div className='d-flex text-center align-items-center justify-content-around'>
          <img src={image} alt="" className='img-fluid cart-img' />
          <div className='product-detail'>
            <span className='text-black product-mobile-name'>{name}</span>
          </div>
          <div className=''>
            <button
              className='minus-btn'
              onClick={() => {
                removeToCart(id)
              }}
            >
              <AiOutlineMinus />
            </button>
            <input
              className='amount-input'
              type="text"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              className='plus-btn'
              onClick={() => {
                addToCart(id)
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <p className='text-black'>${price}</p>
        </div>
      </div>
    </section>
  </>
}

export default CartItems