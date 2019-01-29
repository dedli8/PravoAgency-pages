import React, {Component} from 'react';
import Fb from './icons/Fb';
import Twitter from './icons/Twitter';
import Insta from './icons/Insta';

class Footer extends Component {
    render() {
        return (

    <footer className='footer' id="footer">
        <div className="container">
                <h2 className="name">pravo agency:</h2>
        <address>01001, Киев, ул.Костёльная 9, оф.8<br/>+380 (67) 324 10 10<br/><a className="email">hello@pravo.agency</a>
        </address>
        <div className="socials">
            <a className="item fb"><Fb/></a>
            <a className="item twitter"><Twitter/></a>
            <a className="item insta"><Insta/></a>
        </div>
        <small className="copyrights">© 2015, <span>Pravo agency</span></small>
        </div>
            </footer>
        );
    }
}

export default Footer;
