import React from 'react';
import './filterCheckBox.css';

function FilterCheckbox() {
    return (
        <div className='filter__box'>
                <div className='filter__group'>
                <label className='filter-checkbox__container'>
                    <input className='filter-checkbox__input' type='checkbox'/>
                    <span className='filter-checkbox__slider'></span>
                </label>
                <p className='filter-checkbox__title'>Короткометражки</p>
            </div>
        </div>
            
    )
}

export default FilterCheckbox;