import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn, companyName }) => (
  <div>
      {isLoggedIn ? (
        <div>
          <h1>{companyName}</h1>
          <h2>Management Dashboard</h2>
          <nav>
            <div>
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <h1>Small Business Management Dashboard</h1>
          <nav>
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </nav>
        </div>
      )}
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    companyName: state.user.companyName
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
