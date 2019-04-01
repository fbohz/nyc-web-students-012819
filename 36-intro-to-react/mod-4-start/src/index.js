import React from 'react';
import ReactDOM from 'react-dom';

// how do you feel about import/export in javascript?
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// who feels ok with require?

// auto refresh
//cool?

//. Component
// it is a piece of a UI, usually reuable
// it has a single responsibility (principle)

// Take those "Components" and turn it into code!
// in small chunks
// where does our dynamic data come from?
  // API! => you are! someone else on your team
  // you'll just pay for one

// What is needed at the very least for this scoreboard?

// https://cdn.nba.net/assets/logos/teams/secondary/web/MIL.svg
// https://cdn.nba.net/assets/logos/teams/secondary/web/ATL.svg
// fuynctional component syntax
import ScoreCard from './ScoreCard';


// dsifferen between a function and class component
// to do a ton of other cool stuff
class ScoreCardy extends React.Component {

  render() {
    // mass assignment => {}
    // when something gets rendered and put onto the screen, it runs this code
    console.log(this.props);
    // image, teamname, record, score
    // if you want to interpolate in JSX,
    // #{}, <%= %>, ${} => {}
    return (
      <div>
        <div>
          <h3>Final/OT</h3>
          <div>
            <img src={this.props.team_a_image} />
            <p>{this.props.team_a_name} <span>(57-20)</span></p>
            <p>{this.props.team_a_score}</p>
          </div>
          <div>
            <img src={this.props.team_b_image} />
            <p>Atlana <span>(57-20)</span></p>
            <p>136</p>
          </div>
        </div>
        <div>
          <button>WATCH</button>
          <button>BOX SCORE</button>
          <button>GAME DETAIL</button>
        </div>
      </div>
    )
  }

}

// to build anything in react... use Thimking in React
// looks like HTML, it sreally JSX => new type ofmarkup language
// bable wuill convert this to JavaScript

// not super readable ScoreCard()
// more readable, looks like HTML => but is not => <ScoreCard />
// this is a component
// they must be upper case

// we get to decide how this data from the API is structured
// we could always just transform that data
// Think about the ideal data you want:

// https://cdn.nba.net/assets/logos/teams/secondary/web/MIL.svg
// https://cdn.nba.net/assets/logos/teams/secondary/web/ATL.svg
// what is the ideal data we'd use?

ReactDOM.render(
  <App />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
