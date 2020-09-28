import React from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import {signOut} from "../../Redux/Actions/authAction"

function SignInLinks() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    let firstName = state.firebase.profile.firstName
    let lastName = state.firebase.profile.lastName
    return (
        <ul className = "right">
            <li><NavLink onClick = {() => dispatch(signOut())} to = "/">Logout</NavLink></li>
            <li><NavLink to = "/addproduct">Add Product</NavLink></li>
            <li><NavLink to ="/" className = "btn floating-btn">{firstName} {lastName}</NavLink></li>
        </ul>
    )
}

export default SignInLinks
