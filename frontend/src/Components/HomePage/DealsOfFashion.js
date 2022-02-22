import React from 'react';

import '../../Style/DealsOfFashion.css';

import first from '../../Assets/JSON/first.json'

const DealsOfFashion = () => {
    return (
        <React.Fragment>
            <div className="season top-deals-on-fashin">
                <div className="top">
                    <h4>Top Deals On Fashion</h4>

                    <div className="primary-btn">
                        <button>VIEW ALL</button>
                    </div>
                </div>

                <div className="bottom">
                    <div className="boxes">

                        {
                            first.map((data,index) => {
                                return (
                                    <div className="box" key={index}>
                                        <div className="img">
                                            <img src={data.img} alt="img1" />
                                        </div>

                                        <div className="desc">
                                            <div className="product">{data.title}</div>
                                            <div className='tag'>{data.tag}</div>
                                            <div className="title">{data.desc}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DealsOfFashion;
