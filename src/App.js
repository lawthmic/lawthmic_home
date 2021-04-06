import logo from './logo.svg';
import './App.css';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {code, code1} from './code.js';

const Component = () => {

  return (
    <SyntaxHighlighter language="kotlin" style={docco} wrapLines={true} showLineNumbers={true}>
      {code}
    </SyntaxHighlighter>
  );
};

 

function App() {
  return (<Component />);
}



export default App;
