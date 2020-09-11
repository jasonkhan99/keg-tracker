import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='brand'
          placeholder='Brand/Brewery'
        />
        <input
          type='text'
          name='name'
          placeholder='Name' 
        />
        <input
          type='text'
          name='price'
          placeholder='Price' 
        />
        <input
          type='text'
          name='alcoholContent'
          placeholder='ABV' 
        />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;