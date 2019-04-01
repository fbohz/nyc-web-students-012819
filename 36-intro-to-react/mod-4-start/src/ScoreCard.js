import React from 'react';
import TeamStat from './TeamStat';

function ScoreCard(props) {
  // mass assignment => {}
  // when something gets rendered and put onto the screen, it runs this code
  console.log('ScoreCard', props);
  // image, teamname, record, score
  // if you want to interpolate in JSX,
  // #{}, <%= %>, ${} => {}
  return (
    <div>
      <div>
        <h3>Final/OT</h3>
        <TeamStat team={props.game.home} />
        <TeamStat team={props.game.away} />
      </div>
      <div>
        <button>WATCH</button>
        <button>BOX SCORE</button>
        <button>GAME DETAIL</button>
      </div>
    </div>
  )
}

export default ScoreCard;
