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
      products
        }
    
  }
}


export default function Home( {products} ) {
  return (
    <div>
      <Head>
        <title>Skio Ting Cake Shop</title>
        <meta name="description" content="Skio Ting Homemade Fresh Cream Cake & Fondant Cake" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.all__Cakes}>ALL CAKES</h2>
      <ul className={styles.product__Container}>

        {products.data.map(product => (
          <li key={product.attributes.name} className={styles.product}>
            <Link href={`/products/${product.attributes.slug}`}>
            <a>

              <div className={styles.product__ColImg}>
                <img src={fromImageToUrl(product.attributes.image.data.attributes)} />
              </div>

              <div className={styles.product__Col}>
                {product.attributes.name}
              </div>
          
            </a>
            </Link>
          </li>))
        }
      </ul>
    </div>    
  )
}
