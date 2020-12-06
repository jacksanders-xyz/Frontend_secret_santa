import { Component } from 'react';
import Santa from './Santa.js';
import SpeechBubble from './SpeechBubble.js';


class SantaSection extends Component {
  render() {
    return (
      <div className="santa-section">
      <Santa />
      <SpeechBubble />
      </div>
    );
  }
}




export default SantaSection
