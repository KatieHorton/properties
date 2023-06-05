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

const Dropdown = ({ placeHolder }) => {
    const elements = [...Elements];

    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedMenu] = useState(null);

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
    )
};

export default Dropdown;

/*

const elements = [...Elements];
class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'helium'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite element is: ' + this.state.value);
      event.preventDefault();
    }
    getElementsList() {
        let listItems = elements.map((element) => {
                (<li><option value={element.name}>{element.name}</option></li>)
                return listItems
        });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite element:
            <select value={this.state.value} onChange={this.handleChange}>
                <ul>
                    {this.getElementsList()}

                </ul>
               
             
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Dropdown;
  */