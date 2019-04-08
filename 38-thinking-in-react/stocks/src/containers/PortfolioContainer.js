import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log('PORTFOLIO CONTAINER PROPS: ', this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock => {
              return <Stock clickHandler={this.props.clickHandler} stock={stock} key={stock.id} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
