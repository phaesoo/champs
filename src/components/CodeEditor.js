import React from "react";
import AceEditor from "react-ace";
import sc from'styled-components';

import "brace/mode/python";
import "brace/theme/monokai";

const Editor = sc.div`
height: 100%
weight: 100%
`

class CodeEditor extends React.Component {
  onChange = newValue => {
    console.log("change", newValue);
  };

  render() {
    return (
      <Editor>
        <AceEditor
        mode="python"
        theme="monokai"
        width="100%"
        height="100%"
        />
      </Editor>
    );
  }
}

export default CodeEditor;
