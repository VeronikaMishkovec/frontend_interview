import '../styles/global.css'
import { store, wrapper } from '../store/store'
import { Provider } from 'react-redux'

// eslint-disable-next-line react/prop-types
 function MyApp({ Component, pageProps }) {
    return(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
}

export default wrapper.withRedux(MyApp);
