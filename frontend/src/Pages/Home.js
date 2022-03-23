import React from 'react';

import '../Style/Home.css';

import Header from '../Components/HomePage/Header';
import SubHeader from '../Components/HomePage/SubHeader';
import FCarousel from '../Components/HomePage/FCarousel';
import Deals from '../Components/HomePage/Deals';
import Furniture from '../Components/HomePage/Furniture';
import Footer1 from '../Components/HomePage/Footer1';
import Footer from '../Components/HomePage/Footer';
import Laptop from '../Components/HomePage/Laptop';
import Mobile from '../Components/HomePage/Mobile';
import Watch from '../Components/HomePage/Watch';
import Shoes from '../Components/HomePage/Shoes';
import Bag from '../Components/HomePage/Bag';
import AirCondition from '../Components/HomePage/AirCondition';
import Essential from '../Components/HomePage/Essential';




const Home = () => {
    return (
        <div>
            <Header />
            <SubHeader />
            <div className='home'>
                <FCarousel />
                <Deals />
                <Laptop />
                <Mobile />
                <Watch />
                <Shoes />
                <Bag />
                <AirCondition />
                <Essential />
                <Furniture />
                <Footer1 />
            </div>
                <Footer />
        </div>
    );
};

export default Home;
