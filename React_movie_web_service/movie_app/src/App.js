import React from 'react';

function Food({fav}) {    // props.fav == {fav}
  return <h3>I like {fav}</h3>;
}

// function Food(props) {
// return <h3>I like {props.fav}</h3>;
// }

function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
      <Food fav = "kimchi" />    {/* Food component에 kimchi라는 value로 porp(속성) fav를 줌 */}
      <Food fav = "ramen" />
      <Food fav = "samgiopsal" />
      <Food fav = "chukumi" />
    </div>
  )
}

export default App;
