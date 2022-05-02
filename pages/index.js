import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { API_URL, fromImageToUrl } from '../utils/urls'

export async function getStaticProps() {
  //fetch the products
  const product_res = await fetch(`${API_URL}/api/products?populate=*`)
  const products = await product_res.json()
  console.log(products)

  //return the products as props
  return {
    props: {
      products,
    },
  }
}

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Skio Ting Cake Shop</title>
        <meta
          name="title"
          content="Skio Ting Cake: Homemade Fresh Cream Cake."
        />
        <meta
          name="description"
          content="Fresh cream cake made by Skio Ting, a passionate food lover, baker and artist. Our most popular cakes include durian cake, macha cake, strawberry cake, etc."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Hero}>
        <div className={styles.hero__Text}>
          <h1 className={styles.hero__H1}>Skio Ting Cake</h1>
          <p className={styles.hero__P}>let&apos;s celebrate every occasion</p>
          <Link href="/products">
            <a>
              <p className={styles.check}>check it out &gt;</p>
            </a>
          </Link>
        </div>
      </div>

      <h2>Most Popular Cakes</h2>

      <ul className={styles.product__Container}>
        {products.data.map((product) => (
          <li key={product.attributes.name} className={styles.product}>
            <Link href={`/products/${product.attributes.slug}`}>
              <a>
                <div className={styles.product__ColImg}>
                  <img
                    src={fromImageToUrl(
                      product.attributes.image.data.attributes
                    )}
                    alt="product image"
                  />
                </div>

                <div className={styles.product__Col}>
                  {product.attributes.name}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <section className={styles.about}>
        <div className={styles.about__Container}>
          <h3 className={styles.about__Text}>About Skio Ting</h3>
          <p>
            At the intersection of food science and art, lies Skio Ting&apos;s
            unique patisserie. Finding notes of flavour and composing with
            healthy inovative ingredients, this is where Skio Ting enables the
            local community to celebrate every special occastion.
          </p>
          <Link href="/about">
            <a>
              <p className={styles.learn__More}>Learn More &gt;</p>
            </a>
          </Link>
        </div>

        <div className={styles.about__Image}>
          <img
            src="https://ucarecdn.com/002c5655-2c42-49fd-be65-2919d0ab0163/"
            alt="Skio Ting's Photo"
          />
        </div>
      </section>
    </div>
  )
}
