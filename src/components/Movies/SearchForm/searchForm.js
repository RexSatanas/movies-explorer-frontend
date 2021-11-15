import React, { useState } from 'react';
import './searchForm.css';
import FilterCheckbox from "../FilterCheckBox/filterCheckBox";
import { useForm } from '../../Validation/UseForm';

import { getAllMovies } from '../../utils/MoviesApi';

import { complexMoviesFilter } from '../../utils/movies-filter';
function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__group'>
                <div className='search-form__container'>
                    <div className='search-form__input_box'>
                        <div className='search-form__image-box'></div>
                        <input className='search-form__input' maxLength='30' type="text" placeholder="фильм" required/>
                    </div>
                <div className="search-form__box">
                        <button className='search-form__button' type="submit">Найти</button>
                    </div>
                    <FilterCheckbox />
                </div>
            </form>
        </section>
    )
}

export default SearchForm;