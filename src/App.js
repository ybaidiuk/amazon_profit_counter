/** @jsx jsx */
import './App.css';
import {css, jsx} from '@emotion/core'

function App() {
  return (
    <div
      css={css`
      background-color: hotpink;
    `}
    >
      Hello
    </div>
  );
}

export default App;
