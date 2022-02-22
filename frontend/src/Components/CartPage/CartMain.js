import React from 'react';
import '../../Style/Cart.css';
import { FaCaretDown, FaMinus, FaPlus, FaSquare } from "react-icons/fa";

const CartMain = () => {
    return (
        <div className="container-fluid cm-c1">
            <div className="container cm-c2">
                <div className="row cm-r1">
                    <div className="col-8 items">
                        <div className="head-title d-flex">
                            <h5>My Cart (6)</h5>
                            <div className="right d-flex">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="location" />
                                <h6>Deliver to </h6>
                                <div className="drop-down">
                                    <h4>Mumbai - 400097</h4>
                                    <FaCaretDown className='fa-caret-down' />
                                </div>
                            </div>
                        </div>

                        <div className="boxes">
                            {/* <div className="box">
                                <div className="top d-flex">
                                    <div className="img">
                                        <img src="https://rukminim2.flixcart.com/image/224/224/kj0bp8w0-0/mobile/p/n/c/9-power-mobhqab5-redmi-original-imafyz7aqsrggzgh.jpeg?q=90" alt="m1" />
                                    </div>

                                    <div className="desc">
                                        <h2>REDMI 9 Power (Electric Green, 64 GB)</h2>
                                        <p>4 GB RAM</p>
                                        <h1>Out Of Stock</h1>
                                    </div>
                                </div>

                                <div className="bottom">
                                    <div className="button">
                                        <button className='later'>SAVE FOR LATER</button>
                                        <button className='remove'>REMOVE</button>
                                    </div>
                                </div>
                            </div> */}

                            <div className="box">
                                <div className="top d-flex">
                                    <div className="img">
                                        <img src="https://rukminim2.flixcart.com/image/224/224/kj0bp8w0-0/mobile/p/n/c/9-power-mobhqab5-redmi-original-imafyz7aqsrggzgh.jpeg?q=90" alt="m1" />
                                    </div>

                                    <div className="desc">
                                        <h2>realme Narzo 50A (Oxygen Green, 64 GB)</h2>
                                        <p>4 GB RAM</p>
                                        <h3>Seller:NGIVR RETAILS</h3>
                                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="img1" />

                                        <h1 className='price'>₹11,499 <strike>₹12,999</strike> <span className='green'>11% Off</span></h1>
                                        <div className="offer">
                                            <span className='green'>1 offer applied </span>
                                        </div>
                                    </div>

                                    <div className="delivery">
                                        <h4>Delivery by 11 AM, Tomorrow |</h4>
                                        <h4 className="span"><span>Free</span> <strike>₹    70</strike></h4>
                                        <h4 className="delever-by">Delivery by Tomorrow, Wed | <span>Free</span> <strike>₹40</strike></h4>
                                        <h5>7 Days Replacement Policy</h5>
                                    </div>
                                </div>

                                <div className="bottom d-flex">
                                    <div className="left d-flex">
                                        <div className="minus"><FaMinus /></div>
                                        <div className="count"><h4>1</h4></div>
                                        <div className="plus"><FaPlus /></div>
                                    </div>
                                    <div className="button">
                                        <button className='later'>SAVE FOR LATER</button>
                                        <button className='remove'>REMOVE</button>
                                    </div>
                                </div>
                            </div>


                            <div className="box">
                                <div className="top d-flex">
                                    <div className="img">
                                        <img src="https://rukminim2.flixcart.com/image/224/224/kj0bp8w0-0/mobile/p/n/c/9-power-mobhqab5-redmi-original-imafyz7aqsrggzgh.jpeg?q=90" alt="m1" />
                                    </div>

                                    <div className="desc">
                                        <h2>realme Narzo 50A (Oxygen Green, 64 GB)</h2>
                                        <p>4 GB RAM</p>
                                        <h3>Seller:NGIVR RETAILS</h3>
                                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="img1" />

                                        <h1 className='price'>₹11,499 <strike>₹12,999</strike> <span className='green'>11% Off</span></h1>
                                        <div className="offer">
                                            <span className='green'>1 offer applied </span>
                                        </div>
                                    </div>

                                    <div className="delivery">
                                        <h4>Delivery by 11 AM, Tomorrow |</h4>
                                        <h4 className="span"><span>Free</span> <strike>₹    70</strike></h4>
                                        <h4 className="delever-by">Delivery by Tomorrow, Wed | <span>Free</span> <strike>₹40</strike></h4>
                                        <h5>7 Days Replacement Policy</h5>
                                    </div>
                                </div>

                                <div className="bottom d-flex">
                                    <div className="left d-flex">
                                        <div className="minus"><FaMinus /></div>
                                        <div className="count"><h4>1</h4></div>
                                        <div className="plus"><FaPlus /></div>
                                    </div>
                                    <div className="button">
                                        <button className='later'>SAVE FOR LATER</button>
                                        <button className='remove'>REMOVE</button>
                                    </div>
                                </div>
                            </div>


                            <div className="box">
                                <div className="top d-flex">
                                    <div className="img">
                                        <img src="https://rukminim2.flixcart.com/image/224/224/kj0bp8w0-0/mobile/p/n/c/9-power-mobhqab5-redmi-original-imafyz7aqsrggzgh.jpeg?q=90" alt="m1" />
                                    </div>

                                    <div className="desc">
                                        <h2>realme Narzo 50A (Oxygen Green, 64 GB)</h2>
                                        <p>4 GB RAM</p>
                                        <h3>Seller:NGIVR RETAILS</h3>
                                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="img1" />

                                        <h1 className='price'>₹11,499 <strike>₹12,999</strike> <span className='green'>11% Off</span></h1>
                                        <div className="offer">
                                            <span className='green'>1 offer applied </span>
                                        </div>
                                    </div>

                                    <div className="delivery">
                                        <h4>Delivery by 11 AM, Tomorrow |</h4>
                                        <h4 className="span"><span>Free</span> <strike>₹    70</strike></h4>
                                        <h4 className="delever-by">Delivery by Tomorrow, Wed | <span>Free</span> <strike>₹40</strike></h4>
                                        <h5>7 Days Replacement Policy</h5>
                                    </div>
                                </div>

                                <div className="bottom d-flex">
                                    <div className="left d-flex">
                                        <div className="minus"><FaMinus /></div>
                                        <div className="count"><h4>1</h4></div>
                                        <div className="plus"><FaPlus /></div>
                                    </div>
                                    <div className="button">
                                        <button className='later'>SAVE FOR LATER</button>
                                        <button className='remove'>REMOVE</button>
                                    </div>
                                </div>
                            </div>

                            <div className="row fixed bg-white position-sticky bottom-0 start-0">
                                <div className="place-order">
                                    <div className="button">
                                        <button>PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-4">
                        <div className="row">
                            <div className="col-11 bg-white ms-3 right">
                                <div className="price-details-top border-bottom">PRICE DETAILS</div>
                                <div className="price-details">

                                    <div className="price d-flex justify-content-between">
                                        <h3>Price (2 Items)</h3>
                                        <h3>₹25,998</h3>
                                    </div>

                                    <div className="discount d-flex justify-content-between">
                                        <h3>Discount</h3>
                                        <h3 className="green">-₹3000</h3>
                                    </div>

                                    <div className="delivery-chg d-flex justify-content-between">
                                        <h3>Delivery Charge</h3>
                                        <h3 className="green">FREE</h3>
                                    </div>
                                </div>
                                <div className="total-price d-flex justify-content-between">
                                    <h3>Total Amount</h3>
                                    <h3>₹22,998</h3>
                                </div>
                                
                                <div className="total-discount">
                                    <h3 className='green'>You will save ₹3,000 on this order</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartMain