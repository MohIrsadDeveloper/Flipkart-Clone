import React from 'react';
import '../../Style/Deals.css'

const Deals = () => {
    return (

        <React.Fragment>
            <div className="season deals-of-the-day">
                <div className="top">
                    <h4>Deals of the Day</h4>
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" alt="clock" />
                    <div className="time">
                        <span>12</span>
                        <span>:</span>
                        <span>44</span>
                        <span>:</span>
                        <span>34</span>
                        <span>Left</span>
                    </div>

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

export default Deals;
