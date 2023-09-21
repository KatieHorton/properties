import { Elements } from './PubChemElements.js';
import { useState } from 'react';
// import Dropdown from './dropdown.js';

const elements = Elements.map(element => element);

export default function CalcInputForm() {
  return (
    <>
      <Input label="element" />
      <Input label="mass in grams" />
    </>
  );
}
    
function Input({ label }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
// export default function CalcInputForm() {
//     let [element, setElement] = useState('');
//     let [massInGrams, setMassInGrams] = useState(0);

//     let totalMoles;

//     function handleMassInGramsChange(e) {
//         setMassInGrams(massInGrams = e.target.value);
//     }

//     function handleElementChange(e) {
//         setElement(element = e.target.value);
//     }


//     function handleReset(e) {
//         setElement(element = '');
//         setMassInGrams(massInGrams = '0');
//     }
//     function handleSubmit(element, massInGrams) {
//         let molarMass = element.atomicMass;
//         totalMoles = massInGrams / molarMass;
//         return totalMoles;
//     }

//     return (
//         <div className="Calc-Input-Form">
//             <form onSubmit={e => onSubmit = { handleSubmit }} handleReset={handleReset} handleMassInGramsChange={handleMassInGramsChange}>


//                 <button onSubmit={onHandleSubmit}>submit</button>
//                 <button onSubmit={handleReset}>reset</button>
//                 <div className="solution">
//                     <h4>{totalMoles} mol  </h4>
//                 </div>
//             </form>

//         </div>
//     )
// };