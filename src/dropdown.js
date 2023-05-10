import React from "react";
import "./App.css";
import { Elements } from './PubChemElements';
import {useState} from 'react';
import {useEffect} from 'react';
// import Card from './elementCard.js';

const Dropdown = ({ placeHolder }) => {
    const elements = [...Elements];

    const [showMenu, setShowMenu] = useState(false);
    const [ selectedValue, setSelectedMenu ] = useState(null);

    useEffect(() => {
        const handler = () => setShowMenu(false);

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });


    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };


    const getDisplay = () => {
        if(selectedValue) {
            return `${selectedValue.name}:  atomic mass: ${selectedValue.atomicMass}, atomic radius: ${selectedValue.atomicRadius}, standard state: ${selectedValue.standardState}`;
        }
        return placeHolder;
    };

    const onItemClick = (element) => {
        setSelectedMenu(element);
    };
    const isSelected = (element) => {
        if(!selectedValue) {
            return false;
        }
        return selectedValue.value === element.name;
    };

    return (
        <div className="dropdown-container">
            <div onClick={handleInputClick} className="dropdown-input">
                {showMenu && (
                    <div className="dropdown-menu">
                        {Elements.map((element) => (
                            <div 
                            onClick={() => onItemClick(element)}
                            key={elements.name} 
                            className={`dropdown-item ${isSelected(element.name) && "selected"} `}  
                            >
                                {element.name}
                            </div>
                        ))}
                    </div>
                )}
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        
                    </div>
                </div>
            </div>
        </div>
)}

export default Dropdown;