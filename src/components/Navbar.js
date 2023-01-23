// import Logo from "logo.svg"
// import Logo from '../../images/logo.svg'
import Logo from '../images/logo.svg'
import Avatar from '../images/image-avatar.png'
import Product1Thumbnail from '../images/image-product-1-thumbnail.jpg'
import Delete from '../images/icon-delete.svg'
import { AppContext } from '../AppContext'
import React, { useEffect, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const { quantity, setQuantity, price, setPrice, addCart } =
    useContext(AppContext)
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    let totalAmount = 125.0 * quantity
    setPrice(totalAmount.toFixed(2))
  }, [setPrice, quantity])

  // const showCart = () => {
  //   const filledCart = document.getElementById('filled-cart')
  //   const emptyCart = document.getElementById('empty-cart')
  //   if (quantity === 0) emptyCart.classList.toggle('show')
  //   else filledCart.classList.toggle('show')
  // }
  const handleShowCart = () => {
    setShowCart((cart) => !cart)
  }

  const removeCartItems = () => {
    setQuantity(0)
  }

  const checkOut = () => {
    alert(`You ordered ${quantity} sneakers`)
    setShowCart(false)
    setQuantity(0)
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-left'>
          <FontAwesomeIcon className='bar-icon' icon={faBars} />
          <img className='logo' src={Logo} alt='brand-logo' />
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='navbar-right'>
          <span className='cart-icon' onClick={handleShowCart}>
            <svg
              className='nav-svg-icon'
              width='22'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                fill=''
                fillRule='nonzero'
              />
            </svg>
            {quantity > 0 && addCart ? (
              <span id='badge' className='cart-badge'>
                {quantity}
              </span>
            ) : null}
          </span>

          <img className='avatar' src={Avatar} alt='Avatar' />
          <div style={showCart ? { display: 'block' } : { display: 'none' }}>
            {quantity > 0 ? (
              <div id='filled-cart' className='cart-items'>
                <p className='title bold'>Cart</p>
                <hr style={{ opacity: 0.3 }} />
                <div className='item-details cart-content'>
                  <img
                    className='thumbnail'
                    src={Product1Thumbnail}
                    alt='Product 1 Thumbnail'
                  />
                  <div className='details-text'>
                    <div>Fall Limited Edition Sneakers</div>
                    <div>
                      $125.00 x {quantity}{' '}
                      <span className='bold'>{`$${price}`}</span>
                    </div>
                  </div>
                  <img
                    className='remove-items'
                    src={Delete}
                    alt='Delete Button'
                    onClick={() => removeCartItems()}
                  />
                </div>
                <button onClick={() => checkOut()} className='checkout'>
                  Checkout
                </button>
              </div>
            ) : (
              <div id='empty-cart' className='cart-items'>
                <p className='title bold'>Cart</p>
                <hr style={{ opacity: 0.3 }} />
                <p className='empty-content'>Your cart is empty.</p>
              </div>
            )}
          </div>

          {/**/}
        </div>

        <hr className='navbar-hr' />
      </nav>
    </>
  )
}
export default Navbar
