import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h3>Mass Message</h3>
      <form id="sendMessage" onSubmit={props.broadcastText}>
        <input name="message" type="text" placeholder="Enter your message..." />
        <button>Broadcast Text</button>
      </form>
    </div>
  )
}

//Connection to the Redux Store
const mapStateToProps = function (state) {
  return {
    clients: state.clients
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
      dispatch(broadcastTextMessage(text))
      form.reset();
    }
  }
}

const HomeContainter = withRouter(connect(mapStateToProps)(Home))
export default HomeContainter;
