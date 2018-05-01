import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import {ClientList} from './index'

const Home = (props) => {
  return (
    <div>
      <p>You are home</p>
      <ClientList/>
      <NavLink to='addClient'>
        <button>Add Client</button>
      </NavLink>
    </div>
  )
}

//Connection to the Redux Store
const mapStateToProps = function (state) {
  return {
    clients: state.clients
  }
}

const HomeContainter = withRouter(connect(mapStateToProps, null)(Home))
export default HomeContainter;
