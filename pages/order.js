import styles from '../styles/Checkout.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Shipping() {
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
