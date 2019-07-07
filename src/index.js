/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App
    css={css`
      body {
        margin: 0;
      }
    `}
  />,
  document.getElementById('root')
)
