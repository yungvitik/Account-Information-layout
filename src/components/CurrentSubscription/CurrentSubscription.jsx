import React from "react";
import './CurrentSubscription.scss';

export const CurrentSubscription = ({subscription}) => {
  return (
    <>
      <h3 className="subscription__heading">
        Current Subscription
      </h3>
      <div className="subscription__content">
        <div className="subscription__wrapper subscription__wrapper--top">
          <div className="subscription__info subscription__info--main">
            <div className="subscription__info-fields">
              Subscription Plan
            </div>
            <div className="subscription__info-values">
              {subscription.plan}
            </div>
          </div>
          <button className="subscription__button">
            Upgrade Plan
          </button>
        </div>
        <div className="subscription__wrapper">
          <div className="subscription__info">
            <div className="subscription__info-fields">
              <p>Premium Support</p>
              <p>Subscription Term</p>
              <p>Subscribed Date</p>
              <p>Automatic Renewal</p>
            </div>
            <div className="subscription__info-values">
              <p>{subscription.premium? 'Activated' : 'Not activated'}</p>
              <p>{`${subscription.term} Subscription`}</p>
              <p>{subscription.subscribedDate}</p>
              <p>{subscription.automaticRenewal}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

