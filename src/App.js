import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import MusicPage from './components/MusicPage'
import NatKing from './components/NatKing'
import EpikHigh from './components/EpikHigh'
import Claude from './components/Claude'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/music" component={MusicPage} />
            <Route exact path="/music/epikhigh" component={EpikHigh} />
            <Route exact path="/music/natkingcole" component={NatKing} />
            <Route exact path="/music/claudedebussy" component={Claude} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
