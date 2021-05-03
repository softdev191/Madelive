import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './App';

import rootReducer from './store/reducers/rootReducer'

import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'

import firebase from 'firebase/app'
import config from './config/firebase.js'

const store = createStore( 
  rootReducer, 
  compose( 
    applyMiddleware(
      thunk.withExtraArgument({ 
        getFirestore, 
        getFirebase 
      })
    ), reduxFirestore(firebase, config)));

const rrfProps = { firebase, config: config, dispatch: store.dispatch, createFirestoreInstance };

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();