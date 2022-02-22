import React from 'react';

import '../../Style/Furniture.css';

const Furniture = () => {
    return (
        <React.Fragment>
            <div className="season furniture-bestsellers">
                <div className="top">
                    <h4 className='head'>Furniture Bestsellers</h4>
                    <span className='sub-head'>Up to 70% OFF</span>

                    <div className="primary-btn">
                        <button>VIEW ALL</button>
                    </div>
                </div>

                <div className="bottom">
                    <div className="boxes">
                        <div className="box">
                            <div className="img">
                                <img src="https://rukminim1.flixcart.com/image/150/150/kr2e3680/watch/a/r/u/new-fancy-stylish-blue-dial-pu-strap-blue-king-bracelet-combo-original-imag4xnbjk5jkz6j.jpeg?q=70" alt="img1" />
                            </div>

                            <div className="desc">
                                <div className="product">Coffee Tables & more</div>
                                <div className='tag'>50% Off</div>
                                <div className="title">Deals Of The Day</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Furniture;
