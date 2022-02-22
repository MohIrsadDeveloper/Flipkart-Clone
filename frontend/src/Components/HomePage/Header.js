import React from 'react';
import '../../Style/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="header-top">
                    <div className="logo">
                        <div className="top">
                            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" />
                        </div>
                        <div className="bottom">
                            <i>Explore <span>plus</span> </i>
                            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="plus" />
                        </div>
                    </div>

                    <div className="search">
                        <input type="text" name="search" id="search" placeholder='Search for products, brands and more' />
                        <i className="fas fa-search"></i>
                    </div>

                    <div className="button">
                        <Link className='link' id='link1' to={'/'}>
                            <button id='login' type='button'>Login</button>
                            <div className="content">
                            <i className="fas fa-caret-up up"></i>
                                <ul className='login-lists'>
                                    <li className="list" id="list1"><i className="fas fa-user-circle"></i>New customer? </li>
                                    <li className="list" id="list2"><img src="https://www.linkpicture.com/q/ticket_3.png" alt="" /> My Profile</li>
                                    <li className="list" id="list3">Flipkart Plus Zone</li>
                                    <li className="list" id="list4">Orders</li>
                                    <li className="list" id="list5">Wishlist</li>
                                    <li className="list" id="list6">Rewards</li>
                                    <li className="list" id="list7">Gift Cards</li>
                                </ul>
                            </div>
                        </Link>
                        <Link className='link' id='link2' to={'/'}>
                            <button id='more' type='button'>
                                More
                                <i className="fas fa-angle-down"></i>
                            </button>
                            <div className="content">
                            <i className="fas fa-caret-up up"></i>

                            </div>

                        </Link>
                        <Link className='link' id='link3' to={'/'}>
                            <button id='cart' type="button">
                                <i className="fas fa-shopping-cart"></i>
                                Cart
                            </button>

                        </Link>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
