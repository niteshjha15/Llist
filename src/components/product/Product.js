import React from 'react'
import {Link} from "react-router-dom"

function Product({product}) {
    return (
        <div className="row">
            <div className="col s12 l8">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title balck-text">Name: {product.name}</span>
                            <p>Description: {product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>quantity: {product.quantity}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Product
