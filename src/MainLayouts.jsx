import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/shared-comp/Header/Header';
import Footer from './components/shared-comp/Footer/Footer';

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayouts;