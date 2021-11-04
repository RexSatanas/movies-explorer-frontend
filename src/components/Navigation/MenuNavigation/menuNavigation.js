import React from 'react';
import {Link} from "react-router-dom";
import './menuNavigation.css';

function MenuNavigation(props) {

    return(
        <section className={`menu-navigation ${props.isMenuOpen ? 'menu-navigation__opened' : ''}`}>
            <div className='menu-navigation__container'>
              <button className='menu-navigation__close'  onClick={props.handleToggleMenu}></button>
                <div className='menu-navigation__group'>
                    <Link to='/' className='menu-navigation__link'>Главная</Link>
                    <Link to='/movies' className='menu-navigation__link menu-navigation__link_active'>Фильмы</Link>
                    <Link to='/saved-movies' className='menu-navigation__link'>Сохраненные Фильмы</Link>
                    <div className='menu-navigation__link menu-navigation__link-style account__style'>
                    <Link to='/profile' className='menu-navigation__link-acc'>Аккаунт</Link>
                    <img className='header__profile-pic'/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}


export default MenuNavigation;