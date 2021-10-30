import React from 'react';
import Footer from "../Footer/footer";
import SearchForm from "../Movies/SearchForm/searchForm";
import MoviesCardList from "../Movies/MoviesCardList/moviesCardList";

function SavedMovies() {
    return (
        <main className='main'>
            <SearchForm/>
            <MoviesCardList/>
            <Footer/>
        </main>
    )
}

export default SavedMovies;