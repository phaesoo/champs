import React from 'react';
import Split from 'react-split';
import sc from 'styled-components';

import CodeEditor from 'components/CodeEditor'
import Output from 'components/Output'

const Layout = sc.div`
width: 100%
height: 100%
display: grid
grid-template-rows: 70px 1fr
`

class Problem extends React.Component {
  render() {
    return (
      <Layout>
        <div>
        Problem title
        </div>
      <Split sizes={[40, 60]} style={{ width: '100%', height: '100%', display: 'flex' }}>
      <div>
        Problem description
      </div>
      <Split sizes={[60, 40]} direction='vertical' style={{ width: '100%', height: '100%'}}>
        <CodeEditor/>
        <Output/>
      </Split>
      </Split>
      </Layout>
    )
  }
}

export default Problem;