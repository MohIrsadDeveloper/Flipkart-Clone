import React from 'react';
import '../Style/Listing.css'

import Fliter from '../Components/ListingPage/Fliter';
import Main from '../Components/ListingPage/Main';
import Menu from '../Components/ListingPage/Menu';
import Header from '../Components/HomePage/Header';

const Listing = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="listing">
        <div className="menubar">
          <Menu />
        </div>

        <div className="main-body">
          <Fliter />
          <Main />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Listing;
