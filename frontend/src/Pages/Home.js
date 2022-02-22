import React from 'react';

import '../Style/Home.css';

import SubHeader from '../Components/HomePage/SubHeader';
import FCarousel from '../Components/HomePage/FCarousel';
import Deals from '../Components/HomePage/Deals';
import DealsOfFashion from '../Components/HomePage/DealsOfFashion';
import Furniture from '../Components/HomePage/Furniture';
import Footer1 from '../Components/HomePage/Footer1';
import Footer from '../Components/HomePage/Footer';




const Home = () => {
    return (
        <div>
            <SubHeader />
            <div className='home'>

                <FCarousel />
                <Deals />
                <DealsOfFashion />
                <Furniture />
                <Footer1 />
            </div>
                <Footer />
        </div>
    );
};

export default Home;
