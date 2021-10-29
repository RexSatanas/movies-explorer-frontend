import React from 'react';
import './searchForm.css';
import FilterCheckbox from "../FilterCheckBox/filterCheckBox";

function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__group'>
                <div className='search-form__container'>
                    <input className='search-form__input' maxLength='30' type="text" placeholder="Фильм" required/>
                    <div className="search-form__box">
                        <button className='search-form__button' type="submit"></button>
                    </div>
                    <FilterCheckbox />
                </div>
            </form>
        </section>
    )
}

export default SearchForm;