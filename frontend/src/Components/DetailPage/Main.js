import React from 'react';
import '../../Style/Detail.css'
import { FaCart, FaCartPlus, FaStar } from "react-icons/fa";


const Main = () => {
    return (
        <React.Fragment>
            <div className="container-fluid dm-c1">
                <div className="container dm-c2">
                    <div className="row dm-r1">
                        <div className="col-5">
                            <div className="row dm-r2">
                                <div className="col-2 left">
                                    <div className="boxes">
                                        <div className="box">
                                            <img src="https://rukminim2.flixcart.com/image/832/832/kz7bcsw0/baby-cereal/a/w/u/-original-imagb9a5jw6byhyt.jpeg?q=70" alt="small" />
                                        </div>
                                        <div className="box">
                                            <img src="https://rukminim2.flixcart.com/image/832/832/kz7bcsw0/baby-cereal/a/w/u/-original-imagb9a5jw6byhyt.jpeg?q=70" alt="small" />
                                        </div>
                                        <div className="box">
                                            <img src="https://rukminim2.flixcart.com/image/832/832/kz7bcsw0/baby-cereal/a/w/u/-original-imagb9a5jw6byhyt.jpeg?q=70" alt="small" />
                                        </div>
                                        <div className="box">
                                            <img src="https://rukminim2.flixcart.com/image/832/832/kz7bcsw0/baby-cereal/a/w/u/-original-imagb9a5jw6byhyt.jpeg?q=70" alt="small" />
                                        </div>
                                        <div className="box">
                                            <img src="https://rukminim2.flixcart.com/image/832/832/kz7bcsw0/baby-cereal/a/w/u/-original-imagb9a5jw6byhyt.jpeg?q=70" alt="small" />
                                        </div>
                                        <div className="box">
                                            <img src="https://rukminim2.flixcart.com/image/832/832/kz7bcsw0/baby-cereal/a/w/u/-original-imagb9a5jw6byhyt.jpeg?q=70" alt="small" />
                                        </div>
                                        <div className="box">
                                            <img src="https://rukminim2.flixcart.com/image/832/832/kz7bcsw0/baby-cereal/a/w/u/-original-imagb9a5jw6byhyt.jpeg?q=70" alt="small" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 right">
                                    <div className="img border p-2">
                                        <img src="https://rukminim2.flixcart.com/image/832/832/kz7bcsw0/baby-cereal/x/q/g/-original-imagb9a5uyyzgenj.jpeg?q=70" alt="detail" />
                                    </div>
                                    <div className="button">
                                        <button className='light_orange'>
                                            <FaCartPlus className='cart-plus' />
                                            ADD TO CART</button>
                                        <button className='dark_orange'>
                                            BUY NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-7">
                            <div className="row dm-r3">
                                <div className="name">
                                    <h4>Nestle Cerelac Wheat - Rice Mixed Fruit Cereal  (300 g, 10+ Months)</h4>
                                </div>

                                <div className="spec d-flex justify-content-start">
                                    <h6><span className='rating'>4.5 <FaStar className='fa-star' /></span></h6>
                                    <p>(40,230)</p>
                                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="lotion" />
                                </div>

                                <div className="price d-flex justify-content-start">
                                    <h2 className='current_price'>$340</h2>
                                    <h2 className="old_price"><strike>$370</strike></h2>
                                    <p className="discount">42% off</p>
                                </div>

                                <div className="qty">
                                    <p>Minimum Order Quantity:2</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main