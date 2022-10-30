import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './live-auction.css';
// import nfts from '../../../assets/Data/data.json';
import NftCardd from '../nft card/NftCard';
import { NFT__DATA } from '../../../assets/Data/data';
// import Trending from '../Trending-section/Trending';

const LiveAuction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3" md="4" sm="6" className="mb-4">
              <NftCardd
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                creator={item.creator}
                creatorImg={item.creatorImg}
                currentBid={item.currentBid}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
