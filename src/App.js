import React from 'react'
import {BrowserRouter as Router ,Route} from "react-router-dom"
import Login from "./components/auth/Login"
import Signup from './components/auth/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/navbar/Navbar'
import CreateProduct from './components/product/CreateProduct'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path = "/" component = {Dashboard} />
        <Route exact path = "/addproduct" component = {CreateProduct} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/signup" component = {Signup} />
      </Router>
    </div>
  )
}

export default App
