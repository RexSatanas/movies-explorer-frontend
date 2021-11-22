import React from 'react';
import './moviesCard.css';
import {useLocation} from "react-router-dom";

function MoviesCard(props) {
    const {pathname} = useLocation();
    const { moviesId, updateLikedMoviesIds, likedMoviesIds, movie } = props;
    const duration = `${Math.round(props.duration / 60)}ч ${props.duration % 60}м`;

    const isMovieLiked = likedMoviesIds.indexOf(moviesId) !== -1;
    const likeClassName = `movies-card__like ${isMovieLiked ? 'movies-card__like_active' : ''}`;

    return (
        <section className='movies-card'>
            <div className='movies-card__container'>
                <div className='movies-card__group'>
                    <h2 className='movies-card__title'>{props.title}</h2>
                    <p className='movies-card__subtitle' >{duration}</p>
                    {pathname === "/movies" ? (
                        <button
                            className={ likeClassName }
                            onClick={ () => { updateLikedMoviesIds(moviesId, movie) } }
                        />
                    ) : (
                        <button className='movies-card__delete'
                            onClick={ () => { updateLikedMoviesIds(moviesId, movie) } }
                        />
                    )}
                </div>
                <a href={movie.trailerLink} target="_blank"  rel="noopener noreferrer">
                    <img className='movies-img' src={props.url} alt={props.title}/>
                </a>
            </div>
        </section>
    )
}

export default MoviesCard;