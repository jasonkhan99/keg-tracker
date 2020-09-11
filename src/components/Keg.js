import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h2>{props.brand}</h2>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <h4>{props.alcoholContent}</h4>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
};

export default Keg;