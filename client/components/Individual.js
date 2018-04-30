import React from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import {postSingleText} from '../store'

const IndividualClient = (props) => {
  const {client} = props
  return (client[0]) ?
  (
    <div>
      <h3>{`${client[0].firstName} ${client[0].lastName}`}</h3>
      <form id="sendSingleMessage" onSubmit={props.sendText}>
          <input name="message" type="text" placeholder="Enter your message..." required />
          <button>Send Text</button>
      </form>
    </div>
  )
  :
  <div />
}

//Connection to the Redux Store
const mapStateToProps = function (state, ownProps) {
  return {
    client: state.clients.filter(client => {
      if (client.id === parseInt(ownProps.match.params.id, 2)) return client
    })
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    sendText(event) {
      event.preventDefault();
      const form = document.getElementById('sendSingleMessage')
      const text = {
        message: event.target.message.value,
        id: ownProps.match.params.id
      }
      dispatch(postSingleText(text))
      form.reset();
    }
  }
}

const IndividualClientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(IndividualClient))
export default IndividualClientContainer
