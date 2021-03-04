import React from "react";
import PropTypes from "prop-types";

class ChildComponent extends React.Component {
  render() {
    const { objValue } = this.props;
    return (
      <div>
        <div>객체값 : {String(Object.defineProperties(objValue))}</div>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  //객체 프로퍼티
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default ChildComponent;
