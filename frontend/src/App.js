import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './common/Home'
import NavBar from './components/NavBar'
import ProductPage from './common/ProductPage'
import Cart from './common/Cart'
import LoginPage from './common/LoginPage'
import RegisterPage from './common/RegisterPage'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login/" component={LoginPage} />
        <Route path="/register/" component={RegisterPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart/:id?" component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
