import productReducer from "../Reducers/productReducer"
import authReducer from "../Reducers/authReducer"
import {combineReducers} from "redux"
import {firestoreReducer} from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"


const rootReducer = combineReducers({
    product: productReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer