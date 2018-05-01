import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import {ClientList} from './index'
import {fetchClients} from '../store'

class Home extends Component {

  componentDidMount() {
    this.props.getAllClients()
  }

  render() {
    return (
      <div>
        <ClientList/>
        <NavLink to='addClient'>
          <button>Add Client</button>
        </NavLink>
      </div>
    )
  }
}

//Connection to the Redux Store
const mapStateToProps = function (state) {
  return {
    clients: state.clients,
    user: state.user
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getAllClients() {
      return dispatch(fetchClients())
    }
  }
}

const HomeContainter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
export default HomeContainter;
