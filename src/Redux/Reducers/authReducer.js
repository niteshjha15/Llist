const initialState = {
    signUpFailed: "",
    logInFailed: ""
}
const authReducer = (state= initialState,action) => {
    switch(action.type){
        case "USER_CREATED" :
            console.log("user created success");
        case "USER_CREATED_FAILED":
            return {...state,signUpFailed:action.err.message,logInFailed:""}
        case "SIGNIN_SUCCESS"  :
            console.log("signin succes");
        case "SIGNIN_FAILED"  :
            return {...state,signUpFailed:"",logInFailed:action.err.message}
        case "SIGNOUT_SUCCESS"  :
            console.log("signout succes");
        case "SIGNOUT_FAILED"  :
            console.log("signout failed")
        default :
           return state        
    }
}

export default authReducer