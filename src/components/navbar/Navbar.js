import React from 'react'
import { Link } from 'react-router-dom'
import {NavLink} from "react-router-dom"
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import {useSelector} from "react-redux"

function Navbar() {
    const state = useSelector(state => state.firebase.auth.uid)
    let links = state ? <SignInLinks /> :  <SignOutLinks />
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <div className = "container">
                        <Link className = "brand-logo" to ="/">Product</Link>
                        {links}
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
