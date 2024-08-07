import React, { useState } from 'react';
import { GrFormNext } from 'react-icons/gr';
import { IoChevronDown } from 'react-icons/io5';
import '../css/dynamicDropown.css'; 

const DynamicDropdown = ({ categories }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
    {categories.map((category, index) => (
      <div key={index} className="dropdown-container">
        <div className="dropdown-title" onClick={() => handleToggle(index)}>
          <div className="dropdown-icon" style={{ backgroundColor: category.items[0].iconBgColor }}>
           
            <span style={{ color: category.items[0].iconColor }}>
              {category.items[0].icon}
            </span>
          </div>
          <span className="dropdown-text">
            {category.items[0].name}
          </span>
          <span className="dropdown-arrow">
            {openIndex === index ? <IoChevronDown /> : <GrFormNext />}
          </span>
        </div>
        {openIndex === index && (
          <div className="dropdown-menu">
            {category.items.map((item, idx) => (
              <div key={idx} className="dropdown-item">
                <div className="dropdown-icon" style={{ backgroundColor: item.iconBgColor }}>
                  
                  <span style={{ color: item.iconColor }}>
                    {item.icon}
                  </span>
                </div>
                <span className="dropdown-text">{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
  );
};

export default DynamicDropdown;