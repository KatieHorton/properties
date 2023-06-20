import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// npm install reactjs-popup/dist

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