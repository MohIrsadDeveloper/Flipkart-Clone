import React from 'react'
import useFetch from 'react-fetch-hook'
import { Link } from 'react-router-dom';

// const watchUrl = "http://localhost:4000/products?product_id=3";
const watchUrl = "https://flipkarturl.herokuapp.com/products?product_id=3";

const Watch = () => {
    const { isLoading, data } = useFetch(watchUrl);

    return (isLoading ? (
        <></>
    ) : (
        <React.Fragment>
            <div className="season deals-of-the-day">
                <div className="top">
                    <h4>Deals of New Watches</h4>


                    <div className="primary-btn">
                        <Link to={"/list/3"}>
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
                                        <Link to={`/list/3/${item.brand.brand_id}`} style={{ textDecoration: "none" }}>
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

export default Watch