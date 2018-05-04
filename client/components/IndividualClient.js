import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import {Home} from '../components'
import {postSingleText, putClient} from '../store'
import {validate} from '../../utils'

class IndividualClient extends Component {

  constructor(props) {
    super(props)
    this.state = {
      updateClientInfo: false,
    }
  }

  render() {

    const {client, sendText, handleSubmit, handleChange} = this.props
    const {updateClientInfo} = this.state

    return client ? (
      !updateClientInfo ? (
      <div>
        <h1>{client.firstName} {client.lastName}</h1>
        <p>{client.email}</p>
        <p>{client.phone}</p>
        <form id="individualUserMessage" onSubmit={sendText}>
          <textarea name="message" placeholder="Write your message here..." />
          <button>Submit</button>
        </form>
        <button onClick= {() => this.setState({updateClientInfo: true})}>Update Client Information</button>
      </div>
      ) :
      (
      <div>
        <h1>{client.firstName} {client.lastName}</h1>
        <form id="clientUpdateForm" onSubmit={handleSubmit}>
          <input name="firstName" defaultValue={client.firstName} />
          <input name="lastName" defaultValue={client.lastName} />
          <input name="email" defaultValue={client.email} />
          <input name="phone" defaultValue={client.phone} />
          <button>Update Information</button>
        </form>
      </div>
      )

    )
    //Handles weird case when user refreshes page and errors were thrown
    : (<Home />)
  }
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
    },
    handleSubmit(event) {
      event.preventDefault()
      let form = document.getElementById('clientUpdateForm')
      let updatedInfo = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
      }
      dispatch(validate(updatedInfo, ownProps.match.params.id, putClient))
      form.reset()
      ownProps.history.push('/home')
    }
  }
}

const IndividualClientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(IndividualClient))
export default IndividualClientContainer
