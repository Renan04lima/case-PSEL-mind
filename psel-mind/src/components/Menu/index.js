import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo.png'
import './Menu.css'

function Menu(props) {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Renan Flix logo"></img>
            </Link>

        </nav>
    )
}

export default Menu