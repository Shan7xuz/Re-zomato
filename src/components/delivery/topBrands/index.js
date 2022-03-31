import React from 'react';
import './topBrands.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandsList = [
  {
    id: 1,
    time: '30 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252746.png?output-format=webp',
  },
  {
    id: 2,
    time: '38 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp',
  },
  {
    id: 3,
    time: '26 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/cc214b60b95cba868170d1a8d66bcab3_1629438962.png?output-format=webp',
  },
  {
    id: 4,
    time: '37 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp',
  },
  {
    id: 5,
    time: '42 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/6799a847a4bfaee73f5e14aaba8cef83_1638193272.png?output-format=webp',
  },
  {
    id: 6,
    time: '43 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp',
  },
  {
    id: 7,
    time: '36 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/a7051eb7ad394aafd5cd278433c32c30_1611558542.png?output-format=webp',
  },
  {
    id: 8,
    time: '29 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/c014b23f65d4d62dae37d9849f423d77_1629439377.png?output-format=webp',
  },
  {
    id: 9,
    time: '31 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188103.png?output-format=webp',
  },
  {
    id: 10,
    time: '22 min',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/03ceb30dbebbf48efaf0ee5732b7773e_1629439318.png?output-format=webp',
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <>
              <div className='top-brands-cover'>
                <img
                  src={brand.cover}
                  alt={brand.time}
                  className='top-brands-image'
                />
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
