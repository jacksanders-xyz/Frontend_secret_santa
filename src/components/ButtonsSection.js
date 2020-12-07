import { Component } from 'react';
import IndexButtons from './IndexButtons';
import UserButtons from './UserButtons';
import GroupButtons from './GroupButtons';
//
class ButtonsSection extends Component {
  
  state = {
    userButtonsIsClicked: false, 
    groupButtonsIsClicked: false 
  }


  makeGroupButtons = () => {
    this.setState({
      groupButtonsIsClicked: true,
      userButtonsIsClicked: false
    })
  } 
  
  makeUserButtons = () => {
    this.setState({
      userButtonsIsClicked: true,  
      groupButtonsIsClicked: false 
    })
  }

  render() {
    return (
    <div className="buttons-container">
      { !this.state.userButtonsIsClicked && !this.state.groupButtonsIsClicked 
          ? <IndexButtons makeGroupButtons={this.makeGroupButtons} makeUserButtons={this.makeUserButtons} />    
           
          : this.state.userButtonsIsClicked 
              ?   <div>
                    <button onClick={this.makeGroupButtons}>create group</button>
                    <UserButtons/>
                  </div>
              :   <div> 
                    <button onClick={this.makeUserButtons}>create user</button>
                  <GroupButtons/>
                  </div>
      } 
    </div> 
    );
  }
}

export default ButtonsSection;  
