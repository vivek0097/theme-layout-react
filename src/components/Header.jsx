import React, {useState} from 'react';
import '../components/css/header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose, MdOutlineEmail, MdDashboard } from 'react-icons/md';
import { RiSettings3Line, RiSearchLine  } from 'react-icons/ri';
import { IoNotificationsOutline } from 'react-icons/io5';
import { GlobalSearch } from './GlobalSearch';

const Header = ({ toggleSidebar, isSidebarOpen  }) => {


  return (
    <header className="app-header">
        <div className='container-fluid'> 
          <div className="row">
            <div className="col-lg-1 col-3  ps-lg-3 ps-0 pe-0">
             <button className="toggle-button " onClick={toggleSidebar}>
                 {isSidebarOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
             </button>
             <span className='d-lg-block  d-none pt-2'><MdDashboard size={30} style={{color:'#7294ff'}} /></span>
            </div>
            <div className="col-lg-11 col-9 d-flex flex-wrap ps-0 pe-0">
            <div className='col-lg-6 col-md-6 col-12 d-flex justify-content-start mb-lg-0 mb-2 mt-1'>
              <GlobalSearch />
            </div>


            {/* --for right profile section */}
            <div className='col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center icon-container'>
              <div className="icon-wrapper">
                <MdOutlineEmail size={24} />
              </div>
              <div className="icon-wrapper">
                <RiSettings3Line size={24} />
              </div>
              <div className="icon-wrapper notification-wrapper me-3">
                <IoNotificationsOutline size={24} />
                <div className="notification-dot"></div>
              </div>
              <div className="profile-icon-wrapper">
                <img src="https://png.pngtree.com/background/20230519/original/pngtree-the-batman-face-in-the-dark-picture-image_2657106.jpg" alt="Profile" className="profile-image" />
              </div>
            </div>
            </div>
            
          </div>
        </div>


    </header>
  );
};

export default Header;
