import React from 'react'
import CardComponent from './UtilityComponent/CardComponent';
import { FaShoppingBasket, FaDollarSign } from 'react-icons/fa';
import { BsBagCheckFill, BsBagX } from 'react-icons/bs';
import { BiSolidDownArrow, BiSolidUpArrow} from "react-icons/bi";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import BarChart from './UtilityComponent/BarChart';
import TableList from './UtilityComponent/TableList';
import { BiTargetLock } from 'react-icons/bi';
import { FaHamburger } from 'react-icons/fa';
import { BiDish } from 'react-icons/bi';

import DynamicDropdown from './UtilityComponent/DynamicDropdown';
import Feedback from './Feedback';


//--dropdoen json---------
const dropdownCategories = [
  {
    category: 'Goals',
    items: [
      {
        name: 'Goals',
        icon: <BiTargetLock />,
        iconBgColor: '#C8623A',
        iconColor: '#7e331f'
      }
   
    ]
  },
  {
    category: 'Popular Dishes',
    items: [
      {
        name: 'Popular Dishes',
        icon: <FaHamburger />,
        iconBgColor: '#5e73c3',
        iconColor: '#293368'
      }
   
    ]
  },
  {
    category: 'Menus',
    items: [
      {
        name: 'Menus',
        icon: <BiDish />,
        iconBgColor: '#156d97',
        iconColor: '#20485f'
      }
   
    ]
  }
];


const Dashboard = () => {
  return (
 
    <div className="container-fluid  ps-0 pe-0">
      <h5 className='text-md pt-1 pb-1'>Dashboard</h5>
         {/* ---row  one */}
      <div className="row mb-3">
        <div className="col-12 col-md-8 mb-3 mb-md-0">
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3">
            <div className="col d-flex justify-content-center">
              <CardComponent title="Total Orders"  bgColor="#273560" iconColor="#2f67f7" icon={<FaShoppingBasket />} cardTotal="75" percent="3%" updownArrow={<BiSolidUpArrow />} />
            </div>
            <div className="col d-flex justify-content-center">
              <CardComponent title="Total Delevered"  bgColor="#005246" iconColor="#00CD8B" icon={<BsBagCheckFill />}  cardTotal="70" percent="3%" updownArrow={<BiSolidDownArrow />} />
            </div>
            <div className="col d-flex justify-content-center">
              <CardComponent title="Total Canceled"  bgColor="#663136" iconColor="#FF504E" icon={<BsBagX />} cardTotal="05" percent="3%" updownArrow={<BiSolidUpArrow />}   />
            </div>
            <div className="col d-flex justify-content-center">
              <CardComponent title="Total Revenue"  bgColor="#642A47" iconColor="#F53990" icon={<FaDollarSign />} cardTotal="$12k" percent="3%" updownArrow={<BiSolidDownArrow />}  />
            </div>
          </div>
        </div>
        {/* -----right container */}
        <div className="col-12 col-md-4" style={{ minHeight: '140px',  }}>
          <div className="p-3 box-bg h-100 card">
     
          <div className="card-body pb-0 pt-0 ps-0 pe-0">
            <div className='d-flex flex-wrap justify-content-between ps-0 pe-0 col-12'>
             <div className='d-block col-lg-6 col-md-12 col-6 mb-lg-0 mb-md-3 mb-1'>
             <h6 className="card-title text-sm pt-0 mt-0">Net Profit</h6>
             <span style={{ color: '#ffffff', fontSize: '25px', fontWeight:'900' }}>$ 6759.25</span>
             </div>
         
             <div className='col-lg-6  col-md-12 col-62 mb-lg-0 mb-md-3 mb-1 d-flex  justify-content-center' style={{ width: 70, height: 70 }}>
         
            <CircularProgressbar
              value={70} 
              text={
                <tspan dy={-10} dx={0} style={{ fontSize: '10px', fill: '#fff' }}>
                  <tspan x="35" style={{ fontSize: '14px', fill: '#fff', fontWeight:'800' }}>70%</tspan>
                  <tspan x="40" dy="1.8em" style={{ fontSize: '9px', fill: '#fff' }}>Goal</tspan>
                  <tspan x="32" dy="1.9em" style={{ fontSize: '9px', fill: '#fff' }}>Dashboard</tspan>
                </tspan>
              }
              styles={buildStyles({
                textColor: "#fff",
                trailColor: '#273661',
                pathColor: '#6091FD',
              })}
            />
      
             </div>
            </div>

        <div className='d-flex justify-content-between mb-0 '>
            <span style={{ color: '#ffffff', fontSize: '22px', fontWeight:'1000' }} ><BiSolidUpArrow size={20} style={{color:'#57E471', }} /></span>
            <span > <span className='pe-1 text-sm'> "The values more has been ordered"</span> </span>
        </div>
      </div>
          </div>
        </div>
      </div>
    {/* ---row  two */}
      <div className="row mb-3">
        <div className="col-12 col-md-8 mb-3 mb-md-0" style={{ height: '300px' }}>
          <div className=" h-100 card box-bg ">

           <BarChart />
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0" style={{ height: '300px' }}>
          <div className="p-3 box-bg h-100 card">
             <DynamicDropdown categories={dropdownCategories} />

          </div>
        </div>
      </div>                                                           
    {/* ---row  three */}
      <div className="row mb-3 ">
        <div className="col-12 col-md-8 mb-3 mb-md-0" style={{ height: '450px' }}>
          <div className=" h-100  card box-bg  ">
            <TableList />
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0 " style={{ height: '450px' }}>
          <div className="p-3 box-bg h-100 card">
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard