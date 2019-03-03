import React, { Component } from 'react';
import Split from 'react-split';
import './App.css';

import sc from'styled-components';

import MainBar from './components/MainBar'
import CodeEditor from './components/CodeEditor'

const Body = sc.div`
width: 100vw
height: 100vh
`

class App extends Component {
  render() {
    return (
      <Body>
      <MainBar/>
      <Split sizes={[0, 60]} style={{width:'100%', height:'100%', display: 'flex'}}>
      <CodeEditor/>
      <CodeEditor/>
      </Split>
      </Body>
    );
  }
}

export default App;
