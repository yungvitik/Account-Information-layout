import React from "react";
import './FaxNumber.scss';
import tooltip_icon from '../../icons/tooltip_icon.svg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const FaxNumber = () => {
  return (
    <>
      <div className="fax__wrapper">
        <h3 className="fax__heading">Internal Email</h3>
        <Tippy content={<span className="fax__tooltip">Tooltip</span>}>
          <img src={tooltip_icon} alt="tooltip icon"/>
        </Tippy>
        <p className="fax__hint">
          Receive faxes online directly into your PDFfiller account.
        </p>
      </div>
      <button className="fax__button">Get Fax Number</button>
    </>
  )
}
