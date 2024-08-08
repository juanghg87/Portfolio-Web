
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import App from './App';
import External1 from './external/External1';
import External2 from './external/External2';
import External3 from './external/External3';
import NotFound from './pages/NotFound';

const AppRouter = () => {
    return (
        <Router basename="/Portfolio-Web/build">
            <Routes>
                
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/external1" element={<External1 />} />
                    <Route path="/external2" element={<External2 />} />
                    <Route path="/external3" element={<External3 />} />
                    <Route path="*" element={<NotFound />} />
                
            </Routes>
        </Router>
    );
};

export default AppRouter;
