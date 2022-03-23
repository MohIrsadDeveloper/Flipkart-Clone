import React from 'react';
import useFetch from 'react-fetch-hook';

const Furniture = () => {

    const { isLoading, data } = useFetch("http://localhost:4000/products?product_id=8")

    return (isLoading ? (
            <div>Loading...</div>
        ) : (
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
        )
    );
};

export default Furniture;
