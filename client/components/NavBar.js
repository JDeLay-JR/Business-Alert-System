import React from 'react'
import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn, companyName }) => (
  <div className="navbar">
      {isLoggedIn ? (
        <div className="navContent">
          <div className="navContentHeaders">
            <h1 className="navh1">{companyName}</h1>
            <h3 className="navh3">Management Dashboard</h3>
          </div>
          <nav className="loggedInNavBarButtonContainer">
              <Link to="/home"><button className="loggedInNavBarButton">Home</button></Link>
              <Link to="/massAlert"><button className="loggedInNavBarButton">Broadcast Message</button></Link>
              <NavLink to="addClient">
                <button className="loggedInNavBarButton">Add Client</button>
              </NavLink>
              <button href="#" onClick={handleClick} className="loggedInNavBarButton">Logout</button>
          </nav>
        </div>
      ) : (
        <div className="navContent">
          <h1>Small Business Management Dashboard</h1>
          <nav className="signInNavBarButtonContainer">
            <Link to="/login"><button className="signInNavBarButton">Login</button></Link>
            <Link to="/signup"><button className="signInNavBarButton">Sign Up</button></Link>
          </nav>
        </div>
      )}
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
