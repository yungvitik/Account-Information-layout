import React from "react";
import './InternalEmail.scss';
import copy_icon from '../../icons/copy_icon.svg'

export const InternalEmail = ({email}) => {
  return (
    <>
      <div className="email__wrapper">
        <h3 className="email__heading">Internal Email</h3>
        <p className="email__hint">
          Send documents to this email as an attachment and they will show up in your InBox Folder.
        </p>
      </div>
      <div className="email__wrapper">
        <input
          readOnly
          type="text"
          className="email__input"
          value={email}
        />
        <button
          className="email__button"
          title="copy to clipboard"
          onClick={() => {navigator.clipboard.writeText(email)}}
        >
          <img src={copy_icon} alt="" className="email__button-icon"/>
        </button>
      </div>
    </>
  )
}