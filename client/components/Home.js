import React from 'react'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import {broadcastTextMessage} from '../store'
import { Grid, Cell } from 'styled-css-grid'

const Home = (props) => {
  return (
    <div>
      <Grid columns={1}>
        <Cell center><h3>Mass Alert System</h3></Cell>
      </Grid>
      <form id="sendMessage" className="container" onSubmit={props.broadcastText}>
        <Grid columns={1}>
        <Cell center ><input name="message" type="text" placeholder="Enter your message..." required /></Cell>
        </Grid>
        <Grid columns={1}>
          <Cell center><button>Broadcast Text</button></Cell>
        </Grid>
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

const HomeContainter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
export default HomeContainter;
