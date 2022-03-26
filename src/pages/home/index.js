import React, { useState } from 'react';
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOption';
import Footer from '../../components/common/footer';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import Nightlife from '../../components/nightlIfe';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <>
      <Header />
      <TabOptions />
      {getCorrectScreen(activeTab)}
      <Footer />
    </>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case 'Delivery':
      return <Delivery />;
    case 'Dining Out':
      return <DiningOut />;
    case 'Nightlife':
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
