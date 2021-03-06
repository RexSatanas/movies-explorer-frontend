import React from 'react';
import './header.css'
import {NavLink, useLocation} from "react-router-dom";
import Navigation from "../Navigation/navigation";
import LogoHeader from "../Header/HeaderLogo/headerLogo";


function Header(props) {
    const {pathname} = useLocation();
    const isColorHead = pathname === '/' ? 'header' : 'header header-style';
    return (
        <header className={isColorHead}>
            <div className='header__group'>
                 <LogoHeader/>
                {props.loggedIn && ( pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') ? (
                        <Navigation />
                ) : (
                    <>
                        <div className='header__container'>
                            <NavLink className='header__button' to="/signup">
                                Регистрация
                            </NavLink>
                            <NavLink className='header__button header__button-active' to="/signin">
                                Войти
                            </NavLink>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;