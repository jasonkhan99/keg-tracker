import React from "react";
import { v4 } from 'uuid';

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.brand.value);
    console.log(event.target.name.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
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

export default NewKegForm;