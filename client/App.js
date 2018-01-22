import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import history from './history'
import {Main, ClientList, Home, Individual} from "./components"

//Import thunks from store
import {fetchClients} from './store'

/**
 * COMPONENT
 */
class App extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    return (
      <Router history={history}>
      <Main>
          <Route path ="/clients/:id" component={Individual} />
          <Route exact path ="/clients" component={ClientList} />
          <Route exact path ="/home" component={Home} />
          <Route exact path ="/" component={Home} />
      </Main>
    </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    clients: state.clients
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(fetchClients())
    }
  }
}

export default connect(mapState, mapDispatch)(App)

