import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Detail from './Pages/Detail';
import Listing from './Pages/Listing';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';

const Router = () => {
    return (
        <React.Fragment>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/list' element={<Listing />} />
                        <Route path='/list/:id' element={<Listing />} />
                        <Route path='/list/:id/:brand' element={<Listing />} />
                        <Route path='/detail' element={<Detail />} />
                        <Route path='/detail/:id' element={<Detail />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </React.Fragment>
    )
}

export default Router