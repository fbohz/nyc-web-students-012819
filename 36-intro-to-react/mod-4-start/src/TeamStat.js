import React from 'react';

// this one is a functional component
const TeamStat = (props) => {
  // style={{ fontWeight: props.team.winner ? 600 : 200 }}
  // class => className, for => htmlFor
  // data-, aria- => data-, aria-
  // aria is for accessibility
  return (
    <div>
      <img src={props.team.url} />
      <p>{props.team.name} <span>({props.team.record})</span></p>
      <p className={"omg"}>{props.team.score}</p>
    </div>
  )
}

export default TeamStat;
