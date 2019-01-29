import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/img/Logo.svg';
import {Consumer} from "../../../context";

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
                            <a href="/">
                                <img src={logo} className="logo" alt="logo"/></a>
                            <nav className="main-menu">
                                <a href="#services" className="item">услуги и цены</a><a href="#reviews" className="item">отзывы</a><a href="#footer"
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
