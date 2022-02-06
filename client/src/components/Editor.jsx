import PropTypes from 'prop-types';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export const Editor = ({ codes }) => {
  // eslint-disable-next-line react/prop-types
  const [code, setCode] = useState('');
  console.log(codes);

  useEffect(() => {
    setCode(codes[0].baseCode);
  }, []);
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
  codes: PropTypes.shape([
    {
      baseCode: PropTypes.string
    }
  ])
};
