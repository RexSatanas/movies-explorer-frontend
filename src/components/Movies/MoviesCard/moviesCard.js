import React from 'react';
import './moviesCard.css';
import {useLocation} from "react-router-dom";

function MoviesCard(props) {
    const {pathname} = useLocation();
    return (
        <section className='movies-card'>
            <div className='movies-card__container'>
                <div className='movies-card__group'>
                    <h2 className='movies-card__title'>{props.title}</h2>
                    <p className='movies-card__subtitle'>{props.subtitle}</p>
                    {pathname === "/movies" ? (
                        <button className='movies-card__like'></button>
                    ) : (
                        <button className='movies-card__delete'></button>
                    )}
                </div>
                <img className='movies-img' src={props.url} alt={props.title}></img>
            </div>
        </section>
    )
}

export default MoviesCard;