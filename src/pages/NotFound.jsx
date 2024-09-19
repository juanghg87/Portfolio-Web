import React from 'react';
import Sidebar from '../components/sidebar/SideBar';
import "./notfound.scss";


const NotFound = () => {
  return (
    <div>
      <Sidebar />
      <div class="site">
        <div class="sketch">
          <div class="bee-sketch red"></div>
          <div class="bee-sketch blue"></div>
        </div>

        <h1 className='h1NotFound'>404:
          <small>Page Not Found</small></h1>
      </div>
    </div>
  )
}

export default NotFound;