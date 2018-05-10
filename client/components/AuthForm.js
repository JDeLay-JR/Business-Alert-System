import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'

const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error, displayCompanyInput} = props

  return (
    <div className="authFormContainer">
      <form zDepth={4} className="authForm" onSubmit={handleSubmit} name={name}>

        <div className="authFormInput">
            <label htmlFor="email"><aside id="emailLabel">Email</aside></label>
            <input name="email" type="text" />
          </div>
          <div className="authFormInput">
            <label htmlFor="password"><aside id="passwordLabel">Password</aside></label>
            <input name="password" type="password" />
          </div>
          {displayCompanyInput(displayName)}
          <div className="containerCol">
            <button className="authFormButton" type="submit">{displayName}</button>
            <button className="authFormButton" href="/auth/google">{displayName} with Google</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
      </form>

    </div>
  )
}

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value

      if (evt.target.name === 'signup') {
        const companyName = evt.target.companyName.value
        dispatch(auth(email, password, formName, companyName))
      } else {
        dispatch(auth(email, password, formName))
      }

    },
    displayCompanyInput (displayName) {
      if (displayName === 'Sign Up') {
        return (
          <div className="authFormInput">
            <label htmlFor="companyName"><aside>Company Name</aside></label>
            <input name="companyName" type="companyName" />
          </div>
        )
      } else {
        return (<div />)
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
