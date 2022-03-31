import React from 'react';
import { Spinner } from 'react-bootstrap'
import useFetch from 'react-fetch-hook';
import { Link } from 'react-router-dom';
// const furnitureUrl = "http://localhost:4000/products?product_id=8";
const furnitureUrl = "https://flipkarturl.herokuapp.com/products?product_id=8";

const Furniture = () => {

    const { isLoading, data } = useFetch(furnitureUrl)

    return (isLoading ? (
        <Spinner animation="border" variant="primary" className='ms-auto' />
    ) : (
        <React.Fragment>
            <div className="season furniture-bestsellers">
                <div className="top">
                    <h4 className='head'>Furniture Bestsellers</h4>
                    <span className='sub-head'>Up to 70% OFF</span>

                    <div className="primary-btn">
                        <Link to={'/list/8'}>
                            <button>VIEW ALL</button>
                        </Link>
                    </div>
                </div>

                <div className="bottom">
                    <div className="boxes">
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="box" key={index}>
                                        <Link to={`/list/8/${item.brand.brand_id}`} style={{ textDecoration: "none" }}>
                                            <div className="img">
                                                <img src={item.image} alt="img1" />
                                            </div>

                                            <div className="desc">
                                                <div className="product">{item.product_title}</div>
                                                <div className='tag'>{item.tag.offer_tag}</div>
                                                <div className="title">{item.tag.deals_tag}</div>
                                            </div>
                                        </Link>
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
