import React from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

// Styles
import "./styles/globals.scss";

// Components
import SharedNavbar from './components/SharedNavbar';

// Pages
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import TokensPage from './pages/TokensPage';



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<SharedNavbar />} >
                        <Route index element={<HomePage />} />
                        <Route path='/pricingPage' element={<PricingPage />} />
                        <Route path='/aboutPage' element={<AboutPage />} />
                        <Route path='/tokensPage' element={<TokensPage />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
