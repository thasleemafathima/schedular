import React from "react";

import "components/DayListItem.scss";

var classNames = require('classnames');

export default function DayListItem(props) {

  const formatSpots = function (spots) {
    if (spots === 0) {
      return "no spots remaining"
    }
    if (spots === 1) {
      return `1 spot remaining `  
    }
    if (spots) {
      return `${spots} spots remaining `  
    }
  };

  const dayClass =  classNames("day-list__item ", {
    "day-list__item": true, ////newly added later
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0? true : false
  });

  return (
    <li className={dayClass} onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}