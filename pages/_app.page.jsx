import '../styles/globals.scss'
import { store, persistor } from '../store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp
