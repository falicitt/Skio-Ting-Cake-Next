import { useSession, getSession } from 'next-auth/react'
import Product_checkout from '../components/Product_checkout'
import styles from '../styles/Checkout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Shipping() {
  const { data: session } = useSession()
  const router = useRouter()

  const submitOrder = (e) => {
    router.push('/order')
  }

  if (typeof window === 'undefined') return null

  if (session) {
    return (
      <div className={styles.shipping__Page}>
        <Product_checkout />
        <div className={styles.shipping}>
          <p className={styles.steps}>
            Cart > <b>Detail</b> > Order
          </p>

          <form
            className={styles.shipping__Form}
            onSubmit={submitOrder}
            action={'/order'}
          >
            <div>
              <label className={styles.contact}>Contact</label>
              <input
                className={styles.input}
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div className={styles.date}>
              <label>Pick Up Date</label>
              <input className={styles.input} type="date" placeholder="Date" />
            </div>
            <div>
              <label>Pick Up Time</label>
              <input className={styles.input} type="time" placeholder="time" />
            </div>
          </form>
          <h3>Shipping Method</h3>
          <div className={styles.method}>
            <div>
              <input type="radio" id="shipping" name="shipping" />
              <label>Pick up in store</label>
            </div>
            <div>free</div>
          </div>
          <h3>Payment Method</h3>
          <div className={styles.method}>
            <div>
              <input type="radio" id="payment" name="payment" />
              <label>Pay in store</label>
            </div>
            <div>Cash</div>
          </div>

          <button className={styles.pay__Button} onClick={submitOrder}>
            Place Order
          </button>

          <p>
            <Link href="/cart">
              <a>Back to Cart</a>
            </Link>
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.signin}>
      <p>Please sign in to make purchase.</p>
      <Link href="/signin" passHref>
        <a>Go to sign in page</a>
      </Link>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}
