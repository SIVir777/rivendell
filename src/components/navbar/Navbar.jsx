import React, {useState} from 'react';
import './navbar.css';
import strelka from '../../assets/img/strelka_red.png';

const Navbar = function({element, setElement}) {
    
    const [menuTel, setMenuTel] = useState(false);

    function clickMenuTelPunct(text) {
        setElement(text);
        setMenuTel(false);
    };

    document.addEventListener('click', function(e) {
        setMenuTel(false);
    });

    return (
    
        <div className="blockNavbar">
            <div className="container contentNavbar">
                <ul className="menuNavbar">
                    <li onClick={(e) => setElement(e)}>О нас</li>
                    <li onClick={(e) => setElement(e)}>Бизнес-партнеры</li>
                    <li onClick={(e) => setElement(e)}>Наши проекты</li>
                    <li onClick={(e) => setElement(e)}>Услуги</li>
                    <li onClick={(e) => setElement(e)}>Контакты</li>
                </ul>
                <div className="position">
                    <img src={strelka} alt="position" className="strelka"/>
                    <div className="textAdres">г. Москва, Алтуфьевское ш.79А</div>
                </div>
                <div onClick={(e) => {e.stopPropagation(); setMenuTel(!menuTel)}} className="gamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {menuTel ? 
                <ul onClick={(e) => e.stopPropagation()} className="menuTel">
                    <li onClick={(e) => clickMenuTelPunct(e)}>О нас</li>
                    <li onClick={(e) => clickMenuTelPunct(e)}>Бизнес-партнеры</li>
                    <li onClick={(e) => clickMenuTelPunct(e)}>Наши проекты</li>
                    <li onClick={(e) => clickMenuTelPunct(e)}>Услуги</li>
                    <li onClick={(e) => clickMenuTelPunct(e)}>Контакты</li>
                </ul>
                :
                <></>
                }
            </div>
        </div>
    );
};

export default Navbar;