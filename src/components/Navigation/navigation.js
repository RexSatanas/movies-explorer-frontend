import React from 'react';
import {Link} from "react-router-dom";
import './navigation.css'
import MenuNavigation from "./MenuNavigation/menuNavigation";


function Navigation(props) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    function handleToggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <header>
            <MenuNavigation isMenuOpen={isMenuOpen}  handleToggleMenu={handleToggleMenu} />
            <>
                <div className='header__group header__group-style'>
                    <div className='header__box-link'>
                    <Link to='/movies' className='header__nav-link'>Фильмы</Link>
                    <Link to='/saved-movies' className='header__nav-link'>Сохраненые фильмы</Link>
                    </div>
                    <div className='header__nav-link-style'>
                        <Link to='/profile' className='header__nav-link'>Аккаунт</Link>
                    </div>
                    <button className='header__menu'  onClick={handleToggleMenu}/>
                </div>
            </>
        </header>
    )
}
export default Navigation;