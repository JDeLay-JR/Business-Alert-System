import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import history from './history'
import {Main, ClientList} from "./components"

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
        <Switch>
          {/* Routes placed here are available to all visitors */}
          {/* <Route path="/products/:productId" component={SingleProduct} />
          <Route path="/categories/:categoryId" component={SingleCategory} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={HomePage} /> */}
          <Route exact path ="/" component={ClientList} />
        </Switch>
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

