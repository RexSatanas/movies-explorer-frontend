import React, { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/moviesCardList';
import './moviesCardListWrapper.css';

function MoviesCardListWrapper(props) {
    const {
      movies,
      searchProblemMessage,
      moviesStartParams,
      updateLikedMoviesIds,
      likedMoviesIds
    } = props;
    const [partOfMovies, setPartOfMovies] = useState([]);
  
  
    useEffect(() => {
      const slicedMovies = movies.slice(0, moviesStartParams.moviesStartCount);
  
      if (slicedMovies.length !== partOfMovies.length) {
        setPartOfMovies(slicedMovies);
      }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movies]);
  
    const addMovies = () => {
      const slicedMovies = movies.slice(0, partOfMovies.length + moviesStartParams.addMoviesCount);
      setPartOfMovies(slicedMovies);
    };
  
    return (
      <section className="movies-cardList">
        <div className='movies-cardList__div'>
            <div className="movies-cardList__container">
                <MoviesCardList
                    movies={partOfMovies}
                    updateLikedMoviesIds={updateLikedMoviesIds}
                    likedMoviesIds={likedMoviesIds}
                    searchProblemMessage={searchProblemMessage}
                />
                {
                    (partOfMovies.length && (movies.length !== partOfMovies.length)) ? (
                    <button
                        className="movies-cardList__button"
                        onClick={addMovies}
                    >
                        Ещё
                    </button>
                    ) : null
                }
            </div>
        </div>
      </section>
    );
  }
  
  export default MoviesCardListWrapper;