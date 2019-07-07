/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import {round} from './utils'

const tableStyle = css`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-of-type(even) {
    background-color: #dddddd;
  }
`
const App = () => {
  const [sellPrice, setSellPrice] = useState(15)
  const [bayPrice, setBayPrice] = useState(6)

  const amazonDelivery = 3.6
  const amazonFee = round(sellPrice * 0.15 * 1.2)
  const amazonTotal = round(amazonDelivery + amazonFee)

  const [transportPrice, setTransportPrice] = useState(0.6)

  const profitBrutto = sellPrice - amazonTotal - bayPrice - transportPrice

  return (
    <div>
      <table css={tableStyle}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Sell Price</td>
            <td>
              <TextField value={sellPrice} onChange={e => setSellPrice(e.target.value)} type='number' />
            </td>
          </tr>
          <tr>
            <td>Bay Price</td>
            <td>
              <TextField value={bayPrice} onChange={e => setBayPrice(e.target.value)} type='number' />
            </td>
          </tr>
          <tr>
            <td>Amazon</td>
            <td>
              <TextField label={'Delivery'} value={amazonDelivery} disabled />
              <TextField label={'Fee'} value={amazonFee} disabled />
            </td>
            <td>
              <TextField label={'Total'} value={amazonTotal} disabled />
            </td>
          </tr>
          <tr>
            <td>Transport Price</td>
            <td>
              <TextField value={transportPrice} onChange={e => setTransportPrice(e.target.value)} disabled />
            </td>
            <td>from Poland + to Amazon</td>
          </tr>
          <tr>
            <td>Profit Brutto</td>
            <td>
              <TextField value={round(profitBrutto)} disabled />
            </td>
            <td>€ without return loss</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default App
