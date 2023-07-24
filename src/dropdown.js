import React from "react";
import "./App.css";
import { Elements } from './PubChemElements';
import { useState } from 'react';
import { useEffect } from 'react';
// import Cards from './elementCard';


// FilterableElementsTable
//     Dropdown
//     ElementsList
//         ElementCategoryRow
//         ElementRow 


const Icon = () => {
    return (
        <div className="icon">
            
            </div>
            );
  };
        
  
const Dropdown = ({ placeHolder }) => {
        const elements = [...Elements];

        const [showMenu, setShowMenu] = useState(false);
        const [selectedValue, setSelectedMenu] = useState('');

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
            if (selectedValue) {

                return selectedValue.name
            }
            return placeHolder;
        };

        const onItemClick = (element) => {
            setSelectedMenu(element);
        };
        const isSelected = (element) => {
            if (!selectedValue) {
                return false;
            }
            return selectedValue.value === element;
        };


        // if (isSelected) {
        //     return <h1>{massInGrams / atomicMass}</h1>;
        //   } else {

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

                                    {element.name} {element.atomicMass}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="dropdown-selected-value">{getDisplay()}</div>
                    <div className="dropdown-tools">
                        <Icon />
                        <div className="dropdown-tool">

                        </div>
                    </div>
                </div>
            </div>
        )
    };

    export default Dropdown;
