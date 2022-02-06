import PropTypes from 'prop-types';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';

export const Editor = ({ codes }) => {
  const [code, setCode] = useState(codes.baseCode);
  console.log(codes);

  return (
    <div
      id="code_editor"
      style={{
        width: '100%'
      }}>
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          height: '30%',
          fontSize: 14,
          backgroundColor: 'black',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
        }}
      />
    </div>
  );
};

Editor.PropTypes = {
  codes: PropTypes.shape({
    baseCode: PropTypes.string
  })
};
