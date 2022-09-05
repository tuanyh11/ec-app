import store from './store';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

const  persistor = persistStore(store)

const ProviderStore = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}  
      </PersistGate>
    </Provider>
  )
};

export default ProviderStore;
