import React from 'react';
import '../../Style/Deals.css';
import useFetch from "react-fetch-hook";

const Laptop = () => {

    const { isLoading, data } = useFetch("http://localhost:4000/products?product_id=1");
    console.log(isLoading, data);

    return (isLoading ? (
        <></>
        ) : (
        <React.Fragment>
            <div className="season deals-of-the-day">
                <div className="top">
                    <h4>Deals of Laptop</h4>
                    

                    <div className="primary-btn">
                        <button>VIEW ALL</button>
                    </div>
                </div>

                <div className="bottom">
                    <div className="boxes">
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="box" key={index}>
                                        <div className="img">
                                            <img src={item.image} alt="img1" />
                                        </div>

                                        <div className="desc">
                                            <div className="product">{item.product_title}</div>
                                            <div className='tag'>{item.tag.offer_tag}</div>
                                            <div className="title">{item.tag.deals_tag}</div>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>
                </div>
            </div>
        </React.Fragment>
    ))
};

export default Laptop;
