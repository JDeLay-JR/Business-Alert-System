import React from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import {Home} from '../components'
import {postSingleText} from '../store'

const IndividualClient = (props) => {
  const {client, sendText} = props

  return client ? (
    <div>
    <h1>{client.firstName} {client.lastName}</h1>
    <p>{client.email}</p>
    <p>{client.phone}</p>
    <form id='individualUserMessage' onSubmit={sendText}>
      <input name='message' placeholder='Write your message here...' />
      <button>Submit</button>
    </form>
    </div>
  )
  //Handles weird case when user refreshes page and errors were thrown
  : (<Home />)
}

//Connection to the Redux Store
const mapStateToProps = function (state, ownProps) {
  return {
    client: state.clients.find(client => {
      if (client.id == ownProps.match.params.id) {
        return client
      }
    })
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    sendText(event) {
      event.preventDefault();
      const form = document.getElementById('individualUserMessage')
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
