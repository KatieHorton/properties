// import { Elements } from './PubChemElements.js';
import { useState } from 'react';
// import Dropdown from './Dropdown.js';


// export default function CalcInputForm() {
//     // let elements = [...Elements];

//     let [selectedElement, setSelectedElement] = useState('');
//     let [massInGrams, setMassInGrams] = useState(0);

//     let moles;

//     function calcMol(selectedElement, massInGrams) {
        
//         let atomicMass = selectedElement.atomicMass;
//         moles = massInGrams / atomicMass;
//         return moles;
//     }


//     function handleMassInGramsChange(e) {
//         setMassInGrams(massInGrams = e.target.value);
//     }
//     function handleSubmit(e) {
//         calcMol(selectedElement, massInGrams)

//     }
//     function handleReset(e) {
//         setSelectedElement(selectedElement = element.name )  
//         setMassInGrams(massInGrams = 0);
//     }


//     return (
//         <div className="Calc-Input-Form">
//             <form onSubmit={e => {e.preventDefault()} } handleReset={handleReset}calcMol={calcMol}handleSubmit={handleSubmit}handleMassInGramsChange={handleMassInGramsChange}>

//                 <input
//                     placeholder="0"
//                     value={massInGrams}
//                     onChange={handleMassInGramsChange}
                    
//                 />

//                 <button onSubmit={handleSubmit}>submit</button>
//                 <button onSubmit={handleReset}>reset</button>
//                 <div className="solution">
//                     <h4>{moles} mol  {selectedElement.symbol}</h4>
//                 </div>
//             </form>

//         </div>
//     )
// }