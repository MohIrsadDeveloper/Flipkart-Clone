import React, { useEffect, useState } from 'react';
import { FaHeart, FaStar } from "react-icons/fa";

const Main = () => {

  const [products, setProducts] = useState([])

  const getProducts = () => {
    fetch("http://localhost:4000/products?productId=0")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
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
              products.map((product, index) => {
                return (
                  <div className="box col-3" key={index}>
                    <div className="img">
                      <span className='ad'>Ad</span>
                      <FaHeart className='fa-heart' />
                      <img src={product.thumbnail} alt={product.name} />
                    </div>

                    <div className="desc">
                      <p className="product_name">
                        {product.name}
                      </p>
                      <h6><span>1000 g, Pack of 2</span></h6>
                      <div className="spec d-flex justify-content-start">
                        <h6><span className='rating'>4.5 <FaStar className='fa-star' /></span></h6>
                        <p>(40,230)</p>
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="lotion" />
                      </div>
                      <div className="price d-flex justify-content-start">
                        <h2 className='current_price'>${product.current_price}</h2>
                        <h2 className="old_price"><strike>${product.original_price}</strike></h2>
                        <p className="discount">42% off</p>
                      </div>
                      <div className="offers">
                        Buy 3 items, save extra 5%
                      </div>
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

export default Main;
