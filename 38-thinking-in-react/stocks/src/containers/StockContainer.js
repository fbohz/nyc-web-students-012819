import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log('STOCK CONTAINER PROPS: ', this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => {
            return <Stock clickHandler={this.props.clickHandler} stock={stock} key={stock.id} />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
