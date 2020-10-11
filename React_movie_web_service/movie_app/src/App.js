import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img scr={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image: "https://m.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg",
  },
  {
    id:2,
    name: "Samgyeopsal",
    image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/06/01/0467fec40dc5df750f026e7a87b4b1261.jpg",
    rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image: "https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg",
    rating: 5.5
  },
  {
    id:5,
    name: "Kimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 4.7
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (    //dish is object
      <Food key={dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />
      ))}
    </div>
  );
}

export default App;
