import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import {broadcastTextMessage} from '../store/text'

const Main = (props) => {
  return (
    <div>
      <h1>Small Business Manager</h1>
      <nav>
        <NavLink to={'/home'}><button>Home</button></NavLink>
        <NavLink to={'/clients'}><button>Client List</button></NavLink>
      </nav>
      <hr />
      {props.children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapStateToProps)(Main))
