import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Dropdown, Menu } from 'antd';
import { BiSolidDownArrow } from 'react-icons/bi';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const [selectedFilter, setSelectedFilter] = useState('weekly');

  const handleMenuClick = (e) => {
    setSelectedFilter(e.key);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      style={{ backgroundColor: '#4C4D52', color: '#fff' }}
    >
      <Menu.Item key="weekly" style={{ padding: '4px 10px', color:'#fff' }}>
        Weekly
      </Menu.Item>
      <Menu.Item key="monthly" style={{ padding: '4px 10px', color:'#fff' }}>
        Monthly
      </Menu.Item>
      <Menu.Item key="yearly" style={{ padding: '4px 10px', color:'#fff' }}>
        Yearly
      </Menu.Item>
    </Menu>
  );

   const getData = (filter) => {
    switch (filter) {
      case 'weekly':
        return [2, 15, 7, 8, 9, 14, 11, 11, 13, 10, 13, 14, 13, 12, 11, 10, 5, 9, 6, 3, 7, 10, 11];
      case 'monthly':
        return [5, 4, 7, 8, 9, 14, 7, 2, 6, 3, 1, 13, 7, 8, 5, 6, 3, 9, 6, 3, 7, 10, 11];
      case 'yearly':
        return [7, 4, 2, 8, 9, 5, 7, 2, 6, 3, 1,6, 7, 2, 5, 4, 3, 9, 4, 3, 7, 10, 3];
      default:
        return [2, 15, 7, 8, 9, 14, 11, 11, 13, 10, 13, 14, 13, 12, 11, 10, 5, 9, 6, 3, 7, 10, 11];
    }
  };

  const data = {
    labels: ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
    datasets: [
      {
        label: 'Data',
        data: getData(selectedFilter),
        backgroundColor: '#7294ff',
        borderRadius: 15,   
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
       
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function(value, index) {
           
            return index % 2 === 0 ? data.labels[index] : '';
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          callback: function(value) {
            return value + 'k';
          },
        },
      },
    },
  };

  return (
    <div
      style={{ width: '100%', height: '100%',  }} 
      className='box-bg p-3 ' 
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0px', marginTop:'0px' }}>
        <span className='text-md mb-0 pb-0'>Activity</span>
        <Dropdown overlay={menu} trigger={['click']} className='mb-0 pb-0'>
          <span className='mt-0 pt-0 mb-0 pb-0' style={{ cursor: 'pointer', color: '#fff', backgroundColor: '#4C4D52', padding: '4px 10px', borderRadius: '15px' }}>
            {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)} <BiSolidDownArrow />
          </span>
        </Dropdown>
      </div>
      <div style={{ width: '100%', height: '100%', }} className='p-3'>
        <Bar data={data} options={options}  />
      </div>
    </div>
  );
};

export default BarChart;
