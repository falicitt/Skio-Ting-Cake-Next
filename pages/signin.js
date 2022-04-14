import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from '../styles/Checkout.module.css'

export default function Login() {
  const { data: session, status } = useSession()
  console.log(session)
  const loading = status === 'loading'

  if (session) {
    return (
      <div className={styles.profile}>
        <Head>
          <title>signin</title>
          <meta
            name="description"
            content="Sign in here to make your purchase, view your orders and sign out."
          />
        </Head>

        <div className={styles.profile}>
          <p>Hello, {session.user.name}!</p>
          <p>Welcome to Skio Ting Cake.</p>
          <p>You are signed with Gmail: {session.user.email}</p>
          <button className={styles.button}>
            <Link href="/products">Go shopping</Link>
          </button>
          <button onClick={() => signOut()} className={styles.button}>
            <Link href="/">sign out</Link>
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.profile}>
      Please sign in with your google account <br />
      <button onClick={() => signIn()} className={styles.button}>
        Sign in with Google
      </button>
    </div>
  )
}
