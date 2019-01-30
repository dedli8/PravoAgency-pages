import React from 'react';
import logo from '../../../assets/img/Logo.svg';
import {Consumer} from "../../../context";
import {Link} from "react-router-dom";

const Header = () => {
    const toggleLang = (dispatch) => {
        dispatch({type: 'TOGGLE_LANG'});
    };
    return (
        <Consumer>
            {value => {
                const {uaLang, dispatch} = value;
                return(
                    <header className="header">
                        <div className="container">
                            <Link to="/">
                                <img src={logo} className="logo" alt="logo"/></Link>
                            <nav className="main-menu">
                                <Link to="/services" className="item">услуги и цены</Link><Link to="/reviews" className="item">отзывы</Link><a href="#footer"
                                                                                                                                       className="item">контакты</a>
                            </nav>
                            <div className="lang-toggle" onClick= { toggleLang.bind(this, dispatch) } >
                                <div className={'item '+(uaLang ? "active" : "")}>ua</div>
                                <div className={'item '+(uaLang ? "" : "active")}>ru</div>
                            </div>
                        </div>
                    </header>
                )
            }
            }
        </Consumer>
    );
};

export default Header;
