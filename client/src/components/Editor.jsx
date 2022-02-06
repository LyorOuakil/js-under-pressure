import PropTypes from 'prop-types';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';
import { Button } from './Button';
import { checkResult, convertStringToFunc, executeTest } from '../common/helpers';

export const Editor = ({ codes }) => {
  const [code, setCode] = useState(codes.baseCode);

  const submit = () => {
    const fn = convertStringToFunc(code);
    codes.tests.forEach((test) => {
      const result = executeTest(fn, test.call);
      return checkResult(result, test.result);
    });
  };

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

      <Button text="RUN" onClick={submit} />
    </div>
  );
};

Editor.PropTypes = {
  codes: PropTypes.shape({
    baseCode: PropTypes.string
  })
};
