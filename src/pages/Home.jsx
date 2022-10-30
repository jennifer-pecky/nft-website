import React from 'react';
import { Container } from 'react-bootstrap';
import Herosection from '../components/Ui/Herosection';
import LiveAuction from '../components/Ui/live-auction/LiveAuction';
import SellerSection from '../components/Ui/Seller-section/SellerSection';
import Trending from '../components/Ui/Trending-section/Trending';
import StepSection from '../components/Ui/Step-section/StepSection';
const Home = () => {
  return (
    <>
      <Herosection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default Home;
