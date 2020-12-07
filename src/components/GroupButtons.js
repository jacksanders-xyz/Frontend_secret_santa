import { Component } from 'react';

class GroupButtons extends Component {
    
  state = {
    name: "",
    password:  "",
    drawDate: "",
    gameDay: ""
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
      <form onSubmit={this.handleSubmit} className="group-form">
          <h1>Sign Up a group!</h1>
          
          <label>Group Name</label>
          <input name="name" value={this.state.name} onChange={this.handleChange}/>
         
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
         
          <label>drawDate</label>
          <input name="drawDate" value={this.state.drawDate} onChange={this.handleChange}/>
         
          <label>gameDay</label>
          <input name="gameDay" value={this.state.gameDay} onChange={this.handleChange}/>
          
          <input type="submit" value="Create Group" />
      </form>
    );
  }
}


export default GroupButtons;
