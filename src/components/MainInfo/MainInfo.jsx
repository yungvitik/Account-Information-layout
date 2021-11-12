import React from "react";
import './MainInfo.scss';

export const MainInfo = ({ accountNumber,registrationDate, lastLogin}) => {

  return (
    <div className="main-info">
      <div className="main-info__fields">
        <p>Account Number</p>
        <p>Registration Date</p>
        <p>Last Login</p>
      </div>

      <div className="main-info__values">
        <p>{accountNumber}</p>
        <p>{registrationDate}</p>
        <p>{lastLogin}</p>
      </div>
    </div>
  )
}