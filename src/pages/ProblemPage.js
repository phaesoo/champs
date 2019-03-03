import React from 'react';
import Split from 'react-split'

import sc from'styled-components';

import MainBar from 'components/MainBar'
import Problem from 'components/Problem'

const Body = sc.div`
width: 100vw
height: 100vh
display: grid
grid-template-rows: 70px 1fr
`

class ProblemPage extends React.Component {
  render() {
    return (
      <Body>
        <MainBar/>
        <Problem/>
      </Body>
    )
  }
}

export default ProblemPage;