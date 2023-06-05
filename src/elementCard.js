import React, { usewState } from 'react';
import { Elements } from './PubChemElements';
import './App.css';
// import { View } from 'react-native';
// import { SafeAreaView, Stylesheet } from 'react-native';


// npm install react-native-picker-select
// npm install react-native-elements
/*
const ElementPicker = ({ onElementChange }) => {
  return (
    <View>
      <RNPickerSelect onValueChange={onElementChange}
        items={Elements} />
    </View>
  )
};
*/

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
    return color = "green"
  } else if (element.groupBlock === "Noble gas") {
    return color = "purple"
  } else if (element.groupBlock === "Alkali metal") {
    return color = "blue"
  } else if (element.groupBlock === "Alkaline earth metal") {
    return color = "brown"
  } else if (element.groupBlock === "Metalloid") {
    return color = "cyan"
  } else if (element.groupBlock === "Halogen") {
    return color = "pink"
  } else if (element.groupBlock === "Post-transition metal") {
    return color = "red";
  } else if (element.groupBlock === "Transition metal") {
    return color = "navy"
  } else if (element.groupBlock === "Lanthanide") {
    return color = "neon green"
  } else if (element.groupBlock === "Actinide") {
    return color = "orange"
  } else {
    return color = "black"
  }

};
  return (<li value={element.name} 
  symbol={element.symbol}
  mass={element.atomicMass}
  groupBlock={element.groupBlock}
  color={getColor(element)}>
    <h1 style={{color}}>{element.symbol}</h1>
    <p>{element.name}</p>
    <p>{element.atomicMass}</p>
  </li>)
})

const ElementsList = () => {
  return <div>
    <ul>
      {listItems}
    </ul>
  </div>
}

export default ElementsList;


// let color;

// const getColor = () => {

//   if (element.groupBlock === "Nonmetal") {
//     return color = "green"
//   } else if (element.groupBlock === "Noble gas") {
//     return color = "purple"
//   } else if (element.groupBlock === "Alkali metal") {
//     return color = "blue"
//   } else if (element.groupBlock === "Alkaline earth metal") {
//     return color = "brown"
//   } else if (element.groupBlock === "Metalloid") {
//     return color = "cyan"
//   } else if (element.groupBlock === "Halogen") {
//     return color = "pink"
//   } else if (element.groupBlock === "Post-transition metal") {
//     return color = "red";
//   } else if (element.groupBlock === "Transition metal") {
//     return color = "navy"
//   } else if (element.groupBlock === "Lanthanide") {
//     return color = "neon green"
//   } else if (element.groupBlock === "Actinide") {
//     return color = "orange"
//   } else {
//     return color = "black"
//   }

// };

// const ElementCard = ({ element }) => {
//   getColor(element);
//   return (

//     <div className="element-card">
//       <div className="card-top" >
//         <h1 style={{ color }} >{element.symbol} </h1>
//         <h4 style={{ color }}>{element.atomicNumber}</h4>
//       </div>

//       <h4>{element.name}</h4>
//       <h4>{element.atomicMass}</h4>
//       <h4>{element.groupBlock}</h4>
//     </div>

//   )
// };




// const DisplayCard = () => {
//   const [selectedElement, setSelectedElement] = useState(null);

//   const handleElementChange = (newElement) => {
//     setSelectedElement(newElement);
//   };

//   return (
//     <SafeAreaView style={styles.container} >
//       <ElementPicker onElementChange={handleElementChange} />
//       </SafeAreaView>
//   )
// };

// class SelectedElement extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = { element: '' };
//   }

//   handleChange(e) {
//     this.setState({ element: e.target.value });
//   }

//   render() {
//     const element = this.state.element;
//     return (
//       <fieldset>
//         <legend>Enter an Element:</legend>
//         <input
//           value={element}
//           onChange={this.handleChange} />
//         <SelectedElement
//           result={parseFloat(element)} />
//       </fieldset>
//     );
//   }
// }
// export default SelectedElement;