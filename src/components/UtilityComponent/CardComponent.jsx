
import React from 'react';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';

const CardComponent = ({ title, bgColor, iconColor, icon, cardTotal, percent, updownArrow }) => {
  return (
    <div className="card box-bg" style={{ width: '100%', height: '140px' }}>
    
      <div className="card-body">
      <div 
          className="d-flex align-items-center justify-content-center" 
          style={{ 
            width: '50px', 
            height: '50px', 
            backgroundColor: bgColor, 
            borderRadius: '15px',
          }}
        >
            <div  style={{ color: iconColor, fontSize: '25px' }}>
            {icon}
          </div>
        </div>
        <div>
        <h6 className="card-title text-sm pt-2">{title}</h6>
        </div>
        <div className='d-flex justify-content-between'>
            <span style={{color:'#ffffff', fontSize:'22px', fontWeight:'800'}}>{cardTotal}</span>
            <span style={{ color: updownArrow.type === BiSolidUpArrow ? 'green' : 'red' }}>
           <span className='pe-1'>
            {updownArrow.type === BiSolidUpArrow ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          </span>
          {percent}
        </span>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
