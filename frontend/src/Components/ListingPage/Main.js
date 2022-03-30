import React from 'react';
import { FaHeart, FaStar } from "react-icons/fa";
import useFetch from 'react-fetch-hook';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// const listUrl = "http://localhost:4000/list";
const listUrl = "https://flipkarturl.herokuapp.com/list"

const Main = () => {
  const params = useParams();
  const { isLoading, data } = useFetch(`${listUrl}?product_id=${params.id}&brand_id=${params.brand}`)
  console.log(data);

  return (
    isLoading ? (
      <>
      <h6 className='text-center text-primary mt-5'>Loading...</h6>
      </>
    ) : (
      <React.Fragment>
        <div className="container-fluid main-c1">
          <div className="row main-r1">
            <div className="col">
              <h1>All Categories</h1>
            </div>
          </div>
          <div className="row main-r2">
            <div className="boxes d-flex justify-content-start">

              {
                data.map((product, index) => {
                  return (
                    <div className="box col-3" key={index}>
                      <Link to={`/detail/${product.product_id}`} style={{textDecoration : "none"}}>

                        <div className="img">
                          <span className='ad'>Ad</span>
                          <FaHeart className='fa-heart' />
                          <img src={product.images} alt={product.product_name} />
                        </div>

                        <div className="desc">
                          <p className="product_name">
                            {product.product_name}
                          </p>
                          <div className="spec d-flex justify-content-start">
                            <h6><span className='rating'>{product.rating.rating_star} <FaStar className='fa-star' /></span></h6>
                            <p>(40,230)</p>
                            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="lotion" />
                          </div>
                          <div className="price d-flex justify-content-start">
                            <h2 className='current_price'>&#8377; {product.price[0].current_price} </h2>
                            <h2 className="old_price"><strike>{product.price[0].old_price}</strike></h2>
                            <p className="discount">{product.discount}% off</p>
                          </div>
                          {/* <div className="offers">
                        Buy 3 items, save extra 5%
                      </div> */}
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

export default Main;
