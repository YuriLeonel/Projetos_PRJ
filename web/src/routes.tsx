import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Point from './pages/Points';
import CreatePoint from './pages/CreatePoint';
import Item from './pages/Item';

const createdRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home />}/>
                <Route path="/create-point" element= {<CreatePoint />}/>
                <Route path="/points" element= {<Point />}/>
                <Route path="/items" element= {<Item />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default createdRoutes;