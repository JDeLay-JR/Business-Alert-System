import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import {postClient} from '../store'

const AddClient = (props) => {
  const {handleSubmit, user} = props
  console.log(props)
  return (
    <div>
      <h3>Add New Client</h3>
      <form id='newUser' onSubmit={evt => handleSubmit(evt, user.id)}>
        <input name='firstName' placeholder='First Name'/>
        <input name='lastName' placeholder='Last Name'/>
        <input name='email' placeholder='Email'/>
        <input name='phone' placeholder='Phone'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

//Connection to the Redux Store
const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit(evt, userId) {
      evt.preventDefault()
      let newClient = {
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value,
      email: evt.target.email.value,
      phone: evt.target.phone.value,
      userId
      }
      return dispatch(postClient(newClient))
    }
  }
}

const AddClientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddClient))
export default AddClientContainer;
