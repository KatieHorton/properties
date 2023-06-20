import React from 'react';
import { Elements } from './PubChemElements';
// import { Popup } from './elementPopup.js';
import './App.css';

// FilterableElementsTable
//     Dropdown
//     ElementsList
//         ElementCategoryRow
//         ElementCellRow 

let elements = [...Elements];


const listItems = elements.map((element) => {
  let color;

  const getColor = () => {

    if (element.groupBlock === "Nonmetal") {
      return color = "rgb(14, 255, 168)"
    } else if (element.groupBlock === "Noble gas") {
      return color = "rgb(224, 156, 255)"
    } else if (element.groupBlock === "Alkali metal") {
      return color = "rgb(137, 242, 255)"
    } else if (element.groupBlock === "Alkaline earth metal") {
      return color = "rgb(116, 175, 255)"
    } else if (element.groupBlock === "Metalloid") {
      return color = "rgb(199, 233, 255)"
    } else if (element.groupBlock === "Halogen") {
      return color = "rgb(255, 187, 224)"
    } else if (element.groupBlock === "Post-transition metal") {
      return color = "rgb(250, 103, 103)";
    } else if (element.groupBlock === "Transition metal") {
      return color = "rgb( 255, 227, 196)"
    } else if (element.groupBlock === "Lanthanide") {
      return color = "rgb(228, 255, 118)"
    } else if (element.groupBlock === "Actinide") {
      return color = "rgb(139, 88, 143)"
    } else {
      return color = "rgb(255, 255, 255)"
    }

  };


  // do something to enlarge the <li> (that has been clicked on), *event handling and 
  // display on top of the <ul> content


  return (<li value={element.name}
    message={element.name}
    symbol={element.symbol}
    mass={element.atomicMass}
    groupBlock={element.groupBlock}
    color={getColor(element)}
  > <button onClick={() => alert(`you clicked a button`)}>
      <div className='item-top'>
        <div className='atomic-number'>
          <p>{element.atomicNumber}</p>
        </div>
        <div className='symbol'>
          <h1 style={{ color }}>{element.symbol}</h1>
        </div>
      </div>
      <p className="element-name">{element.name}</p>
      <p>{element.atomicMass}</p>
      <p style={{ color }}>{element.groupBlock}</p>
    </button>
  </li >)
})

const ElementsList = () => {
  return <div className="Elements-List">
    <ul>
      {listItems}
    </ul>
  </div>
}

export default ElementsList;
