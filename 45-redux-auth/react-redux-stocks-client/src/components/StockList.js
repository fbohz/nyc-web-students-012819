import React from 'react'
import Stock from './Stock'
import { List } from 'semantic-ui-react'

const StockList = ({ stocks }) => {
  return (
    <List>
      {
        stocks.map(stock => <Stock key={`stock-${stock.id}`} stock={stock} />)
      }
    </List>
  )
}

export default StockList

