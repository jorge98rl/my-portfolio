import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../view/Landing';
import Error from '../components/Error/Error'
class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="/header" element={<>
                        <Landing/>
                    </>}/>
                </Routes>
            </BrowserRouter>

        );
    }
}

export default Router;