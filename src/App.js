import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import BarChart from './components/UtilityComponent/BarChart';
import TableList from './components/UtilityComponent/TableList';
import Wallet from './components/UtilityComponent/Wallet';
import ShopingCart from './components/UtilityComponent/ShopingCart';



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);



  return (
       <Router>
    <div className="App">
      <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="bar-charts" element={<BarChart />} />
            <Route path="table-list" element={<TableList />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="cart" element={<ShopingCart />} />
        
          </Routes>
        </div>
        {sidebarOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
      </div>
    </div>
    </Router>
  );
}

export default App;
