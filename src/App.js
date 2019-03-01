import React, { Component } from 'react';
import Split from 'react-split';
import './App.css';

import sc from'styled-components';

import CodeEditor from './components/CodeEditor'

const Body = sc.div`
width: 100vw
height: 100vh
`

class App extends Component {
  render() {
    return (
      <Body>
      <Split sizes={[25, 25]} style={{width:'100%', height:'100%', display: 'flex'}}>
      <CodeEditor/>
      <CodeEditor/>
      </Split>
      </Body>
    );
  }
}

export default App;
