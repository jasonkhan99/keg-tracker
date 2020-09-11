import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.KegList.map((Keg) =>
        <Keg 
          brand={Keg.brand}
          name={Keg.name}
          price={Keg.price}
          alcoholContent={Keg.alcoholContent}
          key={index}
        />
      )}
    </React.Fragment>
  );
}

export default KegList;