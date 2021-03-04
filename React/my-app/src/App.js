import React from "react";
import BooleanComponent from "./03/BooleanComponent";

class App extends React.Component {
  render() {
    return (
      (
        <div>
          <b>지루할 때 : </b>
          <BooleanComponent board />
        </div>
      ),
      (
        <div>
          <b>즐거울 때 : </b>
          <BooleanComponent />
        </div>
      )
    );
  }
}

export default App;
