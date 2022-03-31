import React from 'react';
import './deliveryCollections.css';
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from './deliveryItem';

const deliveryItems = [
  {
    id: 1,
    title: 'Pizza',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
  },
  {
    id: 2,
    title: 'Rolls',
    cover:
      'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
  },
  {
    id: 3,
    title: 'Biryani',
    cover:
      'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
  },
  {
    id: 4,
    title: 'Chicken',
    cover:
      'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
  },
  {
    id: 5,
    title: 'Momos',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png',
  },
  {
    id: 6,
    title: 'Chowmein',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png',
  },
  {
    id: 7,
    title: 'Burger',
    cover:
      'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
  },
  {
    id: 8,
    title: 'Noodles',
    cover:
      'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png',
  },
  {
    id: 9,
    title: 'Ice Cream',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png',
  },
  {
    id: 10,
    title: 'Phucka',
    cover:
      'https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png',
  },
  {
    id: 11,
    title: 'Tea',
    cover:
      'https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png',
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <div className='collection-title'>Eat whatever you like</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return (
              <>
                <DeliveryItem item={item} />
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
