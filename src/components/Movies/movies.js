import React, { useState, useEffect, useCallback } from 'react';
import SearchForm from "./SearchForm/searchForm";
import Preloader from "./Preloader/preloader";
import MoviesCardListWrapper from "../MoviesCardListWrapper/MoviesCardListWrapper";
import Footer from "../Footer/footer";
import { getParamsByScreenWidth } from '../../utils/getParamsByScreenWidth';

function Movies(props) {

    const [isPreloaderActive, setPreloaderStatus] = useState(false);
    const [moviesStartParams, setMoviesStartParams] = useState(getParamsByScreenWidth());
    const [allMovies, setMovies] = useState([]);

    const { searchProblemMessage, setSearchProblemMessage } = props;

    const memoizedCallback = useCallback(
      () => {
        function setNewCardsByResize() {
          setMoviesStartParams(getParamsByScreenWidth())
        }

        window.addEventListener("resize", setNewCardsByResize);

        return () => {
          window.removeEventListener("resize", setNewCardsByResize);
        }
      },
      [],
    );

    useEffect(memoizedCallback);

    return(
        <main className='main'>
        <SearchForm
            setMovies={ setMovies }
            setPreloaderStatus={ setPreloaderStatus }
            setSearchProblemMessage={ setSearchProblemMessage }
            searchFormType="movies"
        />
            {
              isPreloaderActive && (
                <Preloader />
              )
            }
        <MoviesCardListWrapper
              movies={ allMovies }
              searchProblemMessage={ searchProblemMessage }
              moviesStartParams={ moviesStartParams }
              updateLikedMoviesIds={ props.updateLikedMoviesIds }
              likedMoviesIds={ props.likedMoviesIds }
            />
           <Footer/>
        </main>

    )
}

export default  Movies;