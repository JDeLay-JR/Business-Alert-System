import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import {broadcastTextMessage} from '../store/text'
import { Grid, Cell } from "styled-css-grid";

const Main = (props) => {
  return (
    <div>
      <Grid columns={1}>
        <Cell center><h1>Business Alert System</h1></Cell>
      </Grid>
      <nav>
        <Grid columns={2}>
        <Cell center><NavLink to={'/home'}><button>Home</button></NavLink></Cell>
        <Cell center><NavLink to={'/clients'}><button>Client List</button></NavLink></Cell>
        </Grid>
      </nav>
      <hr />
      {props.children}
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

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapStateToProps)(Main))
