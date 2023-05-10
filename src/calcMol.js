const Elements = require('./PubChemElements.js');

//  AVOGADOROS's NUMBER  //
let avoNum = 6.022 * 10 ** 23;
// console.log(0.414 * avoNum);

// FIND AN ELEMENT //
let elements;
const getElements = () => {
  return elements = Elements;
};

 // console.log(getElements());



let element;
function getOneElement(elementParam) {
  element = Elements[elementParam];
  return [element]
};

// console.log(getOneElement("carbon"));

//  CONVERT TO GRAMS
let massInGrams;
exports.convertToGr = async function (mass, unit) {

  if (unit === "kg") {
    return massInGrams = mass * 1000
  } else if (unit === "hg") {
    return mass = mass * 100
  } else if (unit === "dag") {
    return mass = mass * 10
  } else if (unit === "g") {
    return massInGrams = mass
  } else if (unit === "dg") {
    return mass = mass / 10
  } else if (unit === "cg") {
    return mass = mass / 100
  } else if (unit === "mg") {
    return massInGrams = mass / 1000
  } else {
    return 'GRAM CONVERSION ERROR'
  }
}
// console.log(convertToGr(7.89, "kg"));


//  CALCULATE MOLAR MASS (MOL) FROM MASS IN GRAMS //
let moles;
function calcMol(element, massInGrams) {
  for (let i = 0; i > Elements.length; i++) {
    let atomicMass = element.atomicMass;
    moles = massInGrams / atomicMass;
    return moles + ` mol ${element.symbol}`
  }
}
// console.log(calcMol(silicon, 0.0928)); 

// NUMBER OF ATOMS FROM MOL
function findAtomsFromMol(mol) {
  return mol * avoNum
}
// console.log(findAtomsFromMol(0.26907227615624035)); 

// CALCULATE MOLAR MASS(MOL) OF MULTIPLE ELEMENTS FROM MASS IN GRAMS //
let newTotal;
function molarMass(element1, sub1, element2, sub2, element3, sub3, sampleMassInGrams) {
  for (let i = 0; i = Elements.length; i++) {
    let total = (element1.atomicMass * sub1) + (element2.atomicMass * sub2) + (element3.atomicMass * sub3);
    newTotal = sampleMassInGrams / total;
    return newTotal + ` mol ${element1.symbol}${sub1} ${element2.symbol}${sub2} ${element3.symbol}${sub3}`
  }
}
// console.log(molarMass(hydrogen, 8, oxygen, 4, carbon, 9, 7890));  

//  ^^ WITH TWO ELEMENTS 
function molarMassTwo(sampleMassInGrams, element1, sub1, element2, sub2) {
  for (let i = 0; i = Elements.length; i++) {
    let total = (element1.atomicMass * sub1) + (element2.atomicMass * sub2);
    newTotal = sampleMassInGrams / total;
    return newTotal + ` mol ${element1.symbol}${sub1} ${element2.symbol}${sub2}`
  }
}
// console.log(molarMassTwo(33.8, flourine, 2, strontium, 1));

// CALCULATE MASS IN GRAMS FROM NUMBER OF ATOMS //
function calcMassFromAtoms(element, numOfAtoms) {
  for (let i = 0; i = Elements.length; i++) {
    let totalMoles = numOfAtoms / avoNum;
    let massInGrams = totalMoles * element.atomicMass;
    return massInGrams + ' g ' + `'${element.symbol}'`
  }
}
// console.log(calcMassFromAtoms(silver, 1.99*10**22)); 


//  CALCULATE NUMBER OF ATOMS FROM MASS IN GRAMS // 
let atoms;
function findNumOfAtoms(element, massInGrams) {
  for (let i = 0; i = Elements.length; i++) {
    let atomicMass = element.atomicMass;
    atoms = (massInGrams / atomicMass) * avoNum;
    return atoms + ` atoms ${element.symbol}`
  }
}
// console.log(findNumOfAtoms(silver, 0)); 



