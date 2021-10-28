import React from 'react';
import './aboutMe.css';
import image from '../../../images/IMG_0300.JPG';

function AboutMe() {
    return(
<section className='aboutMe'>
    <div className='aboutProject__container'>
        <h2 className='aboutProject__header-title aboutMe__header-title'>Студент</h2>
        <div className='aboutProject__block aboutMe__blocks'>
            <div className='aboutProject__box aboutMe__box'>
                <img className='aboutMe__img' src={image} alt='фото студента'/>
            </div>
            <div className='aboutProject__box'>
                <h3 className='aboutProject__title aboutMe__title'>Денис</h3>
                <p className='aboutProject__subtitle aboutMe__subtitle aboutMe__subtitle-fontsize'>Фронтенд-разработчик, 22 года</p>
                <p className='aboutProject__subtitle aboutMe__subtitle'>Живу в Москве. Занимаюсь музыкой и немного киберспортом. Недавно начал кодить. Планирую закончить обучение по веб разработке и заниматься фриланс заказами</p>
            </div>
        </div>
        <div className='aboutMe__links'>
            <a href="https://github.com/RexSatanas" target="_blank"  rel="noopener noreferrer" className="aboutMe__link">Github</a>
            <a href="https://www.facebook.com/SatanasRex" target="_blank"  rel="noopener noreferrer" className="aboutMe__link">Facebook</a>
        </div>
    </div>
</section>
    )
}















export default AboutMe;