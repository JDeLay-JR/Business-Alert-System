import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn, companyName }) => (
  <div>
      {isLoggedIn ? (
        <div className="containerCol navbar">
          <h1 className="navh1">{companyName}</h1>
          <h2 className="navh2">Management Dashboard</h2>
          <nav>
            <div>
              <Link to="/home"><button>Home</button></Link>
                <button href="#" onClick={handleClick}>Logout</button>
            </div>
          </nav>
        </div>
      ) : (
        <div className="containerCol">
          <h1>Small Business Management Dashboard</h1>
          <nav>
            <div>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/signup"><button>Sign Up</button></Link>
            </div>
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
