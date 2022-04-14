import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Provider } from 'react-redux'; 
import store from '../redux/store'

import { SessionProvider } from 'next-auth/react'


function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <content>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </content>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
