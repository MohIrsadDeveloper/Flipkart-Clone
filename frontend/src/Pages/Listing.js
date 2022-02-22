import React from 'react';
import '../Style/Listing.css'

import Fliter from '../Components/ListingPage/Fliter';
import Main from '../Components/ListingPage/Main';
import Menu from '../Components/ListingPage/Menu';

const Listing = () => {
  return (
    <React.Fragment>
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
