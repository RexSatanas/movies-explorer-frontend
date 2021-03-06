import React from 'react';
import '../Register/register.css';
import {Link} from "react-router-dom";
import LogoHeader from "../Header/HeaderLogo/headerLogo";


function Login() {
    return (
        <section className='login'>
            <div className='register__container'>
                <LogoHeader/>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form'>
                    <div className='register__box'>
                        <p className='register__input-name'>E-mail</p>
                        <input className='register__input' type='email' name='email' placeholder='test@test.ru' required/>
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>Пароль</p>
                        <input className='register__input' type='password' name='passw' placeholder='*************' required/>
                    </div>
                    <button className='register__button' type='submit'>Войти</button>
                </form>
                <div className='register__footer'>
                    <p className='register__text'>Еще не зарегистрированы?</p>
                    <Link className='register__link' to='/signup'>Регистрация</Link>
                </div>
            </div>
        </section>
    )
}

export default Login;