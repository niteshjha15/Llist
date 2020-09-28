import React,{useState,useEffect} from 'react'
import Product from '../product/Product'
import {useSelector} from "react-redux"
import { Redirect } from 'react-router-dom'

function Dashboard() {
    const [search,setSearch] = useState("")
    const [sorted,setSorted] = useState([])
    const state = useSelector(state => state.firebase.auth.uid)
    const info = useSelector(state => state.product)

    useEffect(() => {
        setSorted(info.projects)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSorted(info.projects.filter(item => item.name.toLowerCase() ===search.toLowerCase()))
    }

    if(!state) return <Redirect to = "/login"/>
    return (
        <div className = "container">
            <form onSubmit = {handleSubmit}>
                <input type = "text" placeholder="search by name" onChange = {(e) =>setSearch(e.currentTarget.value)} />
                <button style = {{marginRight:"0.5rem"}} className="btn">Search</button>
                <button onClick = {() => setSorted([...info.projects])} className = "btn">Show all</button>
            </form>
            {sorted.map(item => (<Product product = {item} key = {item.quantity} />))}
        </div>
    )
}

export default Dashboard
