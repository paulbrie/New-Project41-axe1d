import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './teleporthq/style.module.css'
import Home from './teleporthq/pages/home'
import Demo from './pages/demo'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
      <div>
      <Link to="/">Home</Link>
      <Link to="/demo">Demo</Link>
      </div>
        <Route exact component={Home} path="/" />
        <Route exact component={Demo} path="/demo" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
