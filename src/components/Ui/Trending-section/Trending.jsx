import React from 'react';
import './trending.css';
import { Container, Row, Col } from 'react-bootstrap';

import { NFT__DATA } from '../../../assets/Data/data';

import NftCardd from '../nft card/NftCard';

const Trending = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h3 className="trending__title">Trending</h3>
          </Col>

          {NFT__DATA.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
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

export default Trending;
