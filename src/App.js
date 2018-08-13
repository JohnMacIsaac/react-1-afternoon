// import React, React.Component from 'react'; 
import React, { Component } from 'react'; 
           // { Component } is React.Component deconstructed 

import TopicBrowser from './components/TopicBrowser/TopicBrowser.js';
import './index.css';

class App extends Component {
  render() {
    return (
      <TopicBrowser />
    )
  }
}

export default App;
// if the browser is not rendering,
// then 'npm start' in CL in project directory