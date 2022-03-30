import React from 'react'
import useFetch from 'react-fetch-hook';
import { Link } from 'react-router-dom';

// const bagUrl = "http://localhost:4000/products?product_id=5";
const bagUrl = "https://flipkarturl.herokuapp.com/products?product_id=5";

const Bag = () => {
    const { isLoading, data } = useFetch(bagUrl);

    return (
        isLoading ? (
            <></>
        ) : (
            <React.Fragment>
                <div className="season deals-of-the-day">
                    <div className="top">
                        <h4>Deals of Laptop</h4>


                        <div className="primary-btn">
                            <Link to={"/list/5"}>
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
                                            <Link to={`/list/5/${item.brand.brand_id}`} style={{ textDecoration: "none" }}>
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
    )
}

export default Bag