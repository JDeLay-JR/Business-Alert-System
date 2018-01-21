import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {postTextMessage} from '../store/text'


/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children} = props

  return (
    <div>
      <h1>Small Business Manager</h1>
      <nav>
        <button>Home</button>
      </nav>
      <hr />
      {children}
      <form id="sendMessage" onSubmit={props.broadcastText}>
        <input name="message" type="text" placeholder="Enter your message..." />
        <button>Broadcast Text</button>
      </form>
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

const mapDispatchToProps = function(dispatch) {
  return {
    broadcastText(event) {
      event.preventDefault();
      const form = document.getElementById('sendMessage')
      const text = {
        message: event.target.message.value
      }
      console.log(text)
      dispatch(postTextMessage(text))
      form.reset();
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
