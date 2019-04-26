import React from 'react'
import { List } from 'semantic-ui-react';

// /stocks
const Stock = props => {
  const { stock } = props
  console.log(props)
  return (
    <List.Item style={{marginBottom: "5px"}}>
      <List.Header>
        {stock.name}
      </List.Header>
      <List.Content>
        ${stock.price}
      </List.Content>
    </List.Item>    
  );
}

export default Stock
