import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer  } from 'redux-persist';
import reducers from '../reducers/reducers';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
  );

  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store)

  return { store, persistor }
}