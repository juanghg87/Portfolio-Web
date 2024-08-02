import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./layout.scss";


const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">hgfdhgfd</Link>
                        {/* <App /> */}
                    </li>
                    <li>
                        <Link to="/external1">External 1</Link>
                        {/* <External1 /> */}
                    </li>
                    <li>
                        <Link to="/external2">External 2</Link>
                        {/* <External2 /> */}
                    </li>
                    <li>
                        <Link to="/*">404 Not Found</Link>
                        {/* <NotFound /> */}
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet/>
        </div>
    )
}

export default Layout