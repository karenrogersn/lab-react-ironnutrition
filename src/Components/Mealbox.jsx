import React, { Component } from 'react';
import meals from '../meals.json';
import './../App.scss';

const Mealbox = (props) => {
  //console.log(props);
  return (
    <div className="media">
      <img
        className="img-thumbnail mr-3 mw-25 border-0"
        style={{ maxWidth: '10em' }}
        src={props.img}
        alt="meal image"
      />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{props.name}</h5>
        <small>{props.calories} cal</small>
      </div>
      <div className="column">
        <form className="row">
          <input className="form-control col-9" type="number" value={props.quantity} />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    </div>
  );
};

export default Mealbox;
