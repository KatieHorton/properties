import { Elements } from './PubChemElements.js';
import { useState } from 'react';
// import Dropdown from './Dropdown.js';


export default function CalcInputForm() {
    let elements = [...Elements];

    let [element, setElement] = useState('');
    let [massInGrams, setMassInGrams] = useState(0);

    let moles;
    function calcMol(element, massInGrams) {
        let atomicMass = elements.element.atomicMass;
        moles = massInGrams / atomicMass;
        return moles;
    }


    function handleMassInGramsChange(e) {
        setMassInGrams(massInGrams = e.target.value);
    }
    function handleSubmit(e) {
        calcMol(element, massInGrams)

    }
    function handleReset() {
        setElement(element = '');
        setMassInGrams(massInGrams = 0);
    }


    return (
        <div className="Calc-Input-Form">
            <form onSubmit={e => {e.preventDefault();
                calcMol(element, massInGrams);
                alert(`${moles}`);
            }} >
                    {/* <Dropdown /> */}
            
                <input
                    placeholder="Mass in grams"
                    value={massInGrams}
                    onChange={handleMassInGramsChange}
                />
                <button onSubmit={handleSubmit}>submit</button>
                <button onSubmit={handleReset}>reset</button>
            </form>
            <h4>{moles} mol  {element.symbol}</h4>
        </div>
    )
}