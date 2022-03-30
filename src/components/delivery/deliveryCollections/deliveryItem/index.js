import React from 'react';
import './deliveryItem.css';

const DeliveryItem = ({ item }) => {
  return (
    <>
      <div className='delivery-item-cover'>
        <img
          src={item.cover}
          alt={item.title}
          className='delivery-item-image'
        />
      </div>
    </>
  );
};

export default DeliveryItem;
