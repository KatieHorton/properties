import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Elements } from './PubChemElements.js';

const Icon = () => {
    return (
        <svg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#f4f4f4'>
            <g id='SVGRepo_bgCarrier' stroke-width='0' />
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' />
            <g id='SVGRepo_iconCarrier'> <path opacity='0.5' d='M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z' fill='#8c8c8c' /> <path d='M9.53033 9.96967C9.23744 9.67678 8.76256 9.67678 8.46967 9.96967C8.17678 10.2626 8.17678 10.7374 8.46967 11.0303L11.4697 14.0303C11.6103 14.171 11.8011 14.25 12 14.25C12.1989 14.25 12.3897 14.171 12.5303 14.0303L15.5303 11.0303C15.8232 10.7374 15.8232 10.2626 15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L12 12.4393L9.53033 9.96967Z' fill='#8c8c8c' /> </g>
        </svg>
    );
};

const CloseIcon = () => {
    return (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path opacity='0.4' d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z' fill='#292D32' />
            <path d='M13.0594 12.0001L15.3594 9.70011C15.6494 9.41011 15.6494 8.93011 15.3594 8.64011C15.0694 8.35011 14.5894 8.35011 14.2994 8.64011L11.9994 10.9401L9.69937 8.64011C9.40937 8.35011 8.92937 8.35011 8.63938 8.64011C8.34938 8.93011 8.34938 9.41011 8.63938 9.70011L10.9394 12.0001L8.63938 14.3001C8.34938 14.5901 8.34938 15.0701 8.63938 15.3601C8.78938 15.5101 8.97937 15.5801 9.16937 15.5801C9.35937 15.5801 9.54937 15.5101 9.69937 15.3601L11.9994 13.0601L14.2994 15.3601C14.4494 15.5101 14.6394 15.5801 14.8294 15.5801C15.0194 15.5801 15.2094 15.5101 15.3594 15.3601C15.6494 15.0701 15.6494 14.5901 15.3594 14.3001L13.0594 12.0001Z' fill='#292D32' />
        </svg>
    );
};


export function Dropdown({placeHolder, elements, isMulti, isSearchable, onChange}) {
    elements = [...Elements];
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        setSearchValue('');
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    });
    const handleInputClick = (e) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeHolder;
        }
        if (isMulti) {
            return (
                <div className='dropdown-tags'>
                    {selectedValue.map((element) => (
                        <div key={element.name} className='dropdown-tag-element'>
                            {element.name}
                            <span onClick={(e) => onTagRemove(e, element)} className='dropdown-tag-close'> <CloseIcon /></span>

                        </div>
                    ))}
                </div>
            );
        }
        return selectedValue.name;
    };

    const removeelement = (element) => {
        return selectedValue.filter((i) => i.value !== element.name);

    };

    const onTagRemove = (e, element) => {
        const newValue = removeelement(element);
        setSelectedValue(newValue);
        onChange(i => newValue);
    };

    const onelementClick = (element) => {
        let newValue;
        if (isMulti) {
            if (selectedValue.findIndex((i) => i.value === element.value) >= 0) {
                newValue = removeelement(element);
            } else {
                newValue = [...selectedValue, element];
            }
        } else {
            newValue = element;
        }
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const isSelected = (element) => {
        if (isMulti) {
            return selectedValue.filter((i) => i.value === element.name).length > 0;
        }

        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === element.name;
    };

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const getelements = () => {
        if (!searchValue) {
            return elements;
        }

        return elements.filter(
            (element) => element.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        );
    };
    //  need updater fn... must be callback like (n => n + 1 )
    //  to take the return value of previous updater
    return (
        <div className='dropdown-container'>
            <div ref={inputRef} onClick={handleInputClick} className='dropdown-input'>
                <div className='dropdown-selected-value'>{getDisplay()}</div>
                <div className='dropdown-tools'>
                    <div className='dropdown-tool'>
                        <Icon />
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className='dropdown-menu'>
                    {isSearchable && (
                        <div className='search-box'>
                            <input onChange={onSearch} value={searchValue} ref={searchRef} />
                        </div>
                    )}
                    {getelements().map((element) => (
                        <div
                            onClick={() => onelementClick(element)}
                            key={element.name}
                            className={`dropdown-element ${isSelected(element) && 'selected'}`}
                        >
                            {element.name}
                        </div>
                    ))}
                </div>
            )}

        </div>

    );
}
