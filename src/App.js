/** @jsx jsx */
import {css, jsx} from '@emotion/core'

const App = () => {
  // const [sellPrice, setSellPrice] = useState(15)

  return (
    <div>
      <table
        css={css`
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
          td,
          th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }

          tr:nth-child(even) {
            background-color: #dddddd;
          }
        `}>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>{'1231'}</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
    </div>
  )
}
export default App
