import Link from 'next/link'
// Importing hooks from react-redux
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice'
import styles from '../styles/CartPage.module.css'

import { fromImageToUrl } from '../utils/urls'

const CartPage = () => {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart)

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + item.quantity * item.data.attributes.price,
      0
    )
  }

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1 className={styles.empty}>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.cart__Title}>
            <h1>Your Cart Items</h1>
            <Link href="/products">
              <a>back to shopping</a>
            </Link>
          </div>
          <div className={styles.header}>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Remove</div>
          </div>
          <div>
            {cart.map((item) => (
              <div
                key={item.data.attributes.name}
                className={styles.item__Info}
              >
                <div className={styles.image}>
                  <img
                    src={fromImageToUrl(
                      item.data.attributes.image.data.attributes
                    )}
                  />
                  {item.data.attributes.name}
                </div>

                <div>$ {item.data.attributes.price}</div>
                <div className={styles.buttons}>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>

                  <p>{item.quantity}</p>

                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                </div>

                <div>$ {item.quantity * item.data.attributes.price}</div>
                <div>
                  <button
                    className={styles.button}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.checkout__Session}>
            <p>Total Price: $ {getTotalPrice()}</p>
            <Link href="/shipping" passHref>
              <button className={styles.checkout__Button}>Check-Out</button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
