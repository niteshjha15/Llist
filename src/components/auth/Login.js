import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { Redirect } from 'react-router-dom'
import { signInUser } from '../../Redux/Actions/authAction'

function Login() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.firebase.auth.uid)
    const info = useSelector(state=>state.auth.logInFailed)
    const [user,setUser]  = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        setUser({...user,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signInUser(user))
    }
    if(state) return <Redirect to ="/" />
    return (
        <div className = "container">
            <h2 className = "center-align grey-text">Login</h2>
            <div className="row">
                <form className="col s12 l10" onSubmit = {handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6 l10">
                            <input onChange = {handleChange} value = {user.email} name = "email" id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className = "row">
                       <div className="input-field col s6 l10">
                            <input onChange = {handleChange} value = {user.password} name = "password" id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className = "row">
                        <button className = "btn">Login</button>
                    </div>
                    <div className = "row">
                        {info ? (<h5>{info}</h5>):null}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
