import React, { useContext } from 'react'
import { ShopContext } from '../../shopcontext'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import '../OffcanvasItems/OffcanvasItems.css'

const OffcanvasItems = (props) => {

  const { id, image, name, price, } = props.data

  const { addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext)

  return <>
    <section className="cart-items">
      <div key={id}>
        <div className='d-flex text-center align-items-center justify-content-around'>
          <img src={image} alt="" className='img-fluid offcanvas-img' />
          <div className='name-box mt-4'>
            <span className='offcanvas-name'>{name}</span>
          </div>
        </div>
        <div className='d-flex flex-row align-items-center justify-content-between mt-1 mb-4 mx-3'>
          <div>
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
        <hr />
      </div>
    </section>
  </>
}

export default OffcanvasItems