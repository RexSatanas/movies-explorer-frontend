import React from 'react';
import MoviesCard from "../MoviesCard/moviesCard";
import './moviesCardList.css';


import image1 from '../../../images/movie1.jpg';
import image3 from '../../../images/movie3.jpg';
import image2 from '../../../images/movie2.jpg';
import image4 from '../../../images/movie4.jpg';
import image5 from '../../../images/movie5.jpg';
import image6 from '../../../images/movie6.jpg';
import image7 from '../../../images/movie7.jpg';


function MoviesCardList(props) {
    return (
        <section className='movies-cardList'>
            <div className='movies-cardList__div'>
            <div className='movies-cardList__container'>
                <div className='movies-cardList__card'>
                    <MoviesCard url={image1} title='33 слова о дизайне' subtitle='1ч 47м'/>
                    <MoviesCard url={image2} title='Киноальманах «100 лет дизайна»' subtitle='1ч 47м'/>
                    <MoviesCard url={image3} title='В погоне за Бенкси' subtitle='1ч 47м'/>
                    <MoviesCard url={image4} title='Баския: Взрыв реальности' subtitle='1ч 47м'/>
                    <MoviesCard url={image5} title='Бег это свобода' subtitle='1ч 47м'/>
                    <MoviesCard url={image6} title='Книготорговцы' subtitle='1ч 47м'/>
                    <MoviesCard url={image7} title='Когда я думаю о Германии ночью' subtitle='1ч 47м'/>
                </div>
                {/*<button className='movies-cardList__button'>Ещё</button>*/}
            </div>
            </div>
            
        </section>
    )
}

export default MoviesCardList;