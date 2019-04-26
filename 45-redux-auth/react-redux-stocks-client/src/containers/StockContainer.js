import React, { Component } from 'react';
import Stock from '../components/Stock'
import StockList from '../components/StockList'
import { connect } from 'react-redux'
import { getAllStocks } from '../actions'

class StockContainer extends Component {

  componentDidMount() {
    // fetch()
    //   .then()
    //   .then(data => {
      // this.props.dispatch({type: 'GET_STOCKS', payload: data})
    //   })
    // this way without thunk
    
    this.props.getAllStocks()
    // with thunk
  }
  
  render() {
    console.log('STOCK CONTAINER PROPS: ', this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.length > 0 
            ? <StockList stocks={this.props.stocks} />
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

// OPTION 1
// const mapDispatchToProps = (dispatch) => {
//   console.log(dispatch)
//   return { 
//     getAllStocks: getAllStocks
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(StockContainer)

// OPTION 2
// const mapDispatchToProps = (dispatch) => {
//   console.log(dispatch)
//   return { 
//     getAllStocks: ()=> dispatch(getAllStocks())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(StockContainer)


// OPTION 3
export default connect(mapStateToProps, { getAllStocks })(StockContainer)
