
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import External1 from './external/External1';
import External2 from './external/External2';
import NotFound from './pages/NotFound';

const AppRouter = () => {
    return (
        <Router basename="/Portfolio-Web/build">
            <Routes>
                <Route path="/spa" element={<App/>} />
                <Route path="/external1" element={<External1/>} />
                <Route path="/external2" element={<External2/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
