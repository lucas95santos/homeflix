import React from 'react'
// react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// pages
import { Signin, Home, Watch } from './pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/inicio" component={Home} />
      <Route exact path="/:movie/assistir" component={Watch} />
    </Switch>
  </BrowserRouter>
)

export default Routes
