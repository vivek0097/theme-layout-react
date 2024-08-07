
import React from 'react';
import '../css/tableList.css';

const data = [
  {
    key: '1',
    customer: 'John Doe',
    orderNo: 123456789,
    amount: '$120.00',
    status: 'Delivered',
    imgPath: 'https://img.freepik.com/free-photo/stylish-handsome-young-businessman-sitting-street-amazing-smile-brown-hairs-eyes-wearing-hipster-plaid-shirt-beige-trousers-sunglasses-watches-posing-near-restaurant_291049-1497.jpg'
  },
  {
    key: '2',
    customer: 'Jane Smith',
    orderNo: 987654321,
    amount: '$250.00',
    status: 'Pending',
    imgPath: 'https://media.istockphoto.com/id/1368808461/photo/young-woman-feeding-fish-on-tropical-beach.jpg?s=612x612&w=0&k=20&c=qIdzSEI3BQvGliysV65R5NzHGuhX_4Mq_PU7nBhhsBQ='
  },
  {
    key: '3',
    customer: 'Sam Wilson',
    orderNo: 123789456,
    amount: '$180.00',
    status: 'Cancelled',
    imgPath: 'https://i.pinimg.com/originals/b0/8a/85/b08a85fffec86beae749e654c854bdb0.png'
  },
  {
    key: '4',
    customer: 'Sara Lee',
    orderNo: 789123456,
    amount: '$300.00',
    status: 'Delivered',
    imgPath: 'https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg'
  },
  {
    key: '5',
    customer: 'David Brown',
    orderNo: 456789123,
    amount: '$90.00',
    status: 'Pending',
    imgPath: 'https://i.pinimg.com/564x/4f/9f/85/4f9f857c7e0f3c9a6a498d201abf37e5.jpg'
  },
  {
    key: '6',
    customer: 'Emily Davis',
    orderNo: 654321789,
    amount: '$110.00',
    status: 'Cancelled',
    imgPath: 'https://i.pinimg.com/236x/af/9a/78/af9a78d50e3afb8d7965d9e0ae015e6b.jpg'
  },
];

const TableList = () => {
  return (
    <div className='container box-bg p-3'>
      <span className='text-md'>Recent Orders</span>
      <div className="table-responsive ">
        <table className=" custom-table ">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.key} >
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={item.imgPath}
                      alt={item.customer}
                      style={{ borderRadius: '50%', width: 30, height: 30, marginRight: 8 }}
                    />
                    {item.customer}
                  </div>
                </td>
                <td>{item.orderNo}</td>
                <td>{item.amount}</td>
                <td>
                  <span
                    style={{
                      color: getStatusColor(item.status),
                      backgroundColor: getStatusBackgroundColor(item.status),
                      
                      borderRadius: 15,
                      padding: '1px 8px',
                    }}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Utility functions to get colors based on status
const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return '#288a71';
    case 'Pending':
      return '#9A555A';
    case 'Cancelled':
      return '#9A555A';
    default:
      return '#000';
  }
};

const getStatusBackgroundColor = (status) => {
  switch (status) {
    case 'Delivered':
      return '#1b5247';
    case 'Pending':
      return '#613035';
    case 'Cancelled':
      return '#613035';
    default:
      return '#fff';
  }
};

export default TableList;















// import React from 'react';
// import { Table, Tag, Avatar } from 'antd';

// import '../css/tableList.css'


// const data = [
//   {
//     key: '1',
//     customer: 'John Doe',
//     orderNo: 123456789,
//     amount: '$120.00',
//     status: 'Delivered',
//     imgPath:'https://img.freepik.com/free-photo/stylish-handsome-young-businessman-sitting-street-amazing-smile-brown-hairs-eyes-wearing-hipster-plaid-shirt-beige-trousers-sunglasses-watches-posing-near-restaurant_291049-1497.jpg'
//   },
//   {
//     key: '2',
//     customer: 'Jane Smith',
//     orderNo: 987654321,
//     amount: '$250.00',
//     status: 'Pending',
//     imgPath:'https://media.istockphoto.com/id/1368808461/photo/young-woman-feeding-fish-on-tropical-beach.jpg?s=612x612&w=0&k=20&c=qIdzSEI3BQvGliysV65R5NzHGuhX_4Mq_PU7nBhhsBQ='
//   },
//   {
//     key: '3',
//     customer: 'Sam Wilson',
//     orderNo: 123789456,
//     amount: '$180.00',
//     status: 'Cancelled',
//     imgPath:'https://i.pinimg.com/originals/b0/8a/85/b08a85fffec86beae749e654c854bdb0.png'
//   },
//   {
//     key: '4',
//     customer: 'Sara Lee',
//     orderNo: 789123456,
//     amount: '$300.00',
//     status: 'Delivered',
//     imgPath:'https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg'
//   },
//   {
//     key: '5',
//     customer: 'David Brown',
//     orderNo: 456789123,
//     amount: '$90.00',
//     status: 'Pending',
//      imgPath:'https://i.pinimg.com/564x/4f/9f/85/4f9f857c7e0f3c9a6a498d201abf37e5.jpg'
//   },
//   {
//     key: '6',
//     customer: 'Emily Davis',
//     orderNo: 654321789,
//     amount: '$110.00',
//     status: 'Cancelled',
//     imgPath:'https://i.pinimg.com/236x/af/9a/78/af9a78d50e3afb8d7965d9e0ae015e6b.jpg'
//   },
// ];


// const columns = [
//   {
//     title: 'Customer',
//     dataIndex: 'customer',
//     key: 'customer',
//     width:200,
//     render: (text, record) => (
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <Avatar
//           src={record.imgPath} 
//           style={{ marginRight: 8 }}
//           size={30}
//         />
//         {text}
//       </div>
//     ),
//   },
//   {
//     title: 'Order No.',
//     dataIndex: 'orderNo',
//     key: 'orderNo',
//     width:100,
//   },
//   {
//     title: 'Amount',
//     dataIndex: 'amount',
//     key: 'amount',
//     width:100,
//     align:'right',
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     key: 'status',
//     width:150,
//     render: (status) => {
//       let color;
//       let backgroundColor;
//       switch (status) {
//         case 'Delivered':
//           color = '#288a71';
//           backgroundColor = '#1b5247';
//           break;
//         case 'Pending':
//           color = '#9A555A';
//           backgroundColor = '#613035';
//           break;
//         case 'Cancelled':
//           color = '#9A555A';
//           backgroundColor = '#613035';
//           break;
//         default:
//           break;
//       }
//       return (
//         <Tag color={color} style={{ backgroundColor, borderRadius: 15, padding: '1px 8px' }}>
//           {status}
//         </Tag>
//       );
//     },
//   },
// ];

// const TableList = () => {



//   return (
//     <div className='box-bg p-3 '>
     
//       <span className='text-md'>Recent Orders</span>
//       <Table 
//       columns={columns} 
//       dataSource={data} 
//       pagination={false}  
//       scroll={{  x: 'max-content',  y: 400  }} 
//     className="custom-table" />;
   
//     </div>
//   )
  
// };



// export default TableList