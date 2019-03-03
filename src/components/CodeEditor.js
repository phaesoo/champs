import React from "react";
import AceEditor from "react-ace";
import sc from'styled-components';

import "brace/mode/python";
import "brace/theme/monokai";

const Editor = sc.div`
height: 99%
width: 99%
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
        width="99%"
        height="99%"
        />
      </Editor>
    );
  }
}

export default CodeEditor;
