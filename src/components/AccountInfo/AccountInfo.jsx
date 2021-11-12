import React from "react";
import './AccountInfo.scss';
import title_icon from '../../icons/title_icon.svg'
import { MainInfo } from "../MainInfo";
import { DocumentStatistics } from "../DocumentStatistics";
import { CurrentSubscription } from "../CurrentSubscription";
import { MyTeammates } from "../MyTeammates";
import { InternalEmail } from "../InternalEmail";
import { FaxNumber } from "../FaxNumber";

export const AccountInfo = ({info}) => {
  const {
    documents,
    accountNumber,
    registrationDate,
    lastLogin,
    subscription,
    teammates,
    internalEmail,
  } = info;
  
  return (
    <div className="InfoPage">
      <div className="InfoPage__title">
        <img
          src={title_icon}
          alt="title icon"
          className="InfoPage__title-icon"
        />
        <h1 className="InfoPage__title-heading">
          Account Information
        </h1>
      </div>

      <section className="InfoPage__section InfoPage__section--bottom-border">
        <MainInfo
          accountNumber={accountNumber}
          registrationDate={registrationDate}
          lastLogin={lastLogin}
        />
      </section>

      <section className="InfoPage__section documents">
        <DocumentStatistics documents={documents}/>
      </section>

      <section className="InfoPage__section subscription">
        <CurrentSubscription subscription={subscription}/>
      </section>

      <section className="InfoPage__section InfoPage__section--bottom-border teammates">
        <MyTeammates teammates={teammates}/>
      </section>

      <section className="InfoPage__section InfoPage__section--bottom-border email">
        <InternalEmail email={internalEmail}/>
      </section>

      <section className="InfoPage__section fax">
        <FaxNumber/>
      </section>

    </div>
  )
}
