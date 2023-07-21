import React from 'react';
import { Elements } from './PubChemElements';
// import OneElement from './oneElement.js';
// import { useState } from 'react';
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

  }
  
  function handleClick(e) {
    alert(`${element.name} selected`) 
   }

  return (<li value={element.name}
    name={element.name}
    symbol={element.symbol}
    mass={element.atomicMass}
    groupBlock={element.groupBlock}
    color={getColor(element)}
    onClick={handleClick}
  > <button onClick={() => handleClick}>
      <div className='item-top'>
        <div className='atomic-number'>
          <p>{element.atomicNumber}</p>
        </div>
        <div className='symbol'>
          <h1 style={{ color }}>{element.symbol}</h1>
        </div>
      </div>
      <div className="words">
        <p className="element-name">{element.name}</p>
        <p>{element.atomicMass}</p>
      </div>
    </button>
  </li >)

}

)

export default function ElementsList() {
  return (
    <div className="Elements-List">
      <h3 className="table-title">Periodic Table of Elements</h3>
      <table>

        <tr>
          <td><p>1</p></td>
          <td>{listItems[0]}</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><td></td></td><td></td><td></td><td></td><td></td>
          <td>{listItems[1]}</td>
        </tr>
        <tr>
        <td><p>2</p></td>
          <td>{listItems[2]}</td>
          <td>{listItems[3]}</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td>{listItems[4]}</td>
          <td>{listItems[5]}</td>
          <td>{listItems[6]}</td>
          <td>{listItems[7]}</td>
          <td>{listItems[8]}</td>
          <td>{listItems[9]}</td>
        </tr>
        <tr>
        <td><p>3</p></td>
          <td>{listItems[10]}</td>
          <td>{listItems[11]}</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td>{listItems[12]}</td>
          <td>{listItems[13]}</td>
          <td>{listItems[14]}</td>
          <td>{listItems[15]}</td>
          <td>{listItems[16]}</td>
          <td>{listItems[17]}</td>
        </tr>
        <tr>
        <td><p>4</p></td>
          <td>{listItems[18]}</td>
          <td>{listItems[19]}</td>
          <td>{listItems[20]}</td>
          <td>{listItems[21]}</td>
          <td>{listItems[22]}</td>
          <td>{listItems[23]}</td>
          <td>{listItems[24]}</td>
          <td>{listItems[25]}</td>
          <td>{listItems[26]}</td>
          <td>{listItems[27]}</td>
          <td>{listItems[28]}</td>
          <td>{listItems[29]}</td>
          <td>{listItems[30]}</td>
          <td>{listItems[31]}</td>
          <td>{listItems[32]}</td>
          <td>{listItems[33]}</td>
          <td>{listItems[34]}</td>
          <td>{listItems[35]}</td>
        </tr>
        <tr>
        <td><p>5</p></td>
          <td>{listItems[36]}</td>
          <td>{listItems[37]}</td>
          <td>{listItems[38]}</td>
          <td>{listItems[39]}</td>
          <td>{listItems[40]}</td>
          <td>{listItems[41]}</td>
          <td>{listItems[42]}</td>
          <td>{listItems[43]}</td>
          <td>{listItems[44]}</td>
          <td>{listItems[45]}</td>
          <td>{listItems[46]}</td>
          <td>{listItems[47]}</td>
          <td>{listItems[48]}</td>
          <td>{listItems[49]}</td>
          <td>{listItems[50]}</td>
          <td>{listItems[51]}</td>
          <td>{listItems[52]}</td>
          <td>{listItems[53]}</td>
        </tr>
        <tr>
        <td><p>6</p></td>
          <td>{listItems[54]}</td>
          <td>{listItems[55]}</td>
          <td>*</td>
          <td>{listItems[71]}</td>
          <td>{listItems[72]}</td>
          <td>{listItems[73]}</td>
          <td>{listItems[74]}</td>
          <td>{listItems[75]}</td>
          <td>{listItems[76]}</td>
          <td>{listItems[77]}</td>
          <td>{listItems[78]}</td>
          <td>{listItems[79]}</td>
          <td>{listItems[80]}</td>
          <td>{listItems[81]}</td>
          <td>{listItems[82]}</td>
          <td>{listItems[83]}</td>
          <td>{listItems[84]}</td>
          <td>{listItems[85]}</td>
        </tr>
        <tr>
        <td><p>7</p></td>
          <td>{listItems[86]}</td>
          <td>{listItems[87]}</td>
          <td>*</td>
          <td>{listItems[103]}</td>
          <td>{listItems[104]}</td>
          <td>{listItems[105]}</td>
          <td>{listItems[106]}</td>
          <td>{listItems[107]}</td>
          <td>{listItems[108]}</td>
          <td>{listItems[109]}</td>
          <td>{listItems[110]}</td>
          <td>{listItems[111]}</td>
          <td>{listItems[112]}</td>
          <td>{listItems[113]}</td>
          <td>{listItems[114]}</td>
          <td>{listItems[115]}</td>
          <td>{listItems[116]}</td>
          <td>{listItems[117]}</td>
        </tr>
        <br></br>
        <br></br>
        <tr className="Lanthanide-series">
          <td><p>*Lanthanide series</p></td><td></td>
          <td>{listItems[56]}</td>
          <td>{listItems[57]}</td>
          <td>{listItems[58]}</td>
          <td>{listItems[59]}</td>
          <td>{listItems[60]}</td>
          <td>{listItems[61]}</td>
          <td>{listItems[62]}</td>
          <td>{listItems[63]}</td>
          <td>{listItems[64]}</td>
          <td>{listItems[65]}</td>
          <td>{listItems[66]}</td>
          <td>{listItems[67]}</td>
          <td>{listItems[68]}</td>
          <td>{listItems[69]}</td>
          <td>{listItems[70]}</td>
        </tr>
        <tr className="Actinide-series">
          <td><p>*Actinide series</p></td><td></td>
          <td>{listItems[88]}</td>
          <td>{listItems[89]}</td>
          <td>{listItems[90]}</td>
          <td>{listItems[91]}</td>
          <td>{listItems[92]}</td>
          <td>{listItems[93]}</td>
          <td>{listItems[94]}</td>
          <td>{listItems[95]}</td>
          <td>{listItems[96]}</td>
          <td>{listItems[97]}</td>
          <td>{listItems[98]}</td>
          <td>{listItems[99]}</td>
          <td>{listItems[100]}</td>
          <td>{listItems[101]}</td>
          <td>{listItems[102]}</td>
        </tr>

      </table>

    </div>
  )
};

/* <div className="Elements-List">
<ul>
  <li>{listItems}</li>
</ul>
</div> */