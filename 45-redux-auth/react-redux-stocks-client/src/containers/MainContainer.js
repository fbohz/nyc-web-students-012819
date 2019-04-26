import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import { Grid } from 'semantic-ui-react';

class MainContainer extends Component {

  render() {
    return (
      <div>
        {/* <SearchBar/> */}

        <Grid>
          <Grid.Row columns={2}>
          
            <Grid.Column textAlign='center'>
              <StockContainer/>
            </Grid.Column>

            <Grid.Column>
              <PortfolioContainer/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }

}

export default MainContainer;
