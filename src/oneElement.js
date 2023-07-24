import React from 'react';
import { useState } from 'react';
import { Elements } from './PubChemElements.js';

const elements = [...Elements];


export default function OneElement() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < elements.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1)
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let color;

  const getColor = () => {

    if (oneElement.groupBlock === "Nonmetal") {
      return color = "rgb(14, 255, 168)"
    } else if (oneElement.groupBlock === "Noble gas") {
      return color = "rgb(224, 156, 255)"
    } else if (oneElement.groupBlock === "Alkali metal") {
      return color = "rgb(137, 242, 255)"
    } else if (oneElement.groupBlock === "Alkaline earth metal") {
      return color = "rgb(116, 175, 255)"
    } else if (oneElement.groupBlock === "Metalloid") {
      return color = "rgb(199, 233, 255)"
    } else if (oneElement.groupBlock === "Halogen") {
      return color = "rgb(255, 187, 224)"
    } else if (oneElement.groupBlock === "Post-transition metal") {
      return color = "rgb(250, 103, 103)";
    } else if (oneElement.groupBlock === "Transition metal") {
      return color = "rgb( 255, 227, 196)"
    } else if (oneElement.groupBlock === "Lanthanide") {
      return color = "rgb(228, 255, 118)"
    } else if (oneElement.groupBlock === "Actinide") {
      return color = "rgb(139, 88, 143)"
    } else {
      return color = "rgb(255, 255, 255)"
    }

  }

  let oneElement = elements[index];

  return (
    <div className="oneElement">

      <div className="oneElement-atomicNumber"
        color={getColor(oneElement)}>
        <p>
          {oneElement.atomicNumber}
        </p>
      </div>
      <div className="main-deets">
        <div className="oneElement-symbol">
          <h1 style={{ color }}>
            {oneElement.symbol}
          </h1>
        </div>

        <div className="oneElement-details">
          <p className="oneElement-name">
            {oneElement.name}
          </p>
          <p>
            {oneElement.atomicMass}
          </p>
          <p>
            {oneElement.standardState}
          </p>
        </div>
      </div>

      <div className="oneElement-buttons">
        <p>
          ({index + 1} of {elements.length})
        </p>
        {showMore && <div className="more-details"><p>Mass: {oneElement.atomicMass} <br></br>Electron Configuration: {oneElement.electronConfiguration} <br></br> Boiling Point: {oneElement.boilingPoint}<br></br>Melting Point: {oneElement.meltingPoint}<br></br>Electron Affinity: {oneElement.electronAffinity}<br></br>Electronegativity: {oneElement.electronegativity}<br></br></p></div>}
        <button onClick={handlePrevClick}>
          Previous Element...
        </button>
        <button onClick={handleNextClick}>
          Next Element...
        </button>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details...
        </button>

      </div>

    </div>

  );
}


// const Popup = () => (
//     <Popup trigger={<button> Trigger</button>} position="right center">
//         <div className='popup-content'>
//             <p>{element.atomicNumber}</p>
//             <h1>{element.name}</h1>
//             <h2>{element.atomicMass}</h2>
//             <h4>{element.electronConfiguration}</h4>
//             <h4>{element.groupBlock}</h4>
//             <h4>{element.standardState}</h4>
//         </div>
//     </Popup>
// );

// export default Popup;
// .popup-content {
//     margin: auto;
//     background: rgb(255, 255, 255);
//     width: 50%;
//     padding: 5px;
//   }

//   .popup-arrow {
//     color: rgb(255, 255, 255);
//   }
//   [role='tooltip'].popup-content {
//     width: 200px;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
//   }

//   .popup-overlay {
//     background: rgba(0, 0, 0, 0.5);
//   }
//   [data-popup='tooltip'].popup-overlay {
//     background: transparent;
//   }
// export default function PopupGfg() {
//     return (
//         <div>
//             <h4>{Element.name}</h4>
//             <Popup trigger=
//                 {<button> Click to View</button>}
//                 modal nested>
//                 {
//                     close => (
//                         <div className='single-element'>
//                             <div className='content'>
//                                 <p>{Element.atomicNumber}</p>
//                                 <h1>{Element.name}</h1>
//                                 <h2>{Element.atomicMass}</h2>
//                                 <h4>{Element.electronConfiguration}</h4>
//                                 <h4>{Element.groupBlock}</h4>
//                                 <h4>{Element.standardState}</h4>

//                             </div>
//                             <div>
//                                 <button onClick=
//                                     {() => close()}>
//                                     Close Selection
//                                 </button>
//                             </div>
//                         </div>
//                     )
//                 }
//             </Popup>
//         </div>
//     )
// };

/////////////////////**** FAMILY TASK CHART ---------------------////////////////////// */
// export default function TaskTable() {
//   return (
//     <div className='Tasks'>
//       <div className='Table'>
//         <table>
//           <h3>Jake's Daily Tasks:</h3>
//           <tr>
//             <th></th><th>m</th><th>t</th><th>w</th><th>th</th><th>f</th><th>s</th><th>su</th>
//           </tr>
//           <tr><th>make bed</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
//           <tr><th>feed pet </th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
//           <tr><th>collect dishes and trash</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
//           <tr><th>pick up toys in room</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
//           <tr> <th>20 min math</th><td></td><td></td><td></td><td></td><td></td><td>X</td><td>X</td></tr>
//           <tr><th>20 min reading</th><td></td><td></td><td></td><td></td><td></td><td>X</td><td>X</td></tr>
//           <tr><th>empty trash bin</th><td>X</td><td>X</td><td>X</td><td></td><td>X</td><td>X</td><td>X</td></tr>
//           <tr><th>dust surfaces in room</th><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td><td></td><td>X</td></tr>
//         </table>
//       </div>

//     </div>
//   )
// }



// CSS FOR TABLE

/*
tasks------------------------------
*/
// .Table  {
//   border: 2px solid rgb(30, 30, 30);
//   background-color: rgb(244, 244, 244);
//   margin: 16px;
//   padding: 8px;

// }

// .Table h3 {
//   text-align: center;
//   padding-left: 12px;
//   font-family: Helvetica, Arial, sans-serif;
//   font-weight: 400;
//   color:rgb(39, 42, 56);
// }

// .Table th {
//   text-align: right;
//   padding-right: 10px;
//   font-family: Arial, Helvetica, sans-serif;
//   color:rgb(39, 30, 30);
//   font-size: 20px;
//   font-weight: 500;
  
// }
// .Table td {
//   border: 2px solid rgb(30, 30, 30);
//   width: 50px;
//   height: 50px;
//   text-align: center;
//   font-weight: 400px;
//   color:rgb(30, 30, 30);
// }

// .Table th {
//   font-size: 20px;
// }