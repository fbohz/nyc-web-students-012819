import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScoreCard from "./ScoreCard";

const data = [
  {
    home: {
      name: "Bucks",
      url: "https://cdn.nba.net/assets/logos/teams/secondary/web/MIL.svg",
      score: 135,
      record: "57-20",
      winner: false
    },
    away: {
      name: "Hawks",
      url: "https://cdn.nba.net/assets/logos/teams/secondary/web/ATL.svg",
      score: 136,
      record: "28-49",
      winner: true
    }
  },
  {
    home: {
      name: "NYK",
      url: "https://cdn.nba.net/assets/logos/teams/secondary/web/MIL.svg",
      score: 135,
      record: "57-20",
      winner: false
    },
    away: {
      name: "NETS",
      url: "https://cdn.nba.net/assets/logos/teams/secondary/web/ATL.svg",
      score: 136,
      record: "28-49",
      winner: true
    }
  },
  {
    home: {
      name: "WHATEVER",
      url: "https://cdn.nba.net/assets/logos/teams/secondary/web/MIL.svg",
      score: 135,
      record: "57-20",
      winner: false
    },
    away: {
      name: "OMG",
      url: "https://cdn.nba.net/assets/logos/teams/secondary/web/ATL.svg",
      score: 136,
      record: "28-49",
      winner: true
    }
  },
  {
    home: {
      name: "Bucks",
      url: "https://cdn.nba.net/assets/logos/teams/secondary/web/MIL.svg",
      score: 135,
      record: "57-20",
      winner: false
    },
    away: {
      name: "Hawks",
      url: "https://cdn.nba.net/assets/logos/teams/secondary/web/ATL.svg",
      score: 136,
      record: "28-49",
      winner: true
    }
  }
];

// eventually what goes in state
class App extends Component {
  // get that data from the api
  // iterate over it
  // turn each game into a scorecard
  // mod 1 => map
  renderScoreCards() {
    // if props.team.winner { return "whatever" }
    return data.map(game => <ScoreCard game={game} />);
  }

  componentDidMount() {
    console.log("App Did Mount");
  }

  render() {
    console.log("App Render");
    // undefined, null, true, false
    return (
      <div>
        <h1>NBA.com</h1>

        {this.renderScoreCards()}
        {/*
        <ScoreCard game={data[1]} />
        <ScoreCard game={data[0]} />
        <ScoreCard game={data[2]} />
        <ScoreCard game={data[3]} />
        */}

        {/*
        <ScoreCardy
          team_a_image="https://cdn.nba.net/assets/logos/teams/secondary/web/MIL.svg"
          team_b_image="https://cdn.nba.net/assets/logos/teams/secondary/web/ATL.svg"
          team_a_name="New York Knicks"
          team_a_score={135}
        />
        */}
      </div>
    );
  }
}

export default App;
