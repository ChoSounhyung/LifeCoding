import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img scr={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://m.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg"
  },
  {
    name: "Samgyeopsal",
    image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },
  {
    name: "Bibimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2015/06/01/0467fec40dc5df750f026e7a87b4b1261.jpg"
  },
  {
    name: "Doncasu",
    image: "https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg"
  },
  {
    name: "Kimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg"
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (    //dish is object
      <Food name = {dish.name} picture = {dish.image} />
      ))}
    </div>
  );
}

export default App;
