import React from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
const Header = ()=> (
    <Router>
    <div className="header">
        <Link classname="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            <Link className="option" to="/sign-in-out">
                SIGNIN/OUT
            </Link>
        </div>

    </div>
    </Router>
)

export default Header;