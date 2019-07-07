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
  const returnLoss = amazonFee * 0.03 * 1.19 + amazonDelivery + bayPrice + transportPrice

  const [returnPercent, setReturnPercent] = useState(0.03)
  const profitNetto = profitBrutto * (1 - returnPercent) - returnPercent * returnLoss

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
              <TextField value={sellPrice} onChange={e => setSellPrice(parseFloat(e.target.value))} type='number' />
            </td>
          </tr>
          <tr>
            <td>Bay Price</td>
            <td>
              <TextField value={bayPrice} onChange={e => setBayPrice(parseFloat(e.target.value))} type='number' />
            </td>
          </tr>
          <tr>
            <td>Amazon</td>
            <td>
              <TextField label={'Total'} value={amazonTotal} disabled />
              <TextField label={'Delivery'} value={amazonDelivery} disabled />
              <TextField label={'Fee'} value={amazonFee} disabled />
            </td>
          </tr>
          <tr>
            <td>Transport Price</td>
            <td>
              <TextField
                value={transportPrice}
                onChange={e => setTransportPrice(parseFloat(e.target.value))}
                type='number'
              />
            </td>
            <td>from Poland + to Amazon</td>
          </tr>
          <tr>
            <td>Return percent</td>
            <td>
              <TextField
                value={returnPercent}
                onChange={e => setReturnPercent(parseFloat(e.target.value))}
                type='number'
              />
            </td>
          </tr>
          <tr>
            <td>Return loss</td>
            <td>
              <TextField value={round(returnLoss)} disabled />
            </td>
          </tr>
          <tr>
            <td>Profit Brutto</td>
            <td>
              <TextField value={round(profitBrutto)} disabled />
            </td>
            <td>€ without return loss</td>
          </tr>
          <tr>
            <td>Profit Netto</td>
            <td>
              <TextField value={round(profitNetto)} disabled />
            </td>
            <td>€ without return loss</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default App
