import React from 'react';
import './delivery.css';
import Filters from '../common/filters';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title: 'Filter',
  },
  { id: 2, title: 'Reating: 4.0+' },
  { id: 3, title: 'Safe and Hygienic' },
  { id: 4, title: 'Pure Veg' },
  {
    id: 5,
    title: 'Delivery Time',
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
  },
  { id: 6, title: 'Great Offer' },
];

const Delivery = () => {
  return (
    <>
      <div className='max-width'>
        <Filters filterlist={deliveryFilters} />
      </div>
    </>
  );
};

export default Delivery;
