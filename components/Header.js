import { useContext } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Script from 'next/script'

import styles from '../styles/HeaderFooter.module.css'

import { useSession } from 'next-auth/react'

export default function Header() {
  //for user authentication
  const { data: session } = useSession()

  //for shopping cart function
  const cart = useSelector((state) => state.cart)

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
  }

  //for toggle menu

  const [isActive, setActive] = useState('false')

  const ToggleClass = () => {
    setActive(!isActive)
  }

  return (
    <div className={styles.Nav}>
      <ul className={styles.Nav__Desktop}>
        <li className={styles.Title}>
          <Link href="/">
            <a>SKIO TING CAKE</a>
          </Link>
        </li>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/products">CAKES</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>

      <Script
        src="https://kit.fontawesome.com/64beb3d505.js"
        crossOrigin="anonymous"
      />

      <div className={styles.Title__Mobile}>
        <Link href="/">
          <a>SKIO TING CAKE</a>
        </Link>
      </div>

      <a className={styles.Nav__Icon} onClick={ToggleClass}>
        <i className="fas fa-align-justify"></i>
      </a>

      <ul className={isActive ? `${styles.Nav__Close}` : `${styles.Nav__Open}`}>
        <li>
          <Link href="/">H O M E</Link>
        </li>
        <li>
          <Link href="/products">C A K E S</Link>
        </li>
        <li>
          <Link href="/about">A B O U T</Link>
        </li>
        <li>
          <Link href="/contact">C O N T A C T</Link>
        </li>
      </ul>

      <div className={styles.cart}>
        <Link href="/cart">
          <a>Cart ({getItemsCount()})</a>
        </Link>
      </div>
      <div className={styles.auth}>
        {session ? (
          <Link href="/signin">
            <a>Profile</a>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <a>Sign in</a>
          </Link>
        )}
      </div>
    </div>
  )
}

/*<img src="/user.png" alt={user.email} />*/
