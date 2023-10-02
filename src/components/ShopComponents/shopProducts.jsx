import React, { useContext, useState } from 'react'
import { ShopContext } from '../shopcontext'
// import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../ShopComponents/ShopProducts.css'

const shopProducts = (props) => {
  const { id, image, name, price } = props.data
  const { viewProductDetails, addToCart, cartItems, setSelectedProductId } = useContext(ShopContext)
  const cartItemCount = cartItems[id]

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleViewDetails = () => {
    viewProductDetails(id);
  };

  return <>
    <div className="col-3 snkrs-card " key={id}>
      <div className={`d-flex flex-column align-items-center text-center ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="" className='sellproducts-img' />
        <Link to={'/details'}
          onClick={handleViewDetails}
          className={`details-button mt-2 ${isHovered ? 'visible' : ''}`}>
          View Details
        </Link>
        <div className="shop-products-card-details d-flex flex-column mt-3">
          <span className='shop-products-name'>{name}</span>
          <span className='shop-products-price mb-2'>${price}</span>
        </div>
      </div>
    </div>
  </>
}

export default shopProducts