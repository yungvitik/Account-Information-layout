import React from "react";
import './DocumentStatistics.scss';
import Documents from '../../icons/documentStatistics/Documents.svg'
import Encripted from '../../icons/documentStatistics/Encripted.svg'
import Faxed from '../../icons/documentStatistics/Faxed.svg'
import LinkToFill from '../../icons/documentStatistics/LinkToFill.svg'
import Shared from '../../icons/documentStatistics/Shared.svg'
import SingNow from '../../icons/documentStatistics/SingNow.svg'

const icons = [Documents, Encripted, Faxed, LinkToFill, Shared, SingNow];


export const DocumentStatistics = ({documents}) => {
  return (
    <>
      <div className="documents__title">
        <h3 className="documents__heading">
          Document Statistics
        </h3>
        <a href="/" className="documents__link">
          {`Job list >`}
        </a>
      </div>

      <ul className="documents__list">
        {documents.map(document =>(
          <li key={document.name} className="documents__list-item document-item">
            <img
              className="document-item__icon"
              src={icons.find(icon => icon.includes(document.name))}
              alt={document.name}
            />
            <p className="document-item__name">
              {document.name}
            </p>
            <p className="document-item__quantity">
              {document.quantity}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
