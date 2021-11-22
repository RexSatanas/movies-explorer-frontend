import React from 'react';
import './filterCheckBox.css';

function FilterCheckbox({ shortMoviesFilter, setShortMoviesFilter }) {
    return (
        <div className='filter__box'>
                <div className='filter__group'>
                <label className='filter-checkbox__container'>
                    <input 
                        className='filter-checkbox__input'
                        type='checkbox'
                        value={ shortMoviesFilter }
                        checked={ shortMoviesFilter }
                        onChange={ () => { setShortMoviesFilter(!shortMoviesFilter) }}
                        />
                    <span className='filter-checkbox__slider'></span>
                </label>
                <p className='filter-checkbox__title'>Короткометражки</p>
            </div>
        </div>
            
    )
}

export default FilterCheckbox;