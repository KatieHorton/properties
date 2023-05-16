import React from 'react';
// import { Elements } from './PubChemElements';
import './App.css';
// import { Dropdown } from './dropdown.js';

// const elements = [...Elements];
//let selectedValue = elements[11];
// must get selected value from dropdown!

// const getValue = (props) => {
//   if(!selectedValue) {
//     return null
//   } else {
//     return selectedValue = props.selectedValue
//   }
// };

const Cards = (props) => {
  let color = "";
  const getColor = () => {

    if (props.groupBlock === "Nonmetal") {
      return color = "green"
    } else if (props.groupBlock === "Noble gas") {
      return color = "purple"
    } else if (props.groupBlock === "Alkali metal") {
      return color = "blue"
    } else if (props.groupBlock === "Alkaline earth metal") {
      return color = "brown"
    } else if (props.groupBlock === "Metalloid") {
      return color = "cyan"
    } else if (props.groupBlock === "Halogen") {
      return color = "pink"
    } else if (props.groupBlock === "Post-transition metal") {
      return color = "red";
    } else if (props.groupBlock === "Transition metal") {
      return color = "navy"
    } else if (props.groupBlock === "Lanthanide") {
      return color = "neon green"
    } else if (props.groupBlock === "Actinide") {
      return color = "orange"
    } else {
      return color = "black"
    }

  };

  getColor(props);



  return (
    <div className="element-card">
      <div className="card-top" s>
        <h1 style={{ color }} >{props.symbol} </h1>
        <h4 style={{ color }}>{props.atomicNumber}</h4>
      </div>

      <h4>{props.name}</h4>
      <h4>mass: {props.atomicMass}</h4>
      <h4>{props.groupBlock}</h4>
    </div>
  )
};

export default Cards;