import React,{useState} from 'react'
import { addProduct } from '../../Redux/Actions/addProduct'
import {useDispatch,useSelector} from "react-redux"
import {Redirect} from "react-router-dom"

function CreateProduct(props) {
    const [product,setProduct]  = useState({
        name: "",
        description:"",
        price: 0,
        quantity:0
    })
    const dispatch = useDispatch()
    const handleChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        setProduct({...product,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct(product))
        props.history.push("/")
    }
    const state = useSelector(state => state.firebase.auth.uid)
    if(!state) return <Redirect to = "/login"/>
    return (
        <div className="container">
        <h2 className="center-align grey-text">Add product</h2>
        <div className="row">
            <form className="col s12 l10" onSubmit={handleSubmit}>
                <div className="row">
                    <div class="input-field col s6 l10">
                        <input onChange={handleChange} value={product.name} name="name"  id="name" type="text" required className="validate" />
                        <label htmlFor="name">name</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s6 l10">
                        <input onChange={handleChange} value={product.description} name="description" id="description" type="text" className="validate" />
                        <label  htmlFor="description">description</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s6 l10">
                        <input onChange={handleChange} value={product.price} name="price"  id="price" type="number" required className="validate" />
                        <label  htmlFor="price">price</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s6 l10">
                        <input onChange={handleChange} value={product.quantity} name="quantity" id="quantity" required type="number" className="validate" />
                        <label htmlFor="quantity">quantity</label>
                    </div>
                </div>
                <div className="row">
                    <button className="btn">Add product</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default CreateProduct
