import React, {Component} from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import {postClient} from '../store'

class AddClient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      userId: this.props.user.id
    }
  }

  render() {
    const {handleSubmit, handleChange, user} = this.props
    return (
      <div>
        <h3>Add New Client</h3>
        <form id="newUser" onChange={evt => this.setState(handleChange(evt))} onSubmit={evt => handleSubmit(evt, this.state)}>
          <input name="firstName" placeholder="First Name" />
          <input name="lastName" placeholder="Last Name" />
          <input name="email" placeholder="Email" />
          <input name="phone" placeholder="Phone" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

//Connection to the Redux Store
const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleChange(evt) {
      return {[evt.target.name]: evt.target.value}
    },
    handleSubmit(evt, newClient) {
      let form = document.getElementById('newUser')
      console.log(newClient)
      evt.preventDefault()
      form.reset();
    }
  }
}

const AddClientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AddClient))
export default AddClientContainer;
