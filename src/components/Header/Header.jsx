import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { RiMenuAddLine } from 'react-icons/ri';
import { AiFillFire } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { Container } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';

const NAV__LINKS = [
  {
    display: 'Home',
    url: '/home',
  },
  {
    display: 'Market',
    url: '/market',
  },
  {
    display: 'Create',
    url: '/create',
  },
  {
    display: 'Contact',
    url: '/contact',
  },
];

const Header = () => {
  const [header, setHeader] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {}, []);

  const toggleMenu = () => menuRef.current.classList.toggle('active__menu');

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header className={header ? 'header active' : 'header'}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <AiFillFire />
              </span>
              NFTs
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? 'active' : ''
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5">
            <button className="btn d-flex gap-align-items-center">
              <span>
                <BiWallet />
              </span>

              <Link to="/wallet">Connect Wallet</Link>
            </button>

            <span className="mobile__menu">
              <RiMenuAddLine onClick={toggleMenu} />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
