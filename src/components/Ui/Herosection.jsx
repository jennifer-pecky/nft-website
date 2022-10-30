import React from 'react';
import './herosection.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillRocket } from 'react-icons/ai';
import { GiBellShield } from 'react-icons/gi';

import heroImg from '../../assets/images/main.jpeg';

const Herosection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover rare digital art and collect{' '}
                <span>sell extraordinary</span> NFTs{' '}
              </h2>
            </div>
            <p>
              Every digital artwork on upside is authentic and truly unique.
              Blockchain Technology marked in this new approach to digital
              onwership possible
            </p>
            <div className="hero__btns d-flex align-items-center gap-4">
              <button className=" explore__btn d-flex align-items-center gap-2">
                <AiFillRocket className="love" />
                <Link to="/market">Explore</Link>
              </button>
              <button className=" create__btn d-flex align-items-center gap-2">
                <GiBellShield className="love" />
                <Link to="/createt">Create</Link>
              </button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="clue" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Herosection;
