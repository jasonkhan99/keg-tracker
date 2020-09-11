import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h2>{keg.brand}</h2>
      <h3>{keg.names}</h3>
      <h4>{keg.price}</h4>
      <h4>{keg.alcoholContent}</h4>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;