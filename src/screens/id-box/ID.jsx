import './id-cart.css';
import React from "react";
import QRCode from "react-qr-code";

function ID(props) {

const {firstName,lastName,address,photoUrl,middleName}  = props.data;

  return (
        <div className="id-card content-between page-break " >
          <div className="id-card_img-wrapper">

          <div className="flex flex-col content-center items-center">
            <div className="id-card_user-img" style={{backgroundImage:`url(${photoUrl})`}} />
            <span>PR ___________</span>
          </div>

            <span style={{marginTop:'10px'}}>AG</span>
          </div>

            <div className="id-card_info">
              <div className="id-card_user-info flex flex-col">
                <span className="user_name">{firstName} {lastName}</span>
                <span className="user-middle-name">{middleName}</span>
                <span className="user-address">{`${address.street},${address.city}`}</span>
              </div>

              <div className="id-card_qr-code">
                <QRCode value={firstName} size={80} />
              </div>
            </div>
        </div>
  );
}

export default ID;
