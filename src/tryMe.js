const react = require('react');
const { Elements } = require('./PubChemElements');


const elements = [...Elements];
let selectedValue = elements[47];


<ElementCard 
  className="element-card-"{...selectedValue.name}
  name={selectedValue.name}
  atomicNumber={selectedValue.atomicNumber}
  atomicMass={selectedValue.atomicMass}
  groupBlock={selectedValue.groupBlock}
  symbol={selectedValue.symbol}
  
 />

let color = "";
const getColor = () => {

  if (selectedValue.groupBlock === "Nonmetal") {
    return color = "green"
  } else if (selectedValue.groupBlock === "Noble gas") {
    return color = "purple"
  } else if (selectedValue.groupBlock === "Alkali metal") {
    return color = "blue"
  } else if (selectedValue.groupBlock === "Alkaline earth metal") {
    return color = "brown"
  } else if (selectedValue.groupBlock === "Metalloid") {
    return color = "cyan"
  } else if (selectedValue.groupBlock === "Halogen") {
    return color = "pink"
  } else if (selectedValue.groupBlock === "Post-transition metal") {
    return color = "red";
  } else if (selectedValue.groupBlock === "Transition metal") {
    return color = "navy"
  } else if (selectedValue.groupBlock === "Lanthanide") {
    return color = "neon green"
  } else if (selectedValue.groupBlock === "Actinide") {
    return color = "orange"
  } else {
    return color = "black"
  }

};

getColor(selectedValue);


const ElementCells = () => {
  return (
  <div className="element-card">
    <div className="card-top">
      <h1 style={{ color }} >{selectedValue.symbol} </h1>
      <h4 style={{ color }}>{selectedValue.atomicNumber}</h4>
    </div>

    <h4>{selectedValue.name}</h4>
    <h4>mass: {selectedValue.atomicMass}</h4>
    <h4>{selectedValue.groupBlock}</h4>
  </div>
  )
};


export default ElementCells;