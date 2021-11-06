import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import NavBar from './components/NavBar'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
