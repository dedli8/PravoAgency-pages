import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/Logo.svg';
import {Consumer} from "../../context";

class Header extends Component {
    toggleLang = (dispatch) => {
        dispatch({type: 'TOGGLE_LANG'});
    };
        render() {
        return (
            <Consumer>
                {value => {
                    const {uaLang} = value;
                    const { dispatch } = value;
                    return(
                    <header className="header">
                        <div className="container">
                            <a href="/">
                                <img src={logo} className="logo" alt="logo"/></a>
                            <nav className="main-menu">
                                <a href="#services" className="item">услуги и цены</a><a href="#reviews" className="item">отзывы</a><a href="#footer"
                                                                                                                                       className="item">контакты</a>
                            </nav>
                            <div className="lang-toggle" onClick= { this.toggleLang.bind(this, dispatch) } >
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
    }
}

Header.propTypes = {};

export default Header;
