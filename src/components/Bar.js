/** @jsx jsx */
import {jsx} from '@emotion/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'

const Bar = () => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography variant='h6' color='default'>
          Amazon Profit Counter (Yevhen Baidiuk)
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Bar
