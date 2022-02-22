import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Components/HomePage/Header';
import Home from './Pages/Home'
import Detail from './Pages/Detail';
import Listing from './Pages/Listing';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';

const Router = () => {
    return (
        <React.Fragment>
            <div>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='list' element={<Listing />} />
                        <Route path='detail' element={<Detail />} />
                        <Route path='cart' element={<Cart />} />

                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </React.Fragment>
    )
}

export default Router