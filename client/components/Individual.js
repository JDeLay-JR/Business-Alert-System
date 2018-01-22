import React from 'react'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import {postSingleText} from '../store'
import { Grid, Cell } from "styled-css-grid";

const IndividualClient = (props) => {
  const {client} = props
  return (client[0]) ?
  (
    <div>
      <Grid columns={1}>
        <Cell center><h3>{`${client[0].firstName} ${client[0].lastName}`}</h3></Cell>
      </Grid>
      <form id="sendSingleMessage" onSubmit={props.sendText}>
        <Grid columns={1}>
          <Cell center><input name="message" type="text" placeholder="Enter your message..." required /></Cell>
        </Grid>
        <Grid columns={1}>
          <Cell center><button>Send Text</button></Cell>
        </Grid>
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
      if (client.id === parseInt(ownProps.match.params.id)) return client
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
