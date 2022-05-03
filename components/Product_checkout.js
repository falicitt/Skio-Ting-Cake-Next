import { fromImageToUrl } from '../utils/urls'
import { useSelector } from 'react-redux'
import styles from '../styles/Checkout.module.css'

function Product_checkout() {
  const cart = useSelector((state) => state.cart)

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + item.quantity * item.data.attributes.price,
      0
    )
  }

  return (
    <div className={styles.product}>
      {cart.map((item) => (
        <div key={item.data.attributes.name} className={styles.product__Info}>
          <div className={styles.image}>
            <img
              src={fromImageToUrl(item.data.attributes.image.data.attributes)}
            />
          </div>
          <div>
            <div>{item.data.attributes.name}</div>
            <div>
              $ {item.data.attributes.price} * {item.quantity}
            </div>
          </div>
        </div>
      ))}

      <div className={styles.subtotal}>
        <div>Subtotal:</div>
        <div>$ {getTotalPrice()}</div>
        <p>Shipping: free</p>
      </div>
      <div>Total: $ {getTotalPrice()}</div>
    </div>
  )
}

export default Product_checkout
