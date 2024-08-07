
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { BiBarChartSquare } from 'react-icons/bi';
import { TbCheckupList } from 'react-icons/tb';
import { CiWallet } from 'react-icons/ci';
import { BsBagCheckFill } from 'react-icons/bs';
import './css/sidebar.css';
// import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (

    <aside className={`sidebar ${isCollapsed ? 'collapsed ' : ''}`}>
      {/* <button className="collapse-toggle" onClick={toggleSidebar}>
        {isCollapsed ? <MdOutlineKeyboardArrowRight /> : <MdOutlineKeyboardArrowLeft />}
      </button> */}
      <ul className="menu">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            <span className="icon"><TiHome /></span>
            {/* {!isCollapsed && <span className="menu-name">Home</span>} */}
          </NavLink>
        </li>
        <li>
          <NavLink to="/bar-charts" className="nav-link" activeClassName="active">
            <span className="icon"><BiBarChartSquare /></span>
            {/* {!isCollapsed && <span className="menu-name">Charts</span>} */}
          </NavLink>
        </li>
        <li>
          <NavLink to="/table-list" className="nav-link" activeClassName="active">
            <span className="icon"><TbCheckupList /></span>
            {/* {!isCollapsed && <span className="menu-name">Lists</span>} */}
          </NavLink>
        </li>
        <li>
          <NavLink to="/wallet" className="nav-link" activeClassName="active">
            <span className="icon"><CiWallet /></span>
            {/* {!isCollapsed && <span className="menu-name">Wallet</span>} */}
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-link" activeClassName="active">
            <span className="icon"><BsBagCheckFill /></span>
            {/* {!isCollapsed && <span className="menu-name">Shoping Bag</span>} */}
          </NavLink>
        </li>
      </ul>
    </aside>
   
  );
};

export default Sidebar;
















// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../components/css/sidebar.css';

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <ul className="menu">
//         <li>
//           <NavLink to="/" className="nav-link" activeClassName="active">
//             <span className="icon">🏠</span>
//             <span className="menu-name">Home</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/documents" className="nav-link" activeClassName="active">
//             <span className="icon">📄</span>
//             <span className="menu-name">Documents</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/settings" className="nav-link" activeClassName="active">
//             <span className="icon">⚙️</span>
//             <span className="menu-name">Settings</span>
//           </NavLink>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
