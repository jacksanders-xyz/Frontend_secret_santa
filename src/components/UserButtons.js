import { Component } from 'react';

class UserButtons extends Component {

  state = {
    firstName: "",
    lastName:  "",
    groupId: "",
    interests: ""
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state)
  }
  
  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })
  }
   






  render() {
    return (
      <form onSubmit={this.handleSubmit} className="user-form">
          <h1>Sign Up!</h1>
          
          <label>First Name</label>
          <input className="myWidth" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          
          <label>Last Name</label>
          <input className="myWidth" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
          
          <label>GroupId</label>
          <input className="myWidth" name="groupId" value={this.state.groupId} onChange={this.handleChange}/>
          
          <label>interests</label>
          <textarea className="interests-field" name="interests" value={this.state.interests} onChange={this.handleChange}/>
          
          <input className="create-user-button" type="submit" value="Create User" />
      </form>
    );
  }
}


export default UserButtons;
