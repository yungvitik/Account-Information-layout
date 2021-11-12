import React from "react";
import './MyTeammates.scss';
import { ProgressCircle } from "../ProgressCircle";


export const MyTeammates = ({teammates}) => {
  return (
    <>
      <h3 className="teammates__heading">
        My Teammates
      </h3>
      <div className="teammates__content">
        <div className="teammates__accounts">
          <div className="teammates__accounts-chart">
            <ProgressCircle teammates={teammates}/>
          </div>
          <div className="teammates__accounts-info accounts-info">
            <h2 className="accounts-info__heading">
              Shared Accounts
            </h2>
            <p className="accounts-info__field">
              Avialable: {teammates.avialable}
            </p>
            <p className="accounts-info__field">
              Used: {teammates.used}
            </p>
          </div>
        </div>
        <button className="teammates__button">Managing accounts</button>
      </div>
    </>
  )
}
