import React, { Component, PropTypes } from 'react'
import {reducer as formReducer} from 'redux-form';
import { reduxForm } from 'redux-form'
import  addUser  from '../actions/addUser'

class SignUpBox extends Component {
  handleFormSubmit(props) {
    event.preventDefault()
    this.props.addUser(props).then( ()=>{
      var router = require('react-router')
      router.browserHistory.push('/profile')
    })
  }

  render() {
    const {fields: {fullName, email, city, state}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" {...fullName} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="userEmail" placeholder="Email" {...email}/>
        </div>
        <div>
          <label>City</label>
          <input type="city" id="userCity" placeholder="City" {...city}/>
          <label>State</label>
          <input type="state" id="userState" placeholder="State" {...state}/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default reduxForm({
  form: 'signUpForm',
  fields: ['fullName', 'email', 'city', 'state']
}, null, { addUser })(SignUpBox);
