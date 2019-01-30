import React from 'react';
import Fb from './icons/Fb';
import Twitter from './icons/Twitter';
import Insta from './icons/Insta';

const Footer = () => {
    return (
        <footer className='footer' id="footer">
            <div className="container">
                <h2 className="name">pravo agency:</h2>
                <address>01001, Киев, ул.Костёльная 9, оф.8<br/>+380 (67) 324 10 10<br/><a href="/" className="email">hello@pravo.agency</a>
                </address>
                <div className="socials">
                    <a href="/" className="item fb"><Fb/></a>
                    <a href="/" className="item twitter"><Twitter/></a>
                    <a href="/" className="item insta"><Insta/></a>
                </div>
                <small className="copyrights">© 2015, <span>Pravo agency</span></small>
            </div>
        </footer>
    );
};

export default Footer;
