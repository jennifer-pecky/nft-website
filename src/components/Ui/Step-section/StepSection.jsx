import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiWallet } from 'react-icons/gi';
import { FaWallet } from 'react-icons/fa';
import { BsListOl } from 'react-icons/bs';
import { SiAddthis } from 'react-icons/si';
import './Step-section.css';

const STEP__DATA = [
  {
    title: 'Setup your Wallet',
    desc: `    From a user's perspective, NFTs drive economic freedom With
     NFTs, you own the assets no matter which game or metaverse
     you're in`,
    icon: <GiWallet />,
  },

  {
    title: 'Create your collection',
    desc: `    From a user's perspective, NFTs drive economic freedom With
     NFTs, you own the assets no matter which game or metaverse
     you're in`,
    icon: <FaWallet />,
  },

  {
    title: 'list them for sale',
    desc: `    From a user's perspective, NFTs drive economic freedom With
     NFTs, you own the assets no matter which game or metaverse
     you're in`,
    icon: <BsListOl />,
  },

  {
    title: 'Add your NFTs',
    desc: `    From a user's perspective, NFTs drive economic freedom With
     NFTs, you own the assets no matter which game or metaverse
     you're in`,
    icon: <SiAddthis />,
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" className="mb-4">
              <div className="single__step__item">
                <span> {item.icon}</span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet"></Link>
                  </h5>
                  <p className="mb-0">{item.desc} </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
