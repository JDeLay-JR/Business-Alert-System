import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {postMassText} from '../store'

const MassAlert = (props) => {
  const {sendText} = props
  return (
    <div>
      <form id="massAlert" onSubmit={event => sendText(event)}>
        <textarea name="message" placeholder="Write your message..." />
        <button>Send</button>
      </form>
    </div>
  )
}


const mapDispatchToProps = function (dispatch) {
  return {
    sendText(event) {
      event.preventDefault();
      const form = document.getElementById('massAlert')
      const text = {
        message: event.target.message.value,
      }
      dispatch(postMassText(text))
      form.reset();
    },
  }
}

const MassAlertContainter = withRouter(connect(null, mapDispatchToProps)(MassAlert))
export default MassAlertContainter;
