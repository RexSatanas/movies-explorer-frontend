import React from 'react';
import './searchForm.css';
import FilterCheckbox from "../FilterCheckBox/filterCheckBox";

function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__group'>
                <div className='search-form__container'>
                    <div className='search-form__input_box'>
                        <img className='search-form__img' alt='lupa'></img>
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