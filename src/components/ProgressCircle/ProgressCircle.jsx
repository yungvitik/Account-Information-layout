import React from "react";
import './ProgressCircle.scss';


export const ProgressCircle = ({teammates}) => {
  const {avialable, used} = teammates;
  const percent = used / avialable;

  return (
    <div class="chart" style={{'--num': percent}}>
      <svg>
        <circle cx="66" cy="66" r="66"></circle>
        <circle cx="66" cy="66" r="66"></circle>
      </svg>
      <div class="chart__value">{used}</div>
    </div>
  )
}
