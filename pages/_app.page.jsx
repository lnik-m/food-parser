import '../styles/globals.scss'
import { store } from '../store'
import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp
