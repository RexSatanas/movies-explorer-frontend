import React from 'react';
import './register.css';
import {Link} from "react-router-dom";
import LogoHeader from "../Header/HeaderLogo/headerLogo";

function Register() {
    return (

        <section className='register'>

            <div className='register__container'>
                <LogoHeader/>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form'>
                    <div className='register__box'>
                        <p className='register__input-name'>Имя</p>
                        <input className='register__input' type='text' name='name' placeholder='Денис' required/>
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>E-mail</p>
                        <input className='register__input' type='email' name='email' placeholder='rexsatanas@yandex.ru' required/>
                    </div>
                    <div className='register__box'>
                        <p className='register__input-name'>Пароль</p>
                        <input className='register__input' type='password' name='passwo' placeholder='**********' required/>
                    </div>
                    <span className='register__subtitle'>Что-то пошло не так...</span>
                    <button className='register__button' type='submit'>Зарегистрироваться</button>
                </form>
                <div className='register__footer'>
                    <p className='register__text'>Уже зарегистрированы?</p>
                    <Link className='register__link' to='/signin'>Войти</Link>
                </div>
            </div>
        </section>
    )
}


export default Register;