import React, { createRef, forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBagFill } from 'react-icons/bs';
import './nft-card.css';

import Modal from '../Modal/Modal';

const NftCardd = ({ title, id, currentBid, creatorImg, imgUrl, creator }) => {
  console.log(title);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt="" className="min" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p className="creator__info">{creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p className="creator__info">{currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className="mt-3 d-flex align-item-center justify-content-between ">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <BsBagFill />
            Buy
          </button>

          {showModal && <Modal setShowModal={setShowModal} />}

          <span className="history__link">
            <Link to="#">View History</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCardd;
