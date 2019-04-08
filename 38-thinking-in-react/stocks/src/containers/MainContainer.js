import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  state = {
    stocks: [],
    portfolio: [],
    alphabetical: false,
    price: false,
    filter: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ stocks: data })
      })
  }

  clickHandler = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    }, () => {
      // console.log(this.state.portfolio)
    })
  }

  sellStock = (stock) =>  {
    // console.log(stock)
    const portfolio = this.state.portfolio.filter(portfolioStock => {
      return stock.id !== portfolioStock.id
    })

    this.setState({ portfolio: portfolio })
  }

  handleChange = (event) => {
    console.log('change', event.target.value)
    if (event.target.value === 'Alphabetically') {
      this.setState({alphabetical: !this.state.alphabetical}, () => {this.sortedAlphabetically()})
    } else if (event.target.value === 'Price') {
      this.setState({ price: !this.state.price })
    } else {
      this.setState({filter: event.target.value})
    }
  }

  sortedAlphabetically = () => {
    let stocks = this.state.stocks.sort((a,b) => {
      return a.name.localeCompare(b.name)
    })

    return stocks
  }

  filteredStocks = () => {
    if (this.state.filter) {
      return this.state.stocks.filter(stock => {
        return stock.type === this.state.filter
      })
    } else {
      return this.state.stocks
    }
  }

  render() {

    return (
      <div>
        <SearchBar handleChange={this.handleChange} />

          <div className="row">
            <div className="col-8">

            <StockContainer clickHandler={this.clickHandler} stocks={this.state.alphabetical ? this.sortedAlphabetically() : this.filteredStocks()} />

            </div>
            <div className="col-4">

              <PortfolioContainer clickHandler={this.sellStock} portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
