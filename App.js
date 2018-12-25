import React from 'react';
import AppContainer from './routes/routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component {

  render() {
    const {store, persistor}  = configureStore();
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
    );
  }
}


