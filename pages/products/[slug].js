import Head from 'next/head'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart.slice'

import { fromImageToUrl, API_URL } from '../../utils/urls'
import styles from '../../styles/Product.module.css'

export async function getStaticPaths() {
  //Retrieve all the possible paths
  const products_res = await fetch(`${API_URL}/api/products?populate=*`)
  const products = await products_res.json()
  console.log(products)

  //return them to NextJS context
  return {
    paths: products.data.map((product) => ({
      params: { slug: String(product.attributes.slug) },
    })),
    fallback: false, //Tells to nextjs to show a 404 if the param is not matched
  }
}

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/api/products/${slug}?populate=*`)
  const found = await product_res.json()
  console.log(found)

  return {
    props: {
      product: found,
    },
  }
}

export default function Product({ product }) {
  const dispatch = useDispatch()

  return (
    <div>
      <Head>
        {product.data.attributes.meta_title && (
          <title>{product.data.attributes.meta_title}</title>
        )}
        {product.data.attributes.meta_description && (
          <meta
            name="description"
            content={product.data.attributes.meta_description}
          />
        )}
      </Head>

      <div className={styles.product}>
        <div className={styles.product__Detail}>
          <div className={styles.product__Image}>
            <img
              src={fromImageToUrl(
                product.data.attributes.image.data.attributes
              )}
              alt="product image"
            />
          </div>

          <div className={styles.product__Description}>
            <h4>{product.data.attributes.name}</h4>
            <p className={styles.product__Text}>
              {product.data.attributes.description}
            </p>
            <div className={styles.product__Flex}>
              <p>size: {product.data.attributes.size} inches</p>
              <p>price: ${product.data.attributes.price}</p>
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className={styles.addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
