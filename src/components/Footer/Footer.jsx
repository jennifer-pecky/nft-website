import React from 'react';
import './footer.css';
import { AiFillFire } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { ImTelegram } from 'react-icons/im';
import { SiDiscord } from 'react-icons/si';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const MY__ACCOUNT = [
  {
    display: 'Aurthor profile',
    url: '/seller-profile',
  },
  {
    display: 'Create item',
    url: '/seller-profile',
  },
  {
    display: 'Collection',
    url: 'market',
  },
  {
    display: 'Edit profile',
    url: '/edit-profile',
  },
];

const RESOURCES = [
  {
    display: 'Help Center',
    url: '#',
  },
  {
    display: 'Partner',
    url: '#',
  },
  {
    display: 'Community',
    url: '#',
  },
  {
    display: 'Activity',
    url: '#',
  },
];

const COMPANY = [
  {
    display: 'About',
    url: '#',
  },
  {
    display: 'Career',
    url: '#',
  },
  {
    display: 'Ranking',
    url: '#',
  },
  {
    display: 'contact us',
    url: '/contact',
  },
];

const Footer = () => {
  return (
    <footer className="love">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <AiFillFire />
                </span>
                NFTs
              </h2>
            </div>
            <p>
              The world's first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items
            </p>
          </Col>
          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Resources</h5>

            <ListGroup className="list__group">
              {RESOURCES.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links" d-flex gap-3 align-item-center>
              <span>
                <Link to="#">
                  <FaFacebook />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <BsTwitter />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <BsInstagram />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <ImTelegram />
                </Link>
              </span>
              <span>
                <Link to="#">
                  <SiDiscord />
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright">
              {' '}
              Copyrights 2022, Developed by Jennifer pecky. @Pecky's Tech Diary
              All Rights Reserved.{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
