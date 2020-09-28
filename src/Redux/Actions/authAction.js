const authUser = (cred) => {
    console.log(cred);
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
         const firebase = getFirebase()
         const firestore = getFirestore()
         firebase.auth().createUserWithEmailAndPassword(
             cred.email,
             cred.password
         ).then((resp) => {
             console.log(resp.user.uid);
             return firestore.collection("users").doc(resp.user.uid).set({
                 firstName: cred.firstName,
                 lastName: cred.lastName
             })
         }).then(() => {
             dispatch({type:"USER_CREATED"})
         }).catch(err => {
             dispatch({type: "USER_CREATED_FAILED",err})
         })
    }
}

//signin

const signInUser = (cred) => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch({type: "SIGNIN_SUCCESS"})
        }).catch(err => {
            dispatch({type: "SIGNIN_FAILED",err})
        })
    }
}

//logout

const signOut  = () => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase()
        firebase.auth().signOut().then(() =>{ dispatch({type: "SIGNOUT_SUCCESS"})})
                .catch(err => { dispatch({type: "SIGNOUT_FAILED"})})
    }
}

export {authUser,signInUser,signOut}