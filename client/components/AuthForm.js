import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'

const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error, displayCompanyInput} = props

  return (
    <div className="authFormComponentContainer containerCol">
      <form className="authForm containerCol" onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><aside>Email</aside></label>
          <input className="authInput" name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><aside>Password</aside></label>
          <input className="authInput authInputBottom" name="password" type="password" />
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
          <div>
            <label htmlFor="companyName"><small>Company Name</small></label>
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
