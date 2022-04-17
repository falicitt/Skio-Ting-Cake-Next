import styles from '../styles/Checkout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Order() {
  //function to clear shopping cart
  const router = useRouter()
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    //
    if (cart.length != 0) {
      router.reload()
    }
  })

  return (
    <div className={styles.order}>
      <p className={styles.steps}>
        Cart > Detail > <b>Order</b>
      </p>
      <div className={styles.check}>
        <Image
          src="/circle-check-regular.svg"
          height={90}
          width={90}
          alt="circle-check"
        />
      </div>
      <h2>Order Confirmed</h2>
      <p className={styles.text}>
        Thank you for supporting local business with Skio Ting Cake. Now that
        your order is confirmed it will be ready for collection on the scheduled
        pick up date. Please check your inbox in the future for order updates.
      </p>
      <Link href="/" passHref>
        <button className={styles.button__Back}>Back to shopping</button>
      </Link>
      <p>
        <a className={styles.print}>Print receipt</a>
      </p>
    </div>
  )
}
