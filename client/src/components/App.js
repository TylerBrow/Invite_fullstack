import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../styles/base.css'
import Invite from './Invite'
import Going from './Going'
import NotGoing from './NotGoing'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Invite} />
          <Route exact path='/Going' component={Going} />
          <Route exact path='/NotGoing' component={NotGoing} />
        </Router>
      </Provider>
    )
  }
}

export default App
