import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from "./Redux/Reducers/combineReducer"
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import {getFirebase,isLoaded, createFirebaseInstance ,ReactReduxFirebaseProvider,createFirestoreInstance} from "react-redux-firebase"
import { Provider,useSelector } from 'react-redux';
import firebase from "./Redux/FirebaseConfig"



const store = createStore(rootReducer,compose(
  applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
  reduxFirestore(firebase)
))
const rrfconfig = {
  userProfile: 'users', // where profiles are stored in database
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config:rrfconfig,
  dispatch:store.dispatch,
  createFirebaseInstance,
  createFirestoreInstance
}


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
       </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


