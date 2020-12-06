import { Component } from 'react';
import './App.css';
import logo1 from './christmas-present-christmas-tree-pngrepo-com.png';
import SantaSection from './components/SantaSection.js';
import FooterWords from './components/FooterWords.js';
import logo2 from './snowman-snow-pngrepo-com.png';
import ButtonsSection from './components/ButtonsSection'





class App extends Component {
 

  render() {  
  return (
    <div className="App">
    <SantaSection />
    <ButtonsSection /> 
    <img className="christmas-tree" src={logo1} alt="logo" />
    <img className="snowman" src={logo2} alt="logo" />
    <FooterWords /> 
    </div>
  );
 }
}

export default App;
