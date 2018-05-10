import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn, companyName }) => (
  <div className="navbar">
      {isLoggedIn ? (
        <div className="navContent">
          <h1 className="navh1">{companyName}</h1>
          <nav>
            <div>
              <Link to="/home"><button>Home</button></Link>
              <Link to="/massAlert"><button>Broadcast Message</button></Link>
              <button href="#" onClick={handleClick}>Logout</button>
            </div>
          </nav>
        </div>
      ) : (
        <div className="navContent">
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
