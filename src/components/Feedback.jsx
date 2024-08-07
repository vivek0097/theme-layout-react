import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';


const feedbackData = [
  {
    id: 1,
    imageUrl: 'https://img.freepik.com/free-photo/stylish-handsome-young-businessman-sitting-street-amazing-smile-brown-hairs-eyes-wearing-hipster-plaid-shirt-beige-trousers-sunglasses-watches-posing-near-restaurant_291049-1497.jpg', 
    name: 'John Doe',
    feedback: 'The food was absolutely lovely, really enjoyed the flavours. The spices were just right!',
  },
  {
    id: 2,
    imageUrl: 'https://media.istockphoto.com/id/1368808461/photo/young-woman-feeding-fish-on-tropical-beach.jpg?s=612x612&w=0&k=20&c=qIdzSEI3BQvGliysV65R5NzHGuhX_4Mq_PU7nBhhsBQ=',
    name: 'Jane Smith',
    feedback: 'A very satisfying meal. The masala in the curry had a nice kick to it, just the way I like it.',
  },
  {
    id: 3,
    imageUrl: 'https://i.pinimg.com/originals/b0/8a/85/b08a85fffec86beae749e654c854bdb0.png',
    name: 'Alice Johnson',
    feedback: 'I loved the biryani; it reminded me of home-cooked food. The portion size was generous as well.',
  },
  {
    id: 4,
    imageUrl: 'https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg',
    name: 'Bob Brown',
    feedback: 'The samosas were crisp and delicious, though the chutney could have been a tad more tangy.',
  },
  {
    id: 5,
    imageUrl: 'https://i.pinimg.com/564x/4f/9f/85/4f9f857c7e0f3c9a6a498d201abf37e5.jpg',
    name: 'Carol White',
    feedback: 'Wonderful experience! The dal was rich and creamy, just how it should be. Great job!',
  },
  {
    id: 6,
    imageUrl: 'https://i.pinimg.com/236x/af/9a/78/af9a78d50e3afb8d7965d9e0ae015e6b.jpg',
    name: 'David Green',
    feedback: 'The naan was fresh and soft, and the butter chicken had a perfect balance of sweetness and spice.',
  },
];

const Feedback = () => {
  return (
    <div className="col-12 col-md-4" style={{ height: '415px', width:'100%' }}>
      <div className="p-3 box-bg h-100 card">
        <h5 className='text-md'>Customers Feedback</h5>
        <Scrollbars
          style={{ height: '100%' }}
          autoHide
          renderTrackVertical={({ style, ...props }) =>
            <div {...props} style={{ ...style, backgroundColor: '#f5f5f5', width: '4px', borderRadius: '2px' }} />}
          renderThumbVertical={({ style, ...props }) =>
            <div {...props} style={{ ...style, backgroundColor: '#f5f5f5', borderRadius: '2px' }} />}
        >
          {feedbackData.map(({ id, imageUrl, name, feedback }) => (
            <div key={id} style={{ display: 'block', alignItems: 'center', marginBottom: '10px' }}>
                <div className='d-flex align-items-center  justify-content-start'>
                <img
                src={imageUrl}
                alt={name}
                style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
              />
                <span style={{ fontWeight: 'normal', color:'#fff' }}>{name}</span>
                </div>
         
              <div>
              
                <p style={{ margin: '5px 0', color:'#fff', fontSize:'13px' }}>{feedback}</p>
              </div>
              <hr style={{color:'#fff', }} />
            </div>
          
          ))}
        </Scrollbars>
      </div>
    </div>
  );
};

export default Feedback;
